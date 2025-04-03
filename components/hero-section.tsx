"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { HomeData } from "@/models/home";

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [data, setData] = useState<HomeData>({
    id: "1",
    logoText: "",
    heroTitle: "",
    heroSubtitle: "",
    primaryButtonText: "",
    secondaryButtonText: "",
    HeaderImage: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % data?.HeaderImage?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.HeaderImage?.length]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/home").then(
        async (result) => await result.json()
      );
      setData(response);
    };

    fetchData();
  }, []);

  if (!data.logoText) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {data.HeaderImage?.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.path || "/placeholder.svg"}
            alt={`Interior design showcase ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {data.heroTitle}
          </h1>
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            {data.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="#portfolio">{data.primaryButtonText}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="#contact">{data.secondaryButtonText}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
