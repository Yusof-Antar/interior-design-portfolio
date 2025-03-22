"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Project = {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Minimalist Apartment",
    category: "Residential",
    image: "/project-1.jpg",
    description: "A clean, minimalist design focusing on functionality and open space for a young professional couple.",
  },
  {
    id: 2,
    title: "Luxury Penthouse Suite",
    category: "Luxury",
    image: "/project-2.jpg",

    description: "An opulent penthouse featuring custom furniture, premium materials, and panoramic city views.",
  },
  {
    id: 3,
    title: "Boutique Retail Space",
    category: "Commercial",
    image: "/project-3.jpg",

    description: "A carefully curated retail environment designed to enhance product display and customer experience.",
  },
  {
    id: 4,
    title: "Scandinavian-Inspired Home",
    category: "Residential",
    image: "/project-4.jpg",

    description: "A warm, inviting space with natural materials and a neutral color palette inspired by Nordic design.",
  },
  {
    id: 5,
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "/project-5.jpg",

    description: "A modern workspace designed to foster collaboration, creativity, and employee well-being.",
  },
  {
    id: 6,
    title: "Coastal Villa Retreat",
    category: "Luxury",
    image: "/project-6.jpg",

    description: "A luxurious beachfront property blending indoor and outdoor living with panoramic ocean views.",
  },
]

export function PortfolioGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ["All", ...new Set(projects.map((project) => project.category))]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Portfolio</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our curated collection of interior design projects showcasing our expertise in creating beautiful,
            functional spaces.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center bg-transparent">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm md:text-base cursor-pointer">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects
                  .filter((project) => category === "All" || project.category === category)
                  .map((project) => (
                    <motion.div key={project.id} variants={item} className="group relative overflow-hidden rounded-lg">
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="mb-1 text-xl font-semibold text-white">{project.title}</h3>
                        <p className="mb-4 text-sm text-white/80">{project.category}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-fit bg-transparent text-white border-white hover:bg-white/20"
                          onClick={() => setSelectedProject(project)}
                        >
                          View Project
                        </Button>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-lg bg-background p-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Close</span>
              </button>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold">{selectedProject.title}</h3>
                  <p className="mb-4 text-sm font-medium text-primary">{selectedProject.category}</p>
                  <div className="mb-6 space-y-4">
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                    <p className="text-muted-foreground">
                      Our approach focused on balancing aesthetics with functionality, creating a space that reflects
                      the client's personality while meeting their practical needs.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Project Details</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Location: New York, NY</li>
                      <li>Area: 2,400 sq ft</li>
                      <li>Year: 2023</li>
                      <li>Services: Space Planning, Interior Design, Furniture Selection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

