import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"
import { AnimatedCounter } from "@/components/animated-counter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Award,
  Users,
  Clock,
  Shield,
  Star,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Seznamte se s firmou Hadrons - profesionální stavební firma v Praze. Od roku 2020 provádíme rekonstrukce a stavební práce s důrazem na kvalitu.",
}

const stats = [
  { value: 120, suffix: "+", label: "Dokončených projektů" },
  { value: 5, suffix: " let", label: "Zkušeností" },
  { value: 100, suffix: "%", label: "Spokojených klientů" },
  { value: 15, suffix: "+", label: "Specialistů" },
]

const values = [
  {
    icon: Award,
    title: "Kvalita",
    description:
      "Používáme pouze kvalitní materiály a osvědčené postupy. Každá práce je pro nás otázkou profesionální cti.",
  },
  {
    icon: Clock,
    title: "Spolehlivost",
    description:
      "Dodržujeme dohodnuté termíny a rozpočty. Komunikujeme průběžně o stavu prací.",
  },
  {
    icon: Shield,
    title: "Záruka",
    description:
      "Na všechny naše práce poskytujeme záruku. Po dokončení projektu jsme vám stále k dispozici.",
  },
  {
    icon: Users,
    title: "Osobní přístup",
    description:
      "Ke každému klientovi přistupujeme individuálně. Nasloucháme vašim potřebám a přáním.",
  },
]

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
  {
    initials: "JH",
    name: "Jana Horáková",
    project: "Rekonstrukce koupelny · Praha 4",
    rating: 5,
    text: "Perfektní práce od A do Z. Pan Vrbický nám pomohl i s výběrem materiálů a celý projekt dotáhl do konce bez jediného problému.",
    tag: "Koupelny",
  },
  {
    initials: "TM",
    name: "Tomáš Málek",
    project: "Elektroinstalace RD · Říčany",
    rating: 5,
    text: "Spolehlivá firma s profesionálním přístupem. Elektroinstalace v celém domě proběhla hladce, vše funguje perfektně.",
    tag: "Elektromontáže",
  },
  {
    initials: "KS",
    name: "Klára Sýkorová",
    project: "Kompletní rekonstrukce · Praha 10",
    rating: 5,
    text: "Doporučuji všem, kdo hledají spolehlivou firmu na rekonstrukci. Vše proběhlo podle plánu a výsledek předčil naše očekávání.",
    tag: "Kompletní rekonstrukce",
  },
]

export default function AboutPage() {
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
                  O naší firmě
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-semibold text-hadrons-cream mb-6">
                  Stavíme s vášní, rekonstruujeme s péčí
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Od roku 2020 pomáháme klientům v Praze a okolí proměnit jejich představy v realitu. Jsme tým zkušených řemeslníků, kteří se nebojí žádné výzvy.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 100}>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
                    Náš příběh
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                    Jak to všechno začalo
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Firma Hadrons vznikla v roce 2020 s jasnou vizí — poskytovat kvalitní stavební služby s osobním přístupem ke každému klientovi.
                    </p>
                    <p>
                      Náš tým tvoří zkušení řemeslníci s dlouholetou praxí v oboru. Specializujeme se na kompletní rekonstrukce, elektroinstalace, sádrokartonové konstrukce a zednické práce.
                    </p>
                    <p>
                      Za dobu naší existence jsme úspěšně dokončili více než 120 projektů a získali si důvěru stovek spokojených zákazníků v Praze a okolí.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={200} direction="left">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">Náš tým</p>
                      </div>
                    </div>
                    <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">Kvalita</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">Termíny</p>
                      </div>
                    </div>
                    <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                          <Shield className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">Záruka</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <div className="max-w-2xl mb-12">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
                  Naše hodnoty
                </span>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                  Na čem nám záleží
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Tyto principy nás provázejí při každém projektu a jsou základem naší práce.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={index * 100}>
                  <Card className="h-full border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <value.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="reference" className="py-16 lg:py-24 bg-background scroll-mt-24">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <div className="max-w-2xl mb-12">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
                  Reference
                </span>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                  Co říkají naši klienti
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Spokojení zákazníci jsou naším nejlepším doporučením.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-hadrons-dark">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-hadrons-cream mb-4">
                Pojďme spolupracovat
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Máte projekt na mysli? Rádi vám pomůžeme s plánováním a realizací.
              </p>
              <Button size="lg" asChild className="group">
                <Link href="/kontakt">
                  Kontaktujte nás
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
