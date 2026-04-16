"use client"

import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresa",
    value: "Klímova 338/8, Praha 5, 150 00",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+420 602 384 239",
    href: "tel:+420602384239",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "jiri.vrbicky@hadrons.cz",
    href: "mailto:jiri.vrbicky@hadrons.cz",
  },
]

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-hadrons-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(184,90,48,0.3),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <FadeIn>
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
                Kontakt
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-hadrons-cream">
                Napište nám
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Připravíme vám nezávaznou nabídku. Odpovíme do 24 hodin.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <FadeIn key={item.label} delay={index * 100}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground block">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-hadrons-cream font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-hadrons-cream font-medium">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: CTA Card */}
          <FadeIn delay={200} direction="left">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-hadrons-cream mb-4">
                Máte projekt na mysli?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Rádi vám pomůžeme s plánováním a realizací vaší rekonstrukce. Kontaktujte nás pro bezplatnou konzultaci.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group flex-1">
                  <Link href="/kontakt">
                    Odeslat poptávku
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-hadrons-cream/30 text-hadrons-cream hover:bg-hadrons-cream/10 hover:text-hadrons-cream flex-1"
                  style={{ backgroundColor: "#0d0d0d" }}
                >
                  <a href="tel:+420602384239">
                    <Phone className="mr-2 h-4 w-4" />
                    Zavolat
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
