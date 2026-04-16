import { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Home,
  Zap,
  Grid3x3,
  Hammer,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Paintbrush,
  ShowerHead,
  Lightbulb,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Kompletní přehled našich služeb - rekonstrukce, elektromontáže, sádrokartony, zednické práce. Profesionální realizace v Praze a okolí.",
}

const services = [
  {
    id: "rekonstrukce",
    icon: Home,
    title: "Kompletní rekonstrukce",
    description:
      "Zajišťujeme kompletní rekonstrukce bytů, domů i komerčních prostor. Od demolice přes hrubé stavební práce až po finální úpravy a dokončení.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facade%20Reference.JPG-6e9XsWCAjC4Ng8voVXAYZaD4dd0I42.jpeg",
    features: [
      "Rekonstrukce bytů a bytových jader",
      "Přestavby domů a rodinných domů",
      "Komerční prostory a kanceláře",
      "Koupelny a kuchyně na klíč",
      "Kompletní stavební dozor",
      "Koordinace všech řemesel",
    ],
    subServices: [
      { icon: ShowerHead, label: "Koupelny" },
      { icon: Paintbrush, label: "Malířské práce" },
      { icon: Wrench, label: "Instalatérství" },
    ],
  },
  {
    id: "elektro",
    icon: Zap,
    title: "Elektromontáže",
    description:
      "Provádíme veškeré elektroinstalační práce od nových rozvodů až po revize. Certifikovaní elektrikáři s dlouholetou praxí.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Old%202.1.JPG-BpRHveFh5HD4MZmgEc0EiZt9lvAHp0.jpeg",
    features: [
      "Nové elektrické rozvody",
      "Rekonstrukce elektroinstalace",
      "Rozvaděče a jištění",
      "Revize elektro",
      "Inteligentní elektroinstalace",
      "LED osvětlení",
    ],
    subServices: [
      { icon: Lightbulb, label: "Osvětlení" },
      { icon: Zap, label: "Rozvody" },
      { icon: CheckCircle2, label: "Revize" },
    ],
  },
  {
    id: "sadrokartony",
    icon: Grid3x3,
    title: "Sádrokartony",
    description:
      "Profesionální sádrokartonové konstrukce - příčky, podhledy, obklady. Přesné provedení a čisté zpracování.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD%20Image.JPG-x8HhGMXVLYo0QyVOh68evezkwekngu.jpeg",
    features: [
      "Sádrokartonové příčky",
      "Zavěšené podhledy",
      "Zakrytí instalací",
      "Designové prvky a police",
      "Akustické řešení",
      "Protipožární konstrukce",
    ],
    subServices: [
      { icon: Grid3x3, label: "Příčky" },
      { icon: Home, label: "Podhledy" },
      { icon: Paintbrush, label: "Designové prvky" },
    ],
  },
  {
    id: "zdeni",
    icon: Hammer,
    title: "Zednické práce",
    description:
      "Tradiční zednické řemeslo na profesionální úrovni. Omítky, stěrky, zdění a další zednické práce.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fasa%CC%81da%20mala%CC%81%20%281%29.JPG-KliQxH74YnLzcHelef7Mio8zcjiVSw.jpeg",
    features: [
      "Vnitřní a vnější omítky",
      "Stěrky a vyrovnání stěn",
      "Zdění příček",
      "Vyrovnání podlah",
      "Obklady a dlažby",
      "Sanace a opravy",
    ],
    subServices: [
      { icon: Hammer, label: "Zdění" },
      { icon: Paintbrush, label: "Omítky" },
      { icon: Grid3x3, label: "Obklady" },
    ],
  },
]

export default function ServicesPage() {
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
                  Naše služby
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-semibold text-hadrons-cream mb-6">
                  Kompletní stavební služby
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Vše potřebné pod jednou střechou. Od drobných oprav po kompletní rekonstrukce — vždy s důrazem na kvalitu a termíny.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {services.map((service, index) => (
                <FadeIn key={service.id} delay={index * 100}>
                  <div
                    id={service.id}
                    className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
                  >
                    {/* Left: Info */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-semibold">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Sub-services badges */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {service.subServices.map((sub) => (
                          <div
                            key={sub.label}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border"
                          >
                            <sub.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">
                              {sub.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button asChild className="group">
                        <Link href="/kontakt">
                          Poptat službu
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>

                    {/* Right: Features & Image */}
                    <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      {/* Service Image */}
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                      
                      <Card className="border-border">
                        <CardContent className="p-6 lg:p-8">
                          <h3 className="font-semibold mb-6 text-lg">
                            Co zahrnuje
                          </h3>
                          <ul className="space-y-4">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                Máte zájem o naše služby?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku. Odpovíme do 24 hodin.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/kontakt">
                    Nezávazná nabídka
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+420602384239">+420 602 384 239</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
