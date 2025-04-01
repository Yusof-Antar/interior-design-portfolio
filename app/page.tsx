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

export const metadata: Metadata = {
  title: "Interior Design Portfolio | Creating Spaces, Crafting Experiences",
  description:
    "Explore our curated collection of interior design projects showcasing our expertise in residential, commercial, and luxury spaces.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            STUDIO<span className="text-primary">.</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex">
              <Link href="#contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </header>
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
