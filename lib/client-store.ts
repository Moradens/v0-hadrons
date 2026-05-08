import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Project {
  id: string
  title: string
  description: string
  category: string
  imageUrl: string
  createdAt: string
}

export interface GalleryImage {
  id: string
  url: string
  title: string
  order: number
  createdAt: string
}

interface DataStore {
  projects: Project[]
  galleryImages: GalleryImage[]
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => void
  updateProject: (id: string, project: Partial<Project>) => void
  deleteProject: (id: string) => void
  addGalleryImage: (image: Omit<GalleryImage, 'id' | 'createdAt'>) => void
  updateGalleryImage: (id: string, image: Partial<GalleryImage>) => void
  deleteGalleryImage: (id: string) => void
  reorderGallery: (images: GalleryImage[]) => void
}

export const useDataStore = create<DataStore>()(
  persist(
    (set) => ({
      projects: [],
      galleryImages: [],

      addProject: (project) =>
        set((state) => ({
          projects: [
            ...state.projects,
            {
              ...project,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      updateProject: (id, updatedProject) =>
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === id ? { ...p, ...updatedProject } : p
          ),
        })),

      deleteProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        })),

      addGalleryImage: (image) =>
        set((state) => ({
          galleryImages: [
            ...state.galleryImages,
            {
              ...image,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      updateGalleryImage: (id, updatedImage) =>
        set((state) => ({
          galleryImages: state.galleryImages.map((img) =>
            img.id === id ? { ...img, ...updatedImage } : img
          ),
        })),

      deleteGalleryImage: (id) =>
        set((state) => ({
          galleryImages: state.galleryImages.filter((img) => img.id !== id),
        })),

      reorderGallery: (images) =>
        set({
          galleryImages: images,
        }),
    }),
    {
      name: 'hadrons-data-store',
      onRehydrateStorage: () => (state) => {
        // Hydration complete
        if (state) {
          console.log('[v0] Store hydrated:', state)
        }
      },
    }
  )
)


