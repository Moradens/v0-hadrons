import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import Link from "next/link"
import { getProjects, getGalleryImages } from "@/lib/actions"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FolderKanban, Images, ArrowRight, Plus } from "lucide-react"

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated"

  if (!isAuthenticated) {
    redirect("/admin")
  }

  const projects = await getProjects()
  const galleryImages = await getGalleryImages()

  const stats = [
    {
      title: "Projekty",
      value: projects.length,
      description: "Celkem v galerii",
      icon: FolderKanban,
      href: "/admin/projekty",
      color: "bg-blue-500",
    },
    {
      title: "Fotky na homepage",
      value: galleryImages.length,
      description: "V sekci portfolio",
      icon: Images,
      href: "/admin/galerie",
      color: "bg-amber-500",
    },
  ]

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64">
        <header className="bg-white border-b border-border px-8 py-6">
          <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Vítejte v administraci webu Hadrons
          </p>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title} className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                  <Link
                    href={stat.href}
                    className="inline-flex items-center text-sm text-primary hover:underline mt-3"
                  >
                    Spravovat
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Rychlé akce</CardTitle>
              <CardDescription>Často používané operace</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/admin/projekty?action=new">
                  <Plus className="w-4 h-4 mr-2" />
                  Nový projekt
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/galerie?action=new">
                  <Plus className="w-4 h-4 mr-2" />
                  Přidat fotku na homepage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/" target="_blank">
                  Zobrazit web
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Poslední projekty</CardTitle>
              <CardDescription>Nedávno přidané nebo upravené</CardDescription>
            </CardHeader>
            <CardContent>
              {projects.length === 0 ? (
                <p className="text-muted-foreground text-sm">Zatím nemáte žádné projekty.</p>
              ) : (
                <div className="space-y-3">
                  {projects.slice(0, 5).map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-lg bg-cover bg-center"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div>
                          <h4 className="font-medium text-sm text-foreground">{project.title}</h4>
                          <p className="text-xs text-muted-foreground">{project.category}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/projekty?edit=${project.id}`}>
                          Upravit
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}