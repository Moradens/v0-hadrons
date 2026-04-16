"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

const steps = [
  {
    number: "01",
    title: "Kontakt a konzultace",
    description:
      "Probereme vaše požadavky, přijedeme na prohlídku a zodpovíme vše, co potřebujete vědět.",
  },
  {
    number: "02",
    title: "Nabídka a harmonogram",
    description:
      "Připravíme přehlednou cenovou nabídku a dohodnutý časový plán realizace.",
  },
  {
    number: "03",
    title: "Realizace",
    description:
      "Práce provádíme profesionálně, v dohodnutých termínech a s průběžnou komunikací.",
  },
  {
    number: "04",
    title: "Předání díla",
    description:
      "Hotový projekt předáme čistý a připravený k užívání. Samozřejmostí je záruční servis.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-stone-100 via-amber-50/50 to-orange-50/30 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <FadeIn direction="right">
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RD%20Image%204.JPG-dVGuXzVTpwJIu57aVvx0TRJj5r5mwk.jpeg"
                  alt="Probíhající rekonstrukce"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                <div className="text-2xl font-bold text-primary">5+ let</div>
                <div className="text-sm text-muted-foreground">zkušeností</div>
              </div>
            </div>
          </FadeIn>
          
          {/* Right - Content */}
          <div>
            <FadeIn>
              <div className="mb-10">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
                  Jak pracujeme
                </span>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-foreground">
                  Průběh spolupráce
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Transparentní proces od první konzultace až po předání dokončeného díla.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-1">
              {steps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 150}>
                  <div className="flex gap-5 pb-6 last:pb-0 relative">
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-[23px] top-12 w-[2px] h-[calc(100%-2.5rem)] bg-primary/20" />
                    )}
                    
                    {/* Step Number */}
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 z-10 shadow-lg shadow-primary/25">
                      <span className="text-sm font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-semibold mb-1 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
