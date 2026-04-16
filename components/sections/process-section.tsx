"use client"

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
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-12 lg:mb-16">
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

        <div className="max-w-3xl">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 150}>
              <div className="flex gap-6 pb-8 last:pb-0 relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[27px] top-14 w-[2px] h-[calc(100%-3.5rem)] bg-border" />
                )}
                
                {/* Step Number */}
                <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center shrink-0 bg-background z-10">
                  <span className="text-sm font-semibold text-primary">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
