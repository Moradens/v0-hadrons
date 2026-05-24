"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"
import { Badge } from "@/components/ui/badge"
import { GalleryGrid } from "@/components/gallery-grid"
import { useDataStore } from "@/lib/client-store"

const ALL_CATEGORIES = ["Vše", "Kompletní rekonstrukce", "Fasády", "Elektromontáže", "Sádrokartony", "Zednické práce"]

export default function GalleryPage() {
  const storeProjects = useDataStore((state) => state.projects)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Map store projects to GalleryGrid format
  const projects = storeProjects.map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    description: p.description,
    image: p.imageUrl,
  }))

  // Derive active categories from projects
  const usedCategories = Array.from(new Set(projects.map((p) => p.category)))
  const categories = ["Vše", ...ALL_CATEGORIES.slice(1).filter((c) => usedCategories.includes(c))]

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-hadrons-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 mb-6"
                >
                  Galerie projektů
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-semibold text-hadrons-cream mb-6">
                  Naše realizace
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Prohlédněte si ukázky našich dokončených projektů. Každá realizace je pro nás výzvou, kterou bereme s plnou odpovědností.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            {!isHydrated ? (
              <div className="flex items-center justify-center py-24">
                <div className="text-muted-foreground">Načítám projekty...</div>
              </div>
            ) : projects.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="text-muted-foreground text-lg">Zatím žádné projekty.</p>
                <p className="text-muted-foreground text-sm mt-2">Přidejte projekty v admin panelu.</p>
              </div>
            ) : (
              <GalleryGrid projects={projects} categories={categories} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
