import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Admin | Hadrons CMS",
    template: "%s | Hadrons Admin",
  },
  description: "Administrace webu Hadrons",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-stone-50">
      {children}
    </div>
  )
}
