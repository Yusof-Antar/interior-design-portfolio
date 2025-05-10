"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { About } from "@/models/about";
import { Skeleton } from "@/components/ui/skeleton";

export function AboutSection() {
  const [data, setData] = useState<About | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/about");
        if (!response.ok) {
          throw new Error("Failed to fetch about data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching about data:", err);
        setError("Failed to load about information. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Image skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-[600px] w-full rounded-lg" />
            </div>

            {/* Content skeleton */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>

              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>

              <div className="space-y-3">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-4 w-1/3" />
              </div>

              <div className="pt-4 space-y-3">
                <Skeleton className="h-7 w-1/3" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-8 w-20 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="about" className="py-20 md:py-32">
        <div className="container text-center">
          <div className="mb-6 text-red-500">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section id="about" className="py-20 md:py-32">
        <div className="container text-center">
          <p>No about information available</p>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={data.image || "/placeholder.svg"}
                  alt="Interior Designer Portrait"
                  width={600}
                  height={600}
                  className="w-full object-cover size-[600px]"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                About Our Studio
              </h2>
              <p className="text-muted-foreground">
                {data.year ? `Founded in ${data.year}, ` : ""}
                {data.description ||
                  "Our design studio brings creative visions to life."}
              </p>
            </div>

            <div className="space-y-4">
              {data.mission && (
                <p className="text-muted-foreground">{data.mission}</p>
              )}
              {data.vision && (
                <p className="text-muted-foreground">{data.vision}</p>
              )}
            </div>

            {data.quote && (
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "{data.quote}"
                {data.quoteAuthor && (
                  <footer className="mt-2 text-sm font-medium">
                    — {data.quoteAuthor}
                  </footer>
                )}
              </blockquote>
            )}

            {data.Expertise?.length > 0 && (
              <div className="pt-4">
                <h3 className="mb-3 text-xl font-semibold">Our Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {data.Expertise.map((skill) => (
                    <span
                      key={skill.id}
                      className="rounded-full bg-muted px-3 py-1 text-sm"
                    >
                      {skill.path}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
