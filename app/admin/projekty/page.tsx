import { redirect } from "next/navigation"
import { checkAuth, getProjects, getCategories } from "@/lib/actions"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { ProjectsTable } from "@/components/admin/projects-table"

export default async function ProjectsPage() {
  const isAuthenticated = await checkAuth()
  
  if (!isAuthenticated) {
    redirect("/admin")
  }

  const projects = await getProjects()
  const categories = await getCategories()

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      
      <main className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-border px-8 py-6">
          <h1 className="text-2xl font-semibold text-foreground">Projekty</h1>
          <p className="text-muted-foreground mt-1">
            Spravujte projekty zobrazené v galerii
          </p>
        </header>

        {/* Content */}
        <div className="p-8">
          <ProjectsTable projects={projects} categories={categories} />
        </div>
      </main>
    </div>
  )
}
