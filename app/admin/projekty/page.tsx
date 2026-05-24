"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useDataStore } from "@/lib/client-store"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { ProjectsTable } from "@/components/admin/projects-table"
import { Spinner } from "@/components/ui/spinner"

const categories = ["Kompletní rekonstrukce", "Fasády", "Elektromontáže", "Sádrokartony", "Zednické práce"]

export default function ProjectsPage() {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useAuth()
  const projects = useDataStore((state) => state.projects)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/admin")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading || !isAuthenticated || !isHydrated) {
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
            Spravujte projekty v administraci
          </p>
        </header>

        <div className="p-8">
          <ProjectsTable projects={projects} categories={categories} />
        </div>
      </main>
    </div>
  )
}
