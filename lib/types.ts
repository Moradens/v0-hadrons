export interface Project {
  id: string
  title: string
  description: string
  category: string
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  order: number
  createdAt: Date
}

export type ProjectFormData = Omit<Project, 'id' | 'createdAt' | 'updatedAt'>
export type GalleryImageFormData = Omit<GalleryImage, 'id' | 'createdAt'>
