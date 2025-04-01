"use client";

import type React from "react";

import { useState } from "react";
import { Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function HeaderPage() {
  const [headerData, setHeaderData] = useState({
    logo: "STUDIO.",
    heroTitle: "Designing Spaces, Creating Experiences",
    heroSubtitle:
      "Transforming interiors with thoughtful design that balances aesthetics and functionality",
    ctaPrimary: "Explore Our Work",
    ctaSecondary: "Book a Consultation",
    backgroundImages: [
      "/placeholder.svg?height=1080&width=1920",
      "/placeholder.svg?height=1080&width=1920",
      "/placeholder.svg?height=1080&width=1920",
    ],
    showScrollIndicator: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setHeaderData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newImages = [...headerData.backgroundImages];
    newImages[index] = e.target.value;
    setHeaderData((prev) => ({ ...prev, backgroundImages: newImages }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setHeaderData((prev) => ({ ...prev, showScrollIndicator: checked }));
  };

  const addBackgroundImage = () => {
    setHeaderData((prev) => ({
      ...prev,
      backgroundImages: [
        ...prev.backgroundImages,
        "/placeholder.svg?height=1080&width=1920",
      ],
    }));
  };

  const removeBackgroundImage = (index: number) => {
    if (headerData.backgroundImages.length <= 1) {
      toast.error("Cannot remove", {
        description: "You must have at least one background image.",
      });
      return;
    }

    const newImages = [...headerData.backgroundImages];
    newImages.splice(index, 1);
    setHeaderData((prev) => ({ ...prev, backgroundImages: newImages }));
  };

  const handleSaveHeader = () => {
    toast.success("Header saved", {
      description: "Your header information has been updated.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Header Management</h1>
        <p className="text-muted-foreground">
          Customize your website's header and hero section.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Logo & Navigation</CardTitle>
          <CardDescription>
            Update your studio's logo text or image.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="logo">Logo Text</Label>
            <Input
              id="logo"
              name="logo"
              value={headerData.logo}
              onChange={handleInputChange}
              placeholder="Your studio name"
            />
            <p className="text-xs text-muted-foreground">
              This text will be displayed in the top-left corner of your
              website.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hero Section</CardTitle>
          <CardDescription>
            Customize your homepage hero section content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="heroTitle">Hero Title</Label>
            <Input
              id="heroTitle"
              name="heroTitle"
              value={headerData.heroTitle}
              onChange={handleInputChange}
              placeholder="Main headline for your hero section"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
            <Textarea
              id="heroSubtitle"
              name="heroSubtitle"
              value={headerData.heroSubtitle}
              onChange={handleInputChange}
              placeholder="Supporting text for your hero section"
              rows={2}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="ctaPrimary">Primary Button Text</Label>
              <Input
                id="ctaPrimary"
                name="ctaPrimary"
                value={headerData.ctaPrimary}
                onChange={handleInputChange}
                placeholder="e.g., Explore Our Work"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ctaSecondary">Secondary Button Text</Label>
              <Input
                id="ctaSecondary"
                name="ctaSecondary"
                value={headerData.ctaSecondary}
                onChange={handleInputChange}
                placeholder="e.g., Contact Us"
              />
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="backgroundImages">Background Images</Label>
              <Button variant="outline" size="sm" onClick={addBackgroundImage}>
                Add Image
              </Button>
            </div>
            <div className="space-y-3">
              {headerData.backgroundImages.map((image, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    id={`backgroundImage-${index}`}
                    value={image}
                    onChange={(e) => handleImageChange(e, index)}
                    placeholder="Image URL"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeBackgroundImage(index)}
                    className="shrink-0"
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              These images will rotate in the hero section background. Use
              high-quality images with a 16:9 aspect ratio.
            </p>
          </div>

          <div className="flex items-center space-x-2 pt-4">
            <Switch
              id="showScrollIndicator"
              checked={headerData.showScrollIndicator}
              onCheckedChange={handleSwitchChange}
            />
            <Label htmlFor="showScrollIndicator">Show scroll indicator</Label>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSaveHeader}>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
