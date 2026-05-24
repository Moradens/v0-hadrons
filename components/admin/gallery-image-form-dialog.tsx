"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { Upload, X } from "lucide-react"
import { useDataStore } from "@/lib/client-store"
import type { GalleryImage } from "@/lib/client-store"

interface GalleryImageFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  image?: GalleryImage | null
  nextOrder: number
}

export function GalleryImageFormDialog({
  open,
  onOpenChange,
  image,
  nextOrder,
}: GalleryImageFormDialogProps) {
  const { addGalleryImage, updateGalleryImage } = useDataStore()
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    url: "",
    title: "",
    order: nextOrder,
  })

  const isEditing = !!image

  useEffect(() => {
    if (image) {
      setFormData({
        url: image.url,
        title: image.title,
        order: image.order,
      })
    } else {
      setFormData({
        url: "",
        title: "",
        order: nextOrder,
      })
    }
    setError("")
  }, [image, open, nextOrder])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setError("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataToSend,
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error || "Chyba při nahrávání souboru")
        return
      }

      const data = await response.json()
      setFormData((prev) => ({ ...prev, url: data.url }))
    } catch (err) {
      setError("Chyba při nahrávání obrázku")
      console.error(err)
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      if (!formData.url || !formData.title) {
        setError("Vyplňte všechna povinná pole")
        setIsLoading(false)
        return
      }

      if (isEditing && image) {
        updateGalleryImage(image.id, {
          url: formData.url,
          title: formData.title,
          order: formData.order,
        })
      } else {
        addGalleryImage({
          url: formData.url,
          title: formData.title,
          order: formData.order,
        })
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
            {isEditing ? "Upravit fotku" : "Přidat fotku"}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Upravte informace o fotce"
              : "Přidejte novou fotku do galerie na homepage"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* File Upload */}
            <Field>
              <FieldLabel>Nahrát obrázek</FieldLabel>
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
            {formData.url && (
              <div className="relative rounded-lg overflow-hidden border border-border">
                <img
                  src={formData.url}
                  alt="Náhled"
                  className="w-full h-40 object-cover"
                />
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, url: "" }))}
                  className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 p-1.5 rounded"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            )}

            {/* Title */}
            <Field>
              <FieldLabel htmlFor="title">Popis fotky *</FieldLabel>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Např. Rekonstrukce fasády"
                required
              />
            </Field>

            {/* Order */}
            <Field>
              <FieldLabel htmlFor="order">Pořadí</FieldLabel>
              <Input
                id="order"
                type="number"
                min={1}
                value={formData.order}
                onChange={(e) =>
                  setFormData({ ...formData, order: parseInt(e.target.value) || 1 })
                }
              />
              <p className="text-xs text-muted-foreground mt-1">
                Číslo určuje pořadí zobrazení v galerii (1 = první)
              </p>
            </Field>
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
                "Přidat fotku"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
