"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { About } from "@/models/about";

export function AboutSection() {
  const [data, setData] = useState<About>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/about").then(
        async (result) => await result.json()
      );
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <section id="about" className="py-20 md:py-32">
      {data?.studio && (
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/10 md:-top-6 md:-left-6 md:h-32 md:w-32" /> */}
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={data?.image!}
                    alt="Interior Designer Portrait"
                    width={600}
                    height={600}
                    className="w-full object-cover size-[600px] "
                  />
                </div>
                {/* <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 md:-bottom-6 md:-right-6 md:h-32 md:w-32" /> */}
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
                  Founded in {data?.year}, {data?.description}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">{data?.mission}</p>
                <p className="text-muted-foreground">{data?.vision}</p>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "{data?.quote}"
                <footer className="mt-2 text-sm font-medium">
                  — {data?.quoteAuthor}
                </footer>
              </blockquote>

              <div className="pt-4">
                <h3 className="mb-3 text-xl font-semibold">Our Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {data?.Expertise.map((skill) => (
                    <span
                      key={skill.id}
                      className="rounded-full bg-muted px-3 py-1 text-sm"
                    >
                      {skill.path}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
