"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
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
import { createGalleryImage, updateGalleryImage } from "@/lib/actions"
import type { GalleryImage } from "@/lib/types"

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
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    src: "",
    alt: "",
    order: nextOrder,
  })

  const isEditing = !!image

  useEffect(() => {
    if (image) {
      setFormData({
        src: image.src,
        alt: image.alt,
        order: image.order,
      })
    } else {
      setFormData({
        src: "",
        alt: "",
        order: nextOrder,
      })
    }
    setError("")
  }, [image, open, nextOrder])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const result = isEditing
        ? await updateGalleryImage(image.id, formData)
        : await createGalleryImage(formData)

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

            <Field>
              <FieldLabel htmlFor="src">URL obrázku *</FieldLabel>
              <Input
                id="src"
                type="url"
                value={formData.src}
                onChange={(e) =>
                  setFormData({ ...formData, src: e.target.value })
                }
                placeholder="https://..."
                required
              />
              {formData.src && (
                <div className="mt-2 rounded-lg overflow-hidden border border-border">
                  <img
                    src={formData.src}
                    alt="Náhled"
                    className="w-full h-40 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                </div>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="alt">Popisek (alt text) *</FieldLabel>
              <Input
                id="alt"
                value={formData.alt}
                onChange={(e) =>
                  setFormData({ ...formData, alt: e.target.value })
                }
                placeholder="Např. Rekonstrukce koupelny"
                required
              />
            </Field>

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
                "Přidat fotku"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
