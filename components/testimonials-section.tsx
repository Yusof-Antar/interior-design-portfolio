"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Award } from "@/models/award";
import { Testimonial } from "@/models/testimonial";

export function TestimonialsSection() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Calculate max index based on visible testimonials
  const maxIndex = Math.max(testimonials.length - visibleTestimonials, 0);

  // Handle responsive testimonial count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleTestimonials(1);
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [awardsResponse, testimonialsResponse] = await Promise.all([
          fetch("/api/awards").then((res) => {
            if (!res.ok) throw new Error("Failed to fetch awards");
            return res.json();
          }),
          fetch("/api/testimonials").then((res) => {
            if (!res.ok) throw new Error("Failed to fetch testimonials");
            return res.json();
          }),
        ]);

        setAwards(awardsResponse);
        setTestimonials(testimonialsResponse);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load testimonials. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Navigation handlers
  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 md:py-32">
        <div className="container">
          <div className="mb-12 text-center">
            <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
            <Skeleton className="h-5 w-3/4 mx-auto" />
          </div>

          <div className="relative">
            <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-full sm:w-1/2 lg:w-1/3 px-4">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <Skeleton className="h-24 mb-6" />
                      <div className="flex items-center">
                        <Skeleton className="h-12 w-12 rounded-full mr-4" />
                        <div>
                          <Skeleton className="h-5 w-32 mb-1" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>

          <div className="mt-16">
            <Skeleton className="h-8 w-1/3 mx-auto mb-8" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Skeleton className="h-16 w-16 rounded-full mb-3" />
                  <Skeleton className="h-5 w-24 mb-1" />
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="testimonials" className="py-20 md:py-32">
        <div className="container text-center">
          <div className="mb-6 text-red-500">{error}</div>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0 && !isLoading) {
    return <div></div>;
  }

  return (
    <section id="testimonials" className="py-20 md:py-32">
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
                    minWidth: `${100 / visibleTestimonials}%`,
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
          {testimonials.length > visibleTestimonials && (
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
          )}
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
    </section>
  );
}
