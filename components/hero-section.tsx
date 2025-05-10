"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you're using shadcn/ui
import { HomeData } from "@/models/home";

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [data, setData] = useState<HomeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Image slideshow effect
  useEffect(() => {
    if (!data?.HeaderImage?.length) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % data.HeaderImage.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data?.HeaderImage]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/home");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Failed to fetch hero data:", err);
        setError("Failed to load content. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="relative h-screen w-full bg-gray-100 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 text-center">
          <Skeleton className="h-12 w-3/4 max-w-2xl" />
          <Skeleton className="h-6 w-2/3 max-w-xl" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative h-screen w-full bg-gray-100 flex items-center justify-center">
        <div className="container text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="relative h-screen w-full bg-gray-100 flex items-center justify-center">
        <div className="container text-center">
          <p>No data available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      {data.HeaderImage?.length > 0 ? (
        data.HeaderImage.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.path || "/placeholder.svg"}
              alt={`Hero image ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))
      ) : (
        <div className="absolute inset-0 bg-gray-800" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {data.heroTitle || "Welcome to Our Studio"}
          </h1>
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            {data.heroSubtitle || "Creating beautiful spaces for your life"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="#portfolio">
                {data.primaryButtonText || "Our Work"}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="#contact">
                {data.secondaryButtonText || "Contact Us"}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
