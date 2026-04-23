"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { projectsStore, galleryImagesStore, categories } from "./data-store"
import type { Project, GalleryImage, ProjectFormData, GalleryImageFormData } from "./types"

// Simple auth - in production use proper auth (e.g., Supabase Auth)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "hadrons2024"

export async function login(password: string): Promise<{ success: boolean; error?: string }> {
  if (password === ADMIN_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
    })
    return { success: true }
  }
  return { success: false, error: "Nesprávné heslo" }
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("admin_session")
}

export async function checkAuth(): Promise<boolean> {
  const cookieStore = await cookies()
  return cookieStore.get("admin_session")?.value === "authenticated"
}

// Projects CRUD
export async function getProjects(): Promise<Project[]> {
  return [...projectsStore].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export async function getProject(id: string): Promise<Project | undefined> {
  return projectsStore.find((p) => p.id === id)
}

export async function createProject(data: ProjectFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const newProject: Project = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    projectsStore.push(newProject)
    revalidatePath("/admin/projekty")
    revalidatePath("/galerie")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Nepodařilo se vytvořit projekt" }
  }
}

export async function updateProject(id: string, data: ProjectFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const index = projectsStore.findIndex((p) => p.id === id)
    if (index === -1) {
      return { success: false, error: "Projekt nenalezen" }
    }
    projectsStore[index] = {
      ...projectsStore[index],
      ...data,
      updatedAt: new Date(),
    }
    revalidatePath("/admin/projekty")
    revalidatePath("/galerie")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Nepodařilo se aktualizovat projekt" }
  }
}

export async function deleteProject(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const index = projectsStore.findIndex((p) => p.id === id)
    if (index === -1) {
      return { success: false, error: "Projekt nenalezen" }
    }
    projectsStore.splice(index, 1)
    revalidatePath("/admin/projekty")
    revalidatePath("/galerie")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Nepodařilo se smazat projekt" }
  }
}

// Gallery CRUD
export async function getGalleryImages(): Promise<GalleryImage[]> {
  return [...galleryImagesStore].sort((a, b) => a.order - b.order)
}

export async function createGalleryImage(data: GalleryImageFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const newImage: GalleryImage = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
    }
    galleryImagesStore.push(newImage)
    revalidatePath("/admin/galerie")
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Nepodařilo se přidat obrázek" }
  }
}

export async function updateGalleryImage(id: string, data: GalleryImageFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const index = galleryImagesStore.findIndex((img) => img.id === id)
    if (index === -1) {
      return { success: false, error: "Obrázek nenalezen" }
    }
    galleryImagesStore[index] = {
      ...galleryImagesStore[index],
      ...data,
    }
    revalidatePath("/admin/galerie")
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Nepodařilo se aktualizovat obrázek" }
  }
}

export async function deleteGalleryImage(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const index = galleryImagesStore.findIndex((img) => img.id === id)
    if (index === -1) {
      return { success: false, error: "Obrázek nenalezen" }
    }
    galleryImagesStore.splice(index, 1)
    revalidatePath("/admin/galerie")
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Nepodařilo se smazat obrázek" }
  }
}

export async function getCategories(): Promise<string[]> {
  return categories
}
