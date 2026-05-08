"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2, Search, Image as ImageIcon } from "lucide-react"
import { ProjectFormDialog } from "./project-form-dialog"
import { DeleteDialog } from "./delete-dialog"
import { useDataStore } from "@/lib/client-store"
import type { Project } from "@/lib/client-store"

interface ProjectsTableProps {
  projects: Project[]
  categories: string[]
}

export function ProjectsTable({ projects, categories }: ProjectsTableProps) {
  const { deleteProject } = useDataStore()
  const [searchQuery, setSearchQuery] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleEdit = (project: Project) => {
    setSelectedProject(project)
    setIsFormOpen(true)
  }

  const handleDelete = (project: Project) => {
    setSelectedProject(project)
    setIsDeleteOpen(true)
  }

  const handleAdd = () => {
    setSelectedProject(null)
    setIsFormOpen(true)
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Seznam projektů</CardTitle>
          <Button onClick={handleAdd}>
            <Plus className="w-4 h-4 mr-2" />
            Nový projekt
          </Button>
        </CardHeader>
        <CardContent>
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Hledat projekty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 max-w-sm"
            />
          </div>

          {/* Table */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Žádné projekty k zobrazení</p>
              <Button variant="outline" className="mt-4" onClick={handleAdd}>
                <Plus className="w-4 h-4 mr-2" />
                Přidat první projekt
              </Button>
            </div>
          ) : (
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-stone-50">
                    <TableHead className="w-16">Foto</TableHead>
                    <TableHead>Název</TableHead>
                    <TableHead>Kategorie</TableHead>
                    <TableHead className="hidden md:table-cell">Popis</TableHead>
                    <TableHead className="w-24 text-right">Akce</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>
                        <div
                          className="w-12 h-12 rounded-lg bg-cover bg-center border border-border"
                          style={{ backgroundImage: `url(${project.imageUrl})` }}
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {project.title}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{project.category}</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground text-sm max-w-xs truncate">
                        {project.description}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(project)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleDelete(project)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          <p className="text-sm text-muted-foreground mt-4">
            Celkem {filteredProjects.length} projekt{filteredProjects.length === 1 ? "" : filteredProjects.length < 5 ? "y" : "ů"}
          </p>
        </CardContent>
      </Card>

      {/* Form Dialog */}
      <ProjectFormDialog
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        project={selectedProject}
        categories={categories}
      />

      {/* Delete Dialog */}
      <DeleteDialog
        open={isDeleteOpen}
        onOpenChange={setIsDeleteOpen}
        title="Smazat projekt"
        description={`Opravdu chcete smazat projekt "${selectedProject?.title}"? Tato akce je nevratná.`}
        onDelete={() => {
          if (selectedProject) {
            deleteProject(selectedProject.id)
          }
        }}
      />
    </>
  )
}
