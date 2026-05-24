"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { useDataStore } from "@/lib/client-store"
import { useEffect, useState } from "react"

export function GalleryPreviewSection() {
  const galleryImages = useDataStore((state) => state.galleryImages)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Sort by order and take first 6
  const displayImages = isHydrated
    ? [...galleryImages].sort((a, b) => a.order - b.order).slice(0, 6)
    : []

  return (
    <section className="py-20 lg:py-28 bg-stone-900 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800/50 to-stone-900" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
                Naše realizace
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white">
                Z našeho portfolia
              </h2>
            </div>
            <Button variant="outline" asChild className="group border-white/20 text-black hover:bg-white/10 hover:text-black w-fit bg-white/80" style={{ color: "#000000" }}>
              <Link href="/galerie">
                Zobrazit vše
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {displayImages.map((image, index) => (
            <FadeIn key={image.id} delay={index * 50}>
              <Link 
                href="/galerie"
                className="group relative block overflow-hidden rounded-xl aspect-square"
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-medium text-sm">
                    {image.title}
                  </h3>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
