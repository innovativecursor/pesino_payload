export interface HeroData {
  heading: string
  subheading: string
  backgroundImage: { url: string }
  yearsOfExperience?: number
  projectsCompleted?: number
  clientSatisfaction?: number
}
export interface TestimonialData {
  id: number
  name: string
  role: string
  feedback: string
  rating: number
  image: {
    id: string
    url: string
    filename: string
    mimeType: string
  }
  createdAt: string
  updatedAt: string
}

export interface ProjectImage {
  image: {
    id: string
    url: string
    filename: string
    mimeType: string
  }
}

export interface ProjectHighlight {
  point: string
}

export interface ProjectData {
  id: string
  title: string
  description: string
  category: 'Residential' | 'Commercial'
  projectType: string
  location: string
  image: ProjectImage[]
  keyHighlights: ProjectHighlight[]
  createdAt: string
  updatedAt: string
}

export interface SocialLinksData {
  facebook?: string
  twitter?: string
  instagram?: string
  linkedin?: string
  youtube?: string
}
