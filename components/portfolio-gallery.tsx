"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Portfolio } from "@/models/portfolio";
import ImageCarousel from "./image-carousel";

export function PortfolioGallery() {
  const [selectedProject, setSelectedProject] = useState<Portfolio | null>(
    null
  );
  const [projects, setProjects] = useState<Portfolio[]>([]);
  const [categories, setCategories] = useState<string[]>([]); // Start empty, populate after fetch
  const [isDataLoaded, setIsDataLoaded] = useState(false); // Track data loading state

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch projects
        const projectResponse = await fetch("/api/portfolio").then(
          async (result) => await result.json()
        );
        setProjects(projectResponse);

        // Fetch categories
        const categoryResponse = await fetch(
          "/api/portfolio-category/active"
        ).then(async (result) => await result.json());

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(categoryResponse.map((item: any) => item.title)),
        ] as string[];

        // Update categories, ensuring "All" is always first
        setCategories(["All", ...uniqueCategories]);
        setIsDataLoaded(true); // Mark data as loaded
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle loading state
  if (!isDataLoaded) {
    return <div></div>;
  }

  // Handle empty projects state
  if (projects.length === 0) {
    return <div></div>;
  }

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Portfolio
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our curated collection of interior design projects
            showcasing our expertise in creating beautiful, functional spaces.
          </p>
        </div>

        {/* Conditional Rendering for Tabs */}
        {isDataLoaded && categories.length > 0 ? (
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-sm md:text-base cursor-pointer"
                >
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
                    .filter(
                      (project) =>
                        category === "All" ||
                        project.category.title === category
                    )
                    .map((project) => (
                      <motion.div
                        key={project.id}
                        variants={item}
                        className="group relative overflow-hidden rounded-lg"
                      >
                        <div className="aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={
                              project.ProjectImage[0]?.path ||
                              "/placeholder.svg"
                            }
                            alt={project.title}
                            width={800}
                            height={600}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="mb-1 text-xl font-semibold text-white">
                            {project.title}
                          </h3>
                          <p className="mb-4 text-sm text-white/80">
                            {project.category.title}
                          </p>
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
        ) : (
          <p className="text-center text-muted-foreground">Loading...</p>
        )}

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
                <div className="overflow-hidden rounded-lg max-w-[400px] h-[400px]">
                  <ImageCarousel
                    images={selectedProject.ProjectImage?.map(
                      (image) => image.path
                    )}
                  />
                  {/* <Image
                    src={
                      selectedProject.ProjectImage[0]?.path ||
                      "/placeholder.svg"
                    }
                    alt={selectedProject.title}
                    width={400}
                    height={400}
                    className="size-[400px] object-cover"
                  /> */}
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold">
                    {selectedProject.title}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-primary">
                    {selectedProject.category.title}
                  </p>
                  <div className="mb-6 space-y-4">
                    <p className="text-muted-foreground">
                      {selectedProject.description}
                    </p>
                  </div>
                  {/* <div className="space-y-2">
                    <h4 className="font-medium">Project Details</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Location: New York, NY</li>
                      <li>Area: 2,400 sq ft</li>
                      <li>Year: 2023</li>
                      <li>
                        Services: Space Planning, Interior Design, Furniture
                        Selection
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
