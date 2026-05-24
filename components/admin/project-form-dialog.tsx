"use client"

import { useState, useEffect } from "react"
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
import { Upload, X } from "lucide-react"
import { useDataStore } from "@/lib/client-store"
import type { Project } from "@/lib/client-store"

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
  const { addProject, updateProject } = useDataStore()
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    imageUrl: "",
  })

  const isEditing = !!project

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        category: project.category,
        imageUrl: project.imageUrl,
      })
    } else {
      setFormData({
        title: "",
        description: "",
        category: "",
        imageUrl: "",
      })
    }
    setError("")
  }, [project, open])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    console.log("[v0] File selected:", file)
    if (!file) return

    setIsUploading(true)
    setError("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("file", file)

      console.log("[v0] Uploading file:", file.name, file.size)
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataToSend,
      })

      console.log("[v0] Upload response status:", response.status)
      
      if (!response.ok) {
        const data = await response.json()
        console.log("[v0] Upload error:", data)
        setError(data.error || "Chyba při nahrávání souboru")
        return
      }

      const data = await response.json()
      console.log("[v0] Upload success:", data)
      setFormData((prev) => ({ ...prev, imageUrl: data.url }))
    } catch (err) {
      console.error("[v0] Upload exception:", err)
      setError("Chyba při nahrávání obrázku")
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      if (!formData.title || !formData.category || !formData.imageUrl) {
        setError("Vyplňte všechna povinná pole")
        setIsLoading(false)
        return
      }

      if (isEditing && project) {
        updateProject(project.id, formData)
      } else {
        addProject(formData)
      }

      onOpenChange(false)
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
              <FieldLabel htmlFor="description">Popis</FieldLabel>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Krátký popis projektu..."
                rows={3}
              />
            </Field>

            {/* File Upload */}
            <Field>
              <FieldLabel>Obrázek projektu *</FieldLabel>
              <label className="flex items-center justify-center w-full p-6 border-2 border-dashed border-primary rounded-lg cursor-pointer hover:bg-primary/5 transition-colors">
                <div className="flex flex-col items-center">
                  {isUploading ? (
                    <Spinner className="w-8 h-8" />
                  ) : (
                    <Upload className="w-8 h-8 text-primary mb-2" />
                  )}
                  <span className="text-sm font-medium text-foreground">
                    {isUploading ? "Nahrávám..." : "Klikněte pro výběr obrázku"}
                  </span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                  className="hidden"
                />
              </label>
            </Field>

            {/* Preview */}
            {formData.imageUrl && (
              <div className="relative rounded-lg overflow-hidden border border-border">
                <img
                  src={formData.imageUrl}
                  alt="Náhled"
                  className="w-full h-32 object-cover"
                />
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, imageUrl: "" }))}
                  className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 p-1.5 rounded"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading || isUploading}
            >
              Zrušit
            </Button>
            <Button type="submit" disabled={isLoading || isUploading}>
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
