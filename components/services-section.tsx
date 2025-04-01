"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  LayoutListIcon as LayoutPlaneLine,
  Palette,
  Ruler,
  Sofa,
  Sparkles,
  Store,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// utils/fontAwesomeUtils.ts
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { Service } from "@/models/service";

// Add all icons to the library
library.add(fas, far, fab);

export function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch("/api/services", {
        headers: { "Content-Type": "application/json" },
      }).then(async (result) => await result.json());

      setServices(response);
    };
    fetchServices();
  }, []);

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

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      {services.length > 0 && (
        <div className="container">
          <div className="mb-12 text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Comprehensive Design Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From concept to completion, we offer a full range of interior
              design services to transform your space into a beautiful,
              functional environment.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full transition-all hover:shadow-md">
                  <CardHeader>
                    <div className="mb-4 text-primary">
                      <FontAwesomeIcon
                        icon={service.icon as IconProp}
                        size="2x"
                      />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {service.description}
                    </CardDescription>
                    <Link
                      href="#contact"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
