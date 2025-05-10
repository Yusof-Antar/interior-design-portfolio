"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton"; // Assuming you're using shadcn/ui

export function Navbar() {
  const [logoText, setLogoText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogoText = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/home");
        if (!response.ok) {
          throw new Error("Failed to fetch header data");
        }
        const data = await response.json();
        if (data.logoText) {
          setLogoText(data.logoText);
        }
      } catch (error) {
        console.error("Error fetching logo text:", error);
        // Fallback to default text if there's an error
        setLogoText("STUDIO");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogoText();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          {isLoading ? (
            <Skeleton className="h-6 w-24" /> // Adjust width as needed
          ) : (
            <>
              {logoText || "STUDIO"}
              <span className="text-primary">.</span>
            </>
          )}
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
  );
}
