"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    content:
      "Working with this design studio was an absolute pleasure. They transformed our home into a space that perfectly reflects our style and meets our family's needs. Their attention to detail and ability to listen made all the difference.",
    author: "Sarah Johnson",
    role: "Homeowner",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "The team's expertise in commercial design helped us create a workspace that not only looks stunning but has significantly improved our team's productivity and morale. They understood our brand and translated it beautifully into our office environment.",
    author: "Michael Chen",
    role: "CEO, Tech Startup",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "I was impressed by their ability to work within our budget while still delivering a luxurious feel to our boutique hotel. The designers were professional, creative, and responsive throughout the entire process.",
    author: "Emma Rodriguez",
    role: "Hotel Manager",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    content:
      "Their innovative approach to our restaurant redesign resulted in a 30% increase in customer dwell time. They created a space that's both Instagram-worthy and comfortable, which has been great for business.",
    author: "David Thompson",
    role: "Restaurant Owner",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleTestimonials = 3
  const maxIndex = testimonials.length - visibleTestimonials

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Don't just take our word for it. Hear from clients who have experienced the transformation of their spaces.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-[100%] px-4 sm:min-w-[50%] lg:min-w-[33.333%]">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-primary/40 mb-4" />
                      <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="h-10 w-10 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold">Awards & Recognition</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
                    className="text-primary"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47 1-1 1h-4c-.53 0-1-.45-1-1v-2.34" />
                    <path d="M14 14.66V17c0 .55.47 1 1 1h4c.53 0 1-.45 1-1v-2.34" />
                    <path d="M12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
                  </svg>
                </div>
                <h4 className="text-center font-medium">Design Excellence Award {item}</h4>
                <p className="text-center text-sm text-muted-foreground">2023</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

