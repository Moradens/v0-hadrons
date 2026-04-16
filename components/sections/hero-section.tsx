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
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facade%20Reference.JPG-6e9XsWCAjC4Ng8voVXAYZaD4dd0I42.jpeg"
          alt="Rekonstrukce rodinného domu"
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16 relative z-10">
        <div className="max-w-4xl">
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
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
    </section>
  )
}
