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

// Default projects that show on /galerie page
const defaultProjects: Project[] = [
  {
    id: "default-p1",
    title: "Fasáda rodinného domu - dokončeno",
    category: "Fasády",
    description: "Kompletní zateplení a nová fasáda rodinného domu s kamennými prvky",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fasa%CC%81da%20mala%CC%81%20%281%29.JPG-KliQxH74YnLzcHelef7Mio8zcjiVSw.jpeg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "default-p2",
    title: "Rekonstrukce rodinného domu",
    category: "Kompletní rekonstrukce",
    description: "Celková rekonstrukce rodinného domu včetně nové střechy a fasády",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facade%20Reference.JPG-6e9XsWCAjC4Ng8voVXAYZaD4dd0I42.jpeg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "default-p3",
    title: "Elektroinstalace bytového domu",
    category: "Elektromontáže",
    description: "Nové rozvody elektřiny ve společných prostorách bytového domu",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seka%CC%81ni%CC%81%20reference-6DSYk2YiAv9Fi5tJHTjWArlqngxCVn.jpg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "default-p4",
    title: "Sekání drážek pro elektro",
    category: "Elektromontáže",
    description: "Příprava rozvodů elektřiny - sekání drážek a instalace krabic",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Old%202.1.JPG-BpRHveFh5HD4MZmgEc0EiZt9lvAHp0.jpeg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "default-p5",
    title: "LED osvětlení v chodbě",
    category: "Sádrokartony",
    description: "Hotový SDK podhled s integrovaným LED páskem v bytovém domě",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD%20Image.JPG-x8HhGMXVLYo0QyVOh68evezkwekngu.jpeg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "default-p6",
    title: "Vnitřní rekonstrukce podkroví",
    category: "Kompletní rekonstrukce",
    description: "Kompletní rekonstrukce podkroví - izolace, SDK a příprava elektro",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RD%20Image%204.JPG-dVGuXzVTpwJIu57aVvx0TRJj5r5mwk.jpeg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "default-p7",
    title: "Sekání drážek v hallu bytového domu",
    category: "Elektromontáže",
    description: "Příprava elektroinstalace - sekání drážek pro rozvody v hallu",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ke%20Krc%CC%8Ci%20Seka%CC%81ni%CC%81%20a%20Zac%CC%8Cis%CC%8Cte%CC%8Cni%CC%81-PKe6rsziMKaLNzRr9isizS0eEmjAGk.jpeg",
    createdAt: new Date().toISOString(),
  },
]

// Default gallery images that show on homepage
const defaultGalleryImages: GalleryImage[] = [
  {
    id: "default-1",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fasa%CC%81da%20mala%CC%81%20%281%29.JPG-KliQxH74YnLzcHelef7Mio8zcjiVSw.jpeg",
    title: "Dokončená fasáda",
    order: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: "default-2",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facade%20Reference.JPG-6e9XsWCAjC4Ng8voVXAYZaD4dd0I42.jpeg",
    title: "Rekonstrukce domu",
    order: 2,
    createdAt: new Date().toISOString(),
  },
  {
    id: "default-3",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD%20Image.JPG-x8HhGMXVLYo0QyVOh68evezkwekngu.jpeg",
    title: "LED osvětlení",
    order: 3,
    createdAt: new Date().toISOString(),
  },
  {
    id: "default-4",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Old%202.1.JPG-BpRHveFh5HD4MZmgEc0EiZt9lvAHp0.jpeg",
    title: "Elektroinstalace",
    order: 4,
    createdAt: new Date().toISOString(),
  },
  {
    id: "default-5",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RD%20Image%204.JPG-dVGuXzVTpwJIu57aVvx0TRJj5r5mwk.jpeg",
    title: "Rekonstrukce podkroví",
    order: 5,
    createdAt: new Date().toISOString(),
  },
  {
    id: "default-6",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ke%20Krc%CC%8Ci%20Seka%CC%81ni%CC%81%20a%20Zac%CC%8Cis%CC%8Cte%CC%8Cni%CC%81-PKe6rsziMKaLNzRr9isizS0eEmjAGk.jpeg",
    title: "Elektroinstalace bytového domu",
    order: 6,
    createdAt: new Date().toISOString(),
  },
]

export const useDataStore = create<DataStore>()(
  persist(
    (set) => ({
      projects: defaultProjects,
      galleryImages: defaultGalleryImages,

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
      version: 3,
      migrate: (persistedState, version) => {
        if (version < 3) {
          // Reset to defaults so new projects and gallery images are loaded
          return {
            projects: defaultProjects,
            galleryImages: defaultGalleryImages,
          }
        }
        return persistedState as DataStore
      },
    }
  )
)


