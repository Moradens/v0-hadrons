"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"
import { FadeIn } from "@/components/fade-in"

const stats = [
  { value: 120, suffix: "+", label: "Dokončených projektů" },
  { value: 5, suffix: " let", label: "Na trhu" },
  { value: 100, suffix: "%", label: "Spokojených klientů" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/50 to-background" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(0,0,0)_1px,_transparent_0)] bg-[length:32px_32px]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <span className="text-xs font-medium tracking-wide uppercase">Praha &amp; okolí</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-wide uppercase">od 2020</span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6">
              Rekonstrukce,
              <br />
              <span className="text-balance">
                která{" "}
                <span className="text-primary relative">
                  vydrží
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,6 Q25,0 50,6 T100,6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Kompletní stavební a elektromontážní práce. Od prvotní konzultace po předání hotového díla — bez starostí.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="group">
                <Link href="/kontakt">
                  Nezávazná nabídka
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/galerie">
                  <Play className="mr-2 h-4 w-4" />
                  Naše práce
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="flex flex-wrap gap-8 lg:gap-12 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl lg:text-4xl font-semibold text-foreground">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          </div>
          
          {/* Right side - Image showcase */}
          <FadeIn delay={300} direction="left">
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fasa%CC%81da%20mala%CC%81%20%281%29.JPG-KliQxH74YnLzcHelef7Mio8zcjiVSw.jpeg"
                  alt="Dokončená fasáda rodinného domu"
                  fill
                  className="object-cover"
                  priority
                  sizes="50vw"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">120+ projektů</div>
                    <div className="text-sm text-muted-foreground">úspěšně dokončeno</div>
                  </div>
                </div>
              </div>
              {/* Second floating image */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD%20Image.JPG-x8HhGMXVLYo0QyVOh68evezkwekngu.jpeg"
                  alt="LED osvětlení"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" />
    </section>
  )
}
