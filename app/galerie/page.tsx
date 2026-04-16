import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"
import { Badge } from "@/components/ui/badge"
import { GalleryGrid } from "@/components/gallery-grid"

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Prohlédněte si ukázky našich dokončených projektů - rekonstrukce bytů, koupelny, elektroinstalace a další stavební práce v Praze.",
}

const projects = [
  {
    id: 1,
    title: "Rekonstrukce bytu Praha 6",
    category: "Kompletní rekonstrukce",
    description: "Kompletní rekonstrukce bytu 3+1 včetně nové koupelny a kuchyně",
    image: "/images/gallery/project-1.jpg",
  },
  {
    id: 2,
    title: "Moderní koupelna",
    category: "Koupelny",
    description: "Luxusní koupelna s walk-in sprchou a podlahovým vytápěním",
    image: "/images/gallery/project-2.jpg",
  },
  {
    id: 3,
    title: "Elektroinstalace kanceláří",
    category: "Elektromontáže",
    description: "Kompletní elektroinstalace v nových kancelářských prostorech",
    image: "/images/gallery/project-3.jpg",
  },
  {
    id: 4,
    title: "Sádrokartonové příčky",
    category: "Sádrokartony",
    description: "Rozdělení open space kanceláře pomocí SDK příček",
    image: "/images/gallery/project-4.jpg",
  },
  {
    id: 5,
    title: "Rekonstrukce kuchyně",
    category: "Kompletní rekonstrukce",
    description: "Moderní kuchyně na míru s ostrůvkem",
    image: "/images/gallery/project-5.jpg",
  },
  {
    id: 6,
    title: "Bytové jádro",
    category: "Kompletní rekonstrukce",
    description: "Kompletní rekonstrukce bytového jádra v panelovém domě",
    image: "/images/gallery/project-6.jpg",
  },
  {
    id: 7,
    title: "Podhledy s LED osvětlením",
    category: "Sádrokartony",
    description: "Designové podhledy s integrovaným LED osvětlením",
    image: "/images/gallery/project-7.jpg",
  },
  {
    id: 8,
    title: "Rekonstrukce rodinného domu",
    category: "Kompletní rekonstrukce",
    description: "Celková rekonstrukce staršího rodinného domu",
    image: "/images/gallery/project-8.jpg",
  },
]

const categories = [
  "Vše",
  "Kompletní rekonstrukce",
  "Koupelny",
  "Elektromontáže",
  "Sádrokartony",
]

export default function GalleryPage() {
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
            <GalleryGrid projects={projects} categories={categories} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
