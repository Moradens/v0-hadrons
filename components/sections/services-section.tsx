"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Grid3x3, Hammer, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"

const services = [
  {
    icon: Home,
    title: "Kompletní rekonstrukce",
    description:
      "Byty, domy, komerční prostory. Koupelny, kuchyně, bytová jádra. Vše od návrhu po realizaci.",
    href: "/sluzby#rekonstrukce",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facade%20Reference.JPG-6e9XsWCAjC4Ng8voVXAYZaD4dd0I42.jpeg",
  },
  {
    icon: Zap,
    title: "Elektromontáže",
    description:
      "Nové instalace, rekonstrukce rozvodů, rozvaděče, revize. Certifikovaní elektrikáři.",
    href: "/sluzby#elektro",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Old%202.1.JPG-BpRHveFh5HD4MZmgEc0EiZt9lvAHp0.jpeg",
  },
  {
    icon: Grid3x3,
    title: "Sádrokartony",
    description:
      "Příčky, podhledy, zakrytí instalací, designové prvky. Přesné a čisté provedení.",
    href: "/sluzby#sadrokartony",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD%20Image.JPG-x8HhGMXVLYo0QyVOh68evezkwekngu.jpeg",
  },
  {
    icon: Hammer,
    title: "Zednické práce",
    description:
      "Omítky, stěrky, zdění příček, vyrovnání stěn a podlah. Tradiční řemeslo na profesionální úrovni.",
    href: "/sluzby#zdeni",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fasa%CC%81da%20mala%CC%81%20%281%29.JPG-KliQxH74YnLzcHelef7Mio8zcjiVSw.jpeg",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgb(0,0,0)_25%,_transparent_25%,_transparent_75%,_rgb(0,0,0)_75%)] bg-[length:60px_60px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeIn>
          <div className="max-w-2xl mb-12 lg:mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
              Co nabízíme
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-foreground">
              Naše služby
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Vše potřebné pod jednou střechou — bez nutnosti koordinovat více dodavatelů.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 100}>
              <Link href={service.href}>
                <Card className="group h-full border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center shrink-0">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild className="group">
              <Link href="/sluzby">
                Zobrazit všechny služby
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
