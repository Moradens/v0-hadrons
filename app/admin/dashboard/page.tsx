"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { useDataStore } from "@/lib/client-store"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { FolderKanban, Images, ArrowRight, Plus } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useAuth()
  const projects = useDataStore((state) => state.projects)
  const galleryImages = useDataStore((state) => state.galleryImages)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/admin")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    )
  }

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
            Vitejte v administraci webu Hadrons
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
              <CardTitle>Rychle akce</CardTitle>
              <CardDescription>Casto pouzivane operace</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/admin/projekty">
                  <Plus className="w-4 h-4 mr-2" />
                  Novy projekt
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/galerie">
                  <Plus className="w-4 h-4 mr-2" />
                  Pridat fotku na homepage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/" target="_blank">
                  Zobrazit web
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
