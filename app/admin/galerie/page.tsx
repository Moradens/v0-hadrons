"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { GalleryManager } from "@/components/admin/gallery-manager"
import { Spinner } from "@/components/ui/spinner"

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
            Spravujte fotky zobrazené v sekci portfolio na hlavní stránce
          </p>
        </header>

        <div className="p-8">
          <GalleryManager />
        </div>
      </main>
    </div>
  )
}
