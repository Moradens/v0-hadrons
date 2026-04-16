import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description:
    "Informace o zpracování osobních údajů společností Hadrons s.r.o.",
}

export default function GDPRPage() {
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
                  GDPR
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-semibold text-hadrons-cream mb-6">
                  Ochrana osobních údajů
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Informace o zpracování a ochraně vašich osobních údajů.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl prose prose-gray">
                <h2>1. Správce osobních údajů</h2>
                <p>
                  Správcem vašich osobních údajů je společnost Hadrons s.r.o., se sídlem Klímova 338/8, Praha 5, 150 00.
                </p>

                <h2>2. Jaké údaje zpracováváme</h2>
                <p>V rámci naší činnosti zpracováváme tyto osobní údaje:</p>
                <ul>
                  <li>Jméno a příjmení</li>
                  <li>Kontaktní údaje (e-mail, telefon)</li>
                  <li>Adresa realizace</li>
                  <li>Obsah vaší poptávky</li>
                </ul>

                <h2>3. Účel zpracování</h2>
                <p>Vaše osobní údaje zpracováváme za účelem:</p>
                <ul>
                  <li>Zpracování vaší poptávky a přípravy cenové nabídky</li>
                  <li>Komunikace ohledně realizace zakázky</li>
                  <li>Plnění smluvních závazků</li>
                  <li>Plnění zákonných povinností</li>
                </ul>

                <h2>4. Doba uchování</h2>
                <p>
                  Vaše osobní údaje uchováváme po dobu nezbytně nutnou pro splnění účelu zpracování, nejdéle však po dobu stanovenou právními předpisy.
                </p>

                <h2>5. Vaše práva</h2>
                <p>Máte právo:</p>
                <ul>
                  <li>Na přístup k vašim osobním údajům</li>
                  <li>Na opravu nepřesných údajů</li>
                  <li>Na výmaz údajů (právo být zapomenut)</li>
                  <li>Na omezení zpracování</li>
                  <li>Na přenositelnost údajů</li>
                  <li>Vznést námitku proti zpracování</li>
                </ul>

                <h2>6. Kontakt</h2>
                <p>
                  V případě dotazů ohledně zpracování vašich osobních údajů nás můžete kontaktovat na e-mailu{" "}
                  <a href="mailto:jiri.vrbicky@hadrons.cz" className="text-primary hover:underline">
                    jiri.vrbicky@hadrons.cz
                  </a>
                  .
                </p>

                <p className="text-sm text-muted-foreground mt-8">
                  Poslední aktualizace: {new Date().toLocaleDateString("cs-CZ")}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
