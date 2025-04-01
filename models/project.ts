export interface Project {
    id: number,
    title: string,
    category: ProjectCategory
    description: string
    image: string[]
    
}

export interface ProjectCategory {
    id: number,
    title: string,
    isActive: boolean
}