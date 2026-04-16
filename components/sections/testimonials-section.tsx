"use client"

import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/fade-in"

const testimonials = [
  {
    initials: "MN",
    name: "Martin Novák",
    project: "Rekonstrukce bytu 3+1 · Praha 6",
    rating: 5,
    text: "Skvělá práce, perfektní komunikace a dodržení termínu. Koupelna a kuchyně jsou přesně tak, jak jsme si představovali. Určitě doporučuji.",
    tag: "Kompletní rekonstrukce",
  },
  {
    initials: "LK",
    name: "Lucie Kratochvílová",
    project: "Elektroinstalace · Praha 5",
    rating: 5,
    text: "Rychlé, čisté a za rozumnou cenu. Pánové věděli přesně co dělají, vysvětlili mi postup a uklidili po sobě. Jsem velmi spokojená.",
    tag: "Elektromontáže",
  },
  {
    initials: "PV",
    name: "Petr Vondráček",
    project: "Rekonstrukce kancelářských prostor",
    rating: 5,
    text: "Profesionální přístup od začátku do konce. Sádrokartonové příčky a podhledy jsou perfektně provedeny, práce dokončena v termínu.",
    tag: "Sádrokartony",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-12 lg:mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
              Reference
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-foreground">
              Co říkají klienti
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Spokojení zákazníci jsou naším nejlepším doporučením.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 100}>
              <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-semibold text-sm">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.project}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground text-sm leading-relaxed italic mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                  >
                    {testimonial.tag}
                  </Badge>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild className="group">
              <Link href="/o-nas#reference">
                Zobrazit všechny reference
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
