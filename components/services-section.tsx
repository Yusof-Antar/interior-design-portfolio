"use client"

import { motion } from "framer-motion"
import { ArrowRight, LayoutListIcon as LayoutPlaneLine, Palette, Ruler, Sofa, Sparkles, Store } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: <LayoutPlaneLine className="h-10 w-10" />,
    title: "Space Planning",
    description:
      "Optimizing layout and flow to maximize functionality and create harmonious spaces tailored to your needs.",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Interior Styling",
    description:
      "Curating colors, textures, and decorative elements to create cohesive, visually appealing environments.",
  },
  {
    icon: <Sofa className="h-10 w-10" />,
    title: "Furniture Curation",
    description: "Selecting and sourcing furniture pieces that balance aesthetics, comfort, and functionality.",
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Custom Design",
    description: "Creating bespoke furniture, fixtures, and architectural elements unique to your space.",
  },
  {
    icon: <Store className="h-10 w-10" />,
    title: "Commercial Design",
    description: "Designing retail, hospitality, and office spaces that enhance brand identity and user experience.",
  },
  {
    icon: <Ruler className="h-10 w-10" />,
    title: "3D Visualization",
    description: "Providing photorealistic renderings to help visualize the final design before implementation.",
  },
]

export function ServicesSection() {
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
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Our Services</div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Comprehensive Design Solutions</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From concept to completion, we offer a full range of interior design services to transform your space into a
            beautiful, functional environment.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

