"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export function Footer() {
  const [socialLinks, setSocialLinks] = useState({
    instagram: "",
    pinterest: "",
    linkedin: "",
    whatsapp: "",
  });

  const [isClient, setIsClient] = useState(false);

  // Fetch the data after the component mounts on the client
  useEffect(() => {
    const fetchData = async () => {
      const socialResponse = await fetch("/api/social-media").then(
        async (result) => await result.json()
      );
      setSocialLinks(socialResponse);
    };

    fetchData();
    setIsClient(true); // After the initial render, set isClient to true
  }, []);

  // Prevent rendering until the component is fully mounted on the client
  if (!isClient) {
    return null; // Return null or a loading state until the client renders the component
  }

  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col md:flex-row items-center justify-between py-10 md:py-16">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <Link href="/" className="text-xl font-semibold tracking-tight mb-2">
            STUDIO<span className="text-primary">.</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-md text-center md:text-left">
            Creating beautiful, functional spaces that inspire and elevate
            everyday living.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex gap-6 mb-4">
            {Object.entries(socialLinks)
              .filter(([_, link]) => link) // Filter out empty links
              .map(([platform, link], index) => {
                return (
                  <Link
                    key={index}
                    href={link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </Link>
                );
              })}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Studio Interior Design. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
