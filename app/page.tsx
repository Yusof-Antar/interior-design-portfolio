// app/page.tsx or app/home/page.tsx (depends on your routing setup)

import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Interior Design Portfolio | Creating Spaces, Crafting Experiences",
  description:
    "Explore our curated collection of interior design projects showcasing our expertise in residential, commercial, and luxury spaces.",
  keywords: [
    "interior design",
    "home decoration",
    "luxury interiors",
    "residential design",
    "commercial spaces",
  ],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name or Brand",
  metadataBase: new URL("https://yourwebsite.com"),
  openGraph: {
    title: "Interior Design Portfolio | Creating Spaces, Crafting Experiences",
    description:
      "Explore our curated collection of interior design projects showcasing our expertise in residential, commercial, and luxury spaces.",
    url: "https://yourwebsite.com",
    siteName: "Your Brand",
    images: [
      {
        url: "/og-image.jpg", // place in /public folder
        width: 1200,
        height: 630,
        alt: "Interior design preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Portfolio | Creating Spaces, Crafting Experiences",
    description:
      "Explore our curated collection of interior design projects showcasing our expertise in residential, commercial, and luxury spaces.",
    images: ["/og-image.jpg"],
    creator: "@your_twitter_handle",
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 py-8 flex justify-center">
          <Link
            href="#portfolio"
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="mt-2 animate-bounce" />
          </Link>
        </div>
        <PortfolioGallery />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
