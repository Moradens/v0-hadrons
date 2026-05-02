"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { ProjectsTable } from "@/components/admin/projects-table"
import { Spinner } from "@/components/ui/spinner"

// Mock data for now
const mockProjects = [
  { id: "1", title: "Rekonstrukce RD Praha", category: "Kompletni rekonstrukce", description: "Kompletni rekonstrukce rodinneho domu", image: "/images/project1.jpg" },
  { id: "2", title: "Fasada bytoveho domu", category: "Fasady", description: "Nova fasada a zatepleni", image: "/images/project2.jpg" },
]

const categories = ["Kompletni rekonstrukce", "Fasady", "Elektromontaze", "Sadrokartony", "Zednicke prace"]

export default function ProjectsPage() {
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
          <h1 className="text-2xl font-semibold text-foreground">Projekty</h1>
          <p className="text-muted-foreground mt-1">
            Spravujte projekty zobrazene v galerii
          </p>
        </header>

        <div className="p-8">
          <ProjectsTable projects={mockProjects} categories={categories} />
        </div>
      </main>
    </div>
  )
}
