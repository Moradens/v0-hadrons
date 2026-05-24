import { Project, GalleryImage } from './types'

// Mock data store - replace with database later
// This simulates a database with in-memory storage

export const projectsStore: Project[] = [
  {
    id: "1",
    title: "Fasáda rodinného domu - dokončeno",
    category: "Fasády",
    description: "Kompletní zateplení a nová fasáda rodinného domu s kamennými prvky",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fasa%CC%81da%20mala%CC%81%20%281%29.JPG-KliQxH74YnLzcHelef7Mio8zcjiVSw.jpeg",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Rekonstrukce rodinného domu",
    category: "Kompletní rekonstrukce",
    description: "Celková rekonstrukce rodinného domu včetně nové střechy a fasády",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facade%20Reference.JPG-6e9XsWCAjC4Ng8voVXAYZaD4dd0I42.jpeg",
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-02-10"),
  },
  {
    id: "3",
    title: "Elektroinstalace bytového domu",
    category: "Elektromontáže",
    description: "Nové rozvody elektřiny ve společných prostorách bytového domu",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seka%CC%81ni%CC%81%20reference-6DSYk2YiAv9Fi5tJHTjWArlqngxCVn.jpg",
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-03-05"),
  },
  {
    id: "4",
    title: "Sekání drážek pro elektro",
    category: "Elektromontáže",
    description: "Příprava rozvodů elektřiny - sekání drážek a instalace krabic",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Old%202.1.JPG-BpRHveFh5HD4MZmgEc0EiZt9lvAHp0.jpeg",
    createdAt: new Date("2024-03-20"),
    updatedAt: new Date("2024-03-20"),
  },
  {
    id: "5",
    title: "LED osvětlení v chodbě",
    category: "Sádrokartony",
    description: "Hotový SDK podhled s integrovaným LED páskem v bytovém domě",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD%20Image.JPG-x8HhGMXVLYo0QyVOh68evezkwekngu.jpeg",
    createdAt: new Date("2024-04-12"),
    updatedAt: new Date("2024-04-12"),
  },
]

export const galleryImagesStore: GalleryImage[] = [
  {
    id: "1",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fasa%CC%81da%20mala%CC%81%20%281%29.JPG-KliQxH74YnLzcHelef7Mio8zcjiVSw.jpeg",
    alt: "Fasáda rodinného domu",
    order: 1,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facade%20Reference.JPG-6e9XsWCAjC4Ng8voVXAYZaD4dd0I42.jpeg",
    alt: "Rekonstrukce domu",
    order: 2,
    createdAt: new Date("2024-02-10"),
  },
  {
    id: "3",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD%20Image.JPG-x8HhGMXVLYo0QyVOh68evezkwekngu.jpeg",
    alt: "LED osvětlení",
    order: 3,
    createdAt: new Date("2024-03-05"),
  },
  {
    id: "4",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RD%20Image%204.JPG-dVGuXzVTpwJIu57aVvx0TRJj5r5mwk.jpeg",
    alt: "Rekonstrukce podkroví",
    order: 4,
    createdAt: new Date("2024-04-12"),
  },
  {
    id: "5",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Old%202.1.JPG-BpRHveFh5HD4MZmgEc0EiZt9lvAHp0.jpeg",
    alt: "Elektroinstalace",
    order: 5,
    createdAt: new Date("2024-05-01"),
  },
]

export const categories = [
  "Kompletní rekonstrukce",
  "Fasády",
  "Elektromontáže",
  "Sádrokartony",
  "Zednické práce",
]
