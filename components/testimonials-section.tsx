"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "@/models/award";
import { Testimonial } from "@/models/testimonial";
import { Marquee } from "./magicui/marquee";

export function TestimonialsSection() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  // Dynamically calculate the maximum index based on the number of visible testimonials
  const maxIndex = Math.max(testimonials.length - visibleTestimonials, 0);

  // Adjust visible testimonials based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleTestimonials(1); // Mobile: Show 1 testimonial
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2); // Tablet: Show 2 testimonials
      } else {
        setVisibleTestimonials(3); // Desktop: Show 3 testimonials
      }
    };

    handleResize(); // Initial call to set the correct number of visible testimonials
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getAwards = async () => {
    const responseAwards = await fetch("/api/awards").then(
      async (result) => await result.json()
    );
    const responseTestmonials = await fetch("/api/testimonials").then(
      async (result) => await result.json()
    );
    setAwards(responseAwards);
    setTestimonials(responseTestmonials);
  };

  useEffect(() => {
    getAwards();
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-32">
      {testimonials.length > 0 && (
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Don't just take our word for it. Hear from clients who have
              experienced the transformation of their spaces.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / visibleTestimonials)
                  }%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="px-4"
                    style={{
                      minWidth: `${100 / visibleTestimonials}%`, // Dynamically adjust width
                    }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <p className="mb-6 text-muted-foreground">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center">
                          <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.clientName}
                              width={48}
                              height={48}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              {testimonial.clientName}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.clientPosition}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
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
          {awards.length > 0 && (
            <div className="mt-16">
              <h3 className="mb-8 text-center text-2xl font-semibold">
                Awards & Recognition
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {awards.map((item) => (
                  <div key={item.id} className="flex flex-col items-center">
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
                    <h4 className="text-center font-medium">{item.title}</h4>
                    <p className="text-center text-sm text-muted-foreground">
                      {item.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
