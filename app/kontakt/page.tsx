import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte firmu Hadrons pro nezávaznou nabídku na stavební práce a rekonstrukce. Odpovíme do 24 hodin.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+420 602 384 239",
    href: "tel:+420602384239",
    description: "Pondělí - Pátek, 8:00 - 18:00",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "jiri.vrbicky@hadrons.cz",
    href: "mailto:jiri.vrbicky@hadrons.cz",
    description: "Odpovíme do 24 hodin",
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: "Klímova 338/8, Praha 5, 150 00",
    description: "Kancelář pro osobní schůzky",
  },
  {
    icon: Clock,
    label: "Pracovní doba",
    value: "Po - Pá: 8:00 - 18:00",
    description: "Sobota po domluvě",
  },
]

export default function ContactPage() {
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
                  Kontakt
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-semibold text-hadrons-cream mb-6">
                  Ozvěte se nám
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Připravíme vám nezávaznou nabídku na míru. Stačí nám popsat váš projekt a my se vám ozveme do 24 hodin.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-semibold mb-6">
                    Pošlete nám poptávku
                  </h2>
                  <ContactForm />
                </div>
              </FadeIn>

              {/* Contact Info */}
              <FadeIn delay={200} direction="left">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">
                    Kontaktní údaje
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {contactInfo.map((item) => (
                      <Card key={item.label} className="border-border">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <span className="text-xs text-muted-foreground block mb-1">
                                {item.label}
                              </span>
                              {item.href ? (
                                <a
                                  href={item.href}
                                  className="font-semibold text-sm hover:text-primary transition-colors block mb-1"
                                >
                                  {item.value}
                                </a>
                              ) : (
                                <span className="font-semibold text-sm block mb-1">
                                  {item.value}
                                </span>
                              )}
                              <span className="text-xs text-muted-foreground">
                                {item.description}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Map Placeholder */}
                  <div className="rounded-xl overflow-hidden border border-border">
                    <div className="aspect-[16/9] bg-secondary flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <MapPin className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">Naše kancelář</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Klímova 338/8, Praha 5, 150 00
                        </p>
                        <a
                          href="https://maps.google.com/?q=Klímova+338/8,+Praha+5"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm font-medium"
                        >
                          Otevřít v Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <div className="max-w-2xl mb-12">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
                  Časté dotazy
                </span>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                  Často se nás ptáte
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {[
                {
                  q: "Jak dlouho trvá příprava cenové nabídky?",
                  a: "Obvykle do 3 pracovních dnů od prohlídky objektu. U jednodušších zakázek i rychleji.",
                },
                {
                  q: "Pracujete i mimo Prahu?",
                  a: "Ano, pracujeme v Praze a blízkém okolí (do cca 30 km od Prahy).",
                },
                {
                  q: "Poskytujete záruku na provedené práce?",
                  a: "Ano, na všechny naše práce poskytujeme standardní záruku 24 měsíců.",
                },
                {
                  q: "Je možné rozložit platbu na splátky?",
                  a: "Ano, u větších zakázek nabízíme možnost platby ve splátkách podle průběhu prací.",
                },
              ].map((faq, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <Card className="h-full border-border">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
