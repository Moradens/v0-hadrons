"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldLabel } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { createProject, updateProject } from "@/lib/actions"
import type { Project } from "@/lib/types"

interface ProjectFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  project?: Project | null
  categories: string[]
}

export function ProjectFormDialog({
  open,
  onOpenChange,
  project,
  categories,
}: ProjectFormDialogProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  })

  const isEditing = !!project

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        category: project.category,
        image: project.image,
      })
    } else {
      setFormData({
        title: "",
        description: "",
        category: "",
        image: "",
      })
    }
    setError("")
  }, [project, open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const result = isEditing
        ? await updateProject(project.id, formData)
        : await createProject(formData)

      if (result.success) {
        onOpenChange(false)
        router.refresh()
      } else {
        setError(result.error || "Nastala chyba")
      }
    } catch (err) {
      setError("Nastala neočekávaná chyba")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Upravit projekt" : "Nový projekt"}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Upravte informace o projektu"
              : "Vyplňte informace o novém projektu"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <Field>
              <FieldLabel htmlFor="title">Název projektu *</FieldLabel>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Např. Rekonstrukce bytu Praha 5"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="category">Kategorie *</FieldLabel>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Vyberte kategorii" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="description">Popis *</FieldLabel>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Krátký popis projektu..."
                rows={3}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="image">URL obrázku *</FieldLabel>
              <Input
                id="image"
                type="url"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                placeholder="https://..."
                required
              />
              {formData.image && (
                <div className="mt-2 rounded-lg overflow-hidden border border-border">
                  <img
                    src={formData.image}
                    alt="Náhled"
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                </div>
              )}
            </Field>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Zrušit
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner className="mr-2" />
                  Ukládám...
                </>
              ) : isEditing ? (
                "Uložit změny"
              ) : (
                "Vytvořit projekt"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
