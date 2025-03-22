"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
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
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/10 md:-top-6 md:-left-6 md:h-32 md:w-32" />
              <div className="relative overflow-hidden rounded-lg max-h-[600px]">
                <Image
                  src="/studio.jpg"
                  alt="Interior Designer Portrait"
                  width={600}
                  height={600}
                  className="w-full object-cover "
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 md:-bottom-6 md:-right-6 md:h-32 md:w-32" />
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
                Founded in 2015, our design studio brings together a team of
                passionate interior designers, architects, and stylists
                dedicated to creating exceptional spaces that inspire and
                elevate everyday living.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                We believe that thoughtful design has the power to transform not
                just spaces, but lives. Our approach combines aesthetic vision
                with practical functionality, ensuring that every project is as
                livable as it is beautiful.
              </p>
              <p className="text-muted-foreground">
                With a client-centered philosophy, we collaborate closely with
                each client to understand their unique needs, preferences, and
                lifestyle, resulting in personalized spaces that tell their
                story.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Design is not just what it looks like and feels like. Design is
              how it works."
              <footer className="mt-2 text-sm font-medium">— Steve Jobs</footer>
            </blockquote>

            <div className="pt-4">
              <h3 className="mb-3 text-xl font-semibold">Our Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Residential Design",
                  "Commercial Spaces",
                  "Luxury Interiors",
                  "Space Planning",
                  "Furniture Design",
                  "Sustainable Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
