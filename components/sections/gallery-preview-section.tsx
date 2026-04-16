"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fasa%CC%81da%20mala%CC%81%20%281%29.JPG-KliQxH74YnLzcHelef7Mio8zcjiVSw.jpeg",
    alt: "Dokončená fasáda",
    category: "Fasády",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facade%20Reference.JPG-6e9XsWCAjC4Ng8voVXAYZaD4dd0I42.jpeg",
    alt: "Rekonstrukce domu",
    category: "Rekonstrukce",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD%20Image.JPG-x8HhGMXVLYo0QyVOh68evezkwekngu.jpeg",
    alt: "LED osvětlení",
    category: "Sádrokartony",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Old%202.1.JPG-BpRHveFh5HD4MZmgEc0EiZt9lvAHp0.jpeg",
    alt: "Elektroinstalace",
    category: "Elektromontáže",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RD%20Image%204.JPG-dVGuXzVTpwJIu57aVvx0TRJj5r5mwk.jpeg",
    alt: "Rekonstrukce podkroví",
    category: "Rekonstrukce",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ke%20Krc%CC%8Ci%20Seka%CC%81ni%CC%81%20a%20Zac%CC%8Cis%CC%8Cte%CC%8Cni%CC%81-PKe6rsziMKaLNzRr9isizS0eEmjAGk.jpeg",
    alt: "Elektroinstalace bytového domu",
    category: "Elektromontáže",
  },
]

export function GalleryPreviewSection() {
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
        <div className="grid grid-cols-2 md:grid-cols-3 md:auto-rows-max gap-3 lg:gap-4">
          {galleryImages.map((image, index) => (
            <FadeIn key={image.alt} delay={index * 50}>
              <Link 
                href="/galerie"
                className={`group relative block overflow-hidden rounded-xl ${
                  index === 0 ? "md:row-span-2 aspect-square md:aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes={index === 0 ? "(max-width: 768px) 50vw, 33vw" : "(max-width: 768px) 50vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-primary/90 uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="text-white font-medium text-sm mt-1">
                    {image.alt}
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
