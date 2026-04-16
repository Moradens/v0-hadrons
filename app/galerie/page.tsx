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
    title: "Fasáda rodinného domu - dokončeno",
    category: "Fasády",
    description: "Kompletní zateplení a nová fasáda rodinného domu s kamennými prvky",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fasa%CC%81da%20mala%CC%81%20%281%29.JPG-KliQxH74YnLzcHelef7Mio8zcjiVSw.jpeg",
  },
  {
    id: 2,
    title: "Rekonstrukce rodinného domu",
    category: "Kompletní rekonstrukce",
    description: "Celková rekonstrukce rodinného domu včetně nové střechy a fasády",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facade%20Reference.JPG-6e9XsWCAjC4Ng8voVXAYZaD4dd0I42.jpeg",
  },
  {
    id: 3,
    title: "Elektroinstalace bytového domu",
    category: "Elektromontáže",
    description: "Nové rozvody elektřiny ve společných prostorách bytového domu",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seka%CC%81ni%CC%81%20reference-6DSYk2YiAv9Fi5tJHTjWArlqngxCVn.jpg",
  },
  {
    id: 4,
    title: "Sekání drážek pro elektro",
    category: "Elektromontáže",
    description: "Příprava rozvodů elektřiny - sekání drážek a instalace krabic",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Old%202.1.JPG-BpRHveFh5HD4MZmgEc0EiZt9lvAHp0.jpeg",
  },
  {
    id: 5,
    title: "Fasáda v průběhu prací",
    category: "Fasády",
    description: "Probíhající práce na zateplení a fasádě rodinného domu",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fasa%CC%81da%20mala%CC%81.JPG-1mwDGOmaCATt3QW72stvMTgQnMl7lW.jpeg",
  },
  {
    id: 6,
    title: "SDK podhled v průběhu",
    category: "Sádrokartony",
    description: "Montáž sádrokartonového podhledu s přípravou pro osvětlení",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Old%20Photo.JPG-rdJ7utLYUjmrWvuDUoq6IlPlRADETS.jpeg",
  },
  {
    id: 7,
    title: "LED osvětlení v chodbě",
    category: "Sádrokartony",
    description: "Hotový SDK podhled s integrovaným LED páskem v bytovém domě",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD%20Image.JPG-x8HhGMXVLYo0QyVOh68evezkwekngu.jpeg",
  },
  {
    id: 8,
    title: "Vnitřní rekonstrukce podkroví",
    category: "Kompletní rekonstrukce",
    description: "Kompletní rekonstrukce podkroví - izolace, SDK a příprava elektro",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RD%20Image%204.JPG-dVGuXzVTpwJIu57aVvx0TRJj5r5mwk.jpeg",
  },
  {
    id: 9,
    title: "Sekání drážek v hallu bytového domu",
    category: "Elektromontáže",
    description: "Příprava elektroinstalace - sekání drážek pro rozvody v hallu",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seka%CC%81ni%CC%81%20Old%20Mar%2011%202026-SONOPx3yiFDQyiy5d6hJeb0enQlDnu.jpg",
  },
  {
    id: 10,
    title: "Elektroinstalace - příprava rozvodů",
    category: "Elektromontáže",
    description: "Sekání a začištění drážek pro elektrorozvody v hale bytového domu",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ke%20Krc%CC%8Ci%20Seka%CC%81ni%CC%81%20a%20Zac%CC%8Cis%CC%8Cte%CC%8Cni%CC%81-PKe6rsziMKaLNzRr9isizS0eEmjAGk.jpeg",
  },
  {
    id: 11,
    title: "Hotový hall s připravenými rozvody",
    category: "Elektromontáže",
    description: "Finální příprava elektroinstalace - osekané a vyčištěné drážky",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seka%CC%81ni%CC%81%20Old%20Mar%2012%202026-ylp2nG2dg9ATrcUH09P9FgKEqMLWXc.jpg",
  },
]

const categories = [
  "Vše",
  "Kompletní rekonstrukce",
  "Fasády",
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
