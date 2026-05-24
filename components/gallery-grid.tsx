"use client"

import { useState } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: string | number
  title: string
  category: string
  description: string
  image: string
}

interface GalleryGridProps {
  projects: Project[]
  categories: string[]
}

export function GalleryGrid({ projects, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("Vše")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeCategory === "Vše"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const currentIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1])
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1])
    }
  }

  return (
    <>
      {/* Filter Buttons */}
      <FadeIn>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "transition-all",
                activeCategory === category &&
                  "shadow-md shadow-primary/20"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      </FadeIn>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 50}>
            <button
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary border border-border hover:border-primary/30 transition-all duration-300 w-full text-left"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-hadrons-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <Badge
                  variant="secondary"
                  className="w-fit bg-primary/20 text-primary border-primary/30 mb-2"
                >
                  {project.category}
                </Badge>
                <h3 className="text-hadrons-cream font-semibold text-lg">
                  {project.title}
                </h3>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-hadrons-dark border-white/10">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription>{selectedProject?.description}</DialogDescription>
          </DialogHeader>
          
          {selectedProject && (
            <div className="relative">
              {/* Image Container */}
              <div className="relative aspect-[16/10] bg-hadrons-dark">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </div>

              {/* Navigation Arrows */}
              {currentIndex > 0 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Předchozí"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {currentIndex < filteredProjects.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Další"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Project Info */}
              <div className="p-6">
                <Badge
                  variant="secondary"
                  className="bg-primary/20 text-primary border-primary/30 mb-3"
                >
                  {selectedProject.category}
                </Badge>
                <h3 className="text-2xl font-semibold text-hadrons-cream mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
