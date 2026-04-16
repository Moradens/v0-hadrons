import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const navLinks = [
  { href: "/", label: "Domů" },
  { href: "/sluzby", label: "Služby" },
  { href: "/galerie", label: "Galerie" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
]

const services = [
  "Kompletní rekonstrukce",
  "Elektromontáže",
  "Sádrokartony",
  "Zednické práce",
]

export function Footer() {
  return (
    <footer className="bg-hadrons-dark text-hadrons-cream">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-wider text-primary inline-block mb-4"
            >
              HADRONS
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Kompletní stavební a elektromontážní práce v Praze a okolí. Od prvotní konzultace po předání hotového díla.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-hadrons-cream">Navigace</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-hadrons-cream">Služby</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/sluzby"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-hadrons-cream">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+420602384239"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +420 602 384 239
                </a>
              </li>
              <li>
                <a
                  href="mailto:jiri.vrbicky@hadrons.cz"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  jiri.vrbicky@hadrons.cz
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span>Klímova 338/8, Praha 5, 150 00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Hadrons s.r.o. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/gdpr" className="hover:text-primary transition-colors">
              Ochrana osobních údajů
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
