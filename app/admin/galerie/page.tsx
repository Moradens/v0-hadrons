"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { GalleryManager } from "@/components/admin/gallery-manager"
import { Spinner } from "@/components/ui/spinner"

// Mock data for now
const mockImages = [
  { id: "1", alt: "Fasada RD", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fasa%CC%81da%20mala%CC%81%20%281%29.JPG-KliQxH74YnLzcHelef7Mio8zcjiVSw.jpeg", order: 1 },
  { id: "2", alt: "LED osvetleni", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD%20Image.JPG-x8HhGMXVLYo0QyVOh68evezkwekngu.jpeg", order: 2 },
]

export default function GalleryAdminPage() {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/admin")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      
      <main className="flex-1 ml-64">
        <header className="bg-white border-b border-border px-8 py-6">
          <h1 className="text-2xl font-semibold text-foreground">Galerie na homepage</h1>
          <p className="text-muted-foreground mt-1">
            Spravujte fotky zobrazene v sekci portfolio na hlavni strance
          </p>
        </header>

        <div className="p-8">
          <GalleryManager images={mockImages} />
        </div>
      </main>
    </div>
  )
}
