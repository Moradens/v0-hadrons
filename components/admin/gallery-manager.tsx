"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Plus, Trash2, Image as ImageIcon } from "lucide-react"
import { GalleryImageFormDialog } from "./gallery-image-form-dialog"
import { DeleteDialog } from "./delete-dialog"
import { useDataStore } from "@/lib/client-store"
import type { GalleryImage } from "@/lib/client-store"

export function GalleryManager() {
  const { galleryImages, deleteGalleryImage } = useDataStore()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const handleEdit = (image: GalleryImage) => {
    setSelectedImage(image)
    setIsFormOpen(true)
  }

  const handleDelete = (image: GalleryImage) => {
    setSelectedImage(image)
    setIsDeleteOpen(true)
  }

  const handleAdd = () => {
    setSelectedImage(null)
    setIsFormOpen(true)
  }

  const sortedImages = [...galleryImages].sort((a, b) => a.order - b.order)

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Fotky v portfoliu</CardTitle>
            <CardDescription>
              Tyto fotky se zobrazují v sekci portfolio na hlavní stránce
            </CardDescription>
          </div>
          <Button onClick={handleAdd}>
            <Plus className="w-4 h-4 mr-2" />
            Přidat fotku
          </Button>
        </CardHeader>
        <CardContent>
          {sortedImages.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Žádné fotky v galerii</p>
              <Button variant="outline" className="mt-4" onClick={handleAdd}>
                <Plus className="w-4 h-4 mr-2" />
                Přidat první fotku
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sortedImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-square rounded-lg overflow-hidden border border-border bg-stone-100"
                >
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleEdit(image)}
                    >
                      Upravit
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(image)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Order badge */}
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    #{image.order}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-sm text-muted-foreground mt-6">
            Celkem {sortedImages.length} fot{sortedImages.length === 1 ? "ka" : sortedImages.length < 5 ? "ky" : "ek"}
          </p>
        </CardContent>
      </Card>

      {/* Form Dialog */}
      <GalleryImageFormDialog
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        image={selectedImage}
        nextOrder={sortedImages.length + 1}
      />

      {/* Delete Dialog */}
      <DeleteDialog
        open={isDeleteOpen}
        onOpenChange={setIsDeleteOpen}
        title="Smazat fotku"
        description={`Opravdu chcete smazat tuto fotku z galerie? Tato akce je nevratná.`}
        onDelete={() => {
          if (selectedImage) {
            deleteGalleryImage(selectedImage.id)
          }
        }}
      />
    </>
  )
}
