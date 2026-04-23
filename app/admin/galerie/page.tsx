import { redirect } from "next/navigation"
import { checkAuth, getGalleryImages } from "@/lib/actions"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { GalleryManager } from "@/components/admin/gallery-manager"

export default async function GalleryAdminPage() {
  const isAuthenticated = await checkAuth()
  
  if (!isAuthenticated) {
    redirect("/admin")
  }

  const images = await getGalleryImages()

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      
      <main className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-border px-8 py-6">
          <h1 className="text-2xl font-semibold text-foreground">Galerie na homepage</h1>
          <p className="text-muted-foreground mt-1">
            Spravujte fotky zobrazené v sekci portfolio na hlavní stránce
          </p>
        </header>

        {/* Content */}
        <div className="p-8">
          <GalleryManager images={images} />
        </div>
      </main>
    </div>
  )
}
