"use client";
import { useEffect, useState } from "react";
import { Save, Trash } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { HomeData } from "@/models/home";

export default function HeaderPage() {
  const [headerData, setHeaderData] = useState<HomeData>({
    id: "1",
    logoText: "",
    heroTitle: "",
    heroSubtitle: "",
    primaryButtonText: "",
    secondaryButtonText: "",
    HeaderImage: [],
  });

  // State to manage new and existing images
  const [formData, setFormData] = useState<{
    images: File[]; // New images to upload
    keptImages: { id: string; path: string }[]; // Existing images with IDs
  }>({
    images: [],
    keptImages: [], // Initialize as empty
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home");
        if (!response.ok) {
          throw new Error("Failed to fetch header data");
        }
        const data = await response.json();
        setHeaderData(data);
        // Initialize keptImages with existing image IDs and paths
        setFormData((prev) => ({
          ...prev,
          keptImages: data.HeaderImage?.map((img) => ({
            id: img.id,
            path: img.path,
          })),
        }));
      } catch (error) {
        console.error("Error fetching header data:", error);
        toast.error("Failed to load header data.");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    return () => {
      formData.images.forEach((file) => {
        URL.revokeObjectURL(URL.createObjectURL(file));
      });
    };
  }, [formData.images]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setHeaderData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files); // Convert FileList to array

      // Validate file types and sizes
      const validFiles = files.filter((file) => {
        const isValidType = ["image/jpeg", "image/png"].includes(file.type);
        const isValidSize = file.size <= 5 * 1024 * 1024; // Max size: 5MB
        if (!isValidType || !isValidSize) {
          toast.error(
            `Invalid file: ${file.name}. Only JPEG/PNG under 5MB allowed.`
          );
        }
        return isValidType && isValidSize;
      });

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...validFiles], // Append new files to existing images
      }));
    }
    e.target.value = ""; // Reset the file input
  };

  const handleRemoveImage = async (index: number) => {
    const isFileObject = index < formData.images.length;
    if (isFileObject) {
      // Remove a newly uploaded file (not yet saved to the backend)
      setFormData((prev) => ({
        ...prev,
        images: prev.images.filter((_, i) => i !== index),
      }));
    } else {
      // Remove an existing image URL (already saved to the backend)
      const keptIndex = index - formData.images.length;
      const imageToRemove = formData.keptImages[keptIndex];
      try {
        // Call the API to delete the image by ID
        const response = await fetch(`/api/home/${imageToRemove.id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          // Update the keptImages state to reflect the deletion
          setFormData((prev) => ({
            ...prev,
            keptImages: prev.keptImages.filter((_, i) => i !== keptIndex),
          }));
          toast.success("Image deleted", {
            description: "The image has been successfully removed.",
          });
        } else {
          const errorData = await response.json();
          toast.error("Failed to delete image", {
            description: errorData.error || "An unexpected error occurred.",
          });
        }
      } catch (error) {
        console.error("Error deleting image:", error);
        toast.error("Failed to delete image", {
          description: "An unexpected error occurred.",
        });
      }
    }
  };

  const handleSaveHeader = async () => {
    // Validate required fields
    if (
      !headerData.logoText ||
      !headerData.heroTitle ||
      !headerData.heroSubtitle ||
      !headerData.primaryButtonText ||
      !headerData.secondaryButtonText
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      // Create a FormData object to send to the backend
      const formDataToSend = new FormData();
      formDataToSend.append("logoText", headerData.logoText);
      formDataToSend.append("heroTitle", headerData.heroTitle);
      formDataToSend.append("heroSubtitle", headerData.heroSubtitle);
      formDataToSend.append("primaryButtonText", headerData.primaryButtonText);
      formDataToSend.append(
        "secondaryButtonText",
        headerData.secondaryButtonText
      );

      // Append kept image URLs
      formData.keptImages.forEach((img) => {
        formDataToSend.append("keptImages", img.path);
      });

      // Append new image files
      formData.images.forEach((file) => {
        formDataToSend.append("images", file);
      });

      // Call the API to update the header
      const response = await fetch("/api/home", {
        method: "PUT",
        body: formDataToSend,
      });
      if (response.ok) {
        const updatedData = await response.json();
        setHeaderData(updatedData);
        setFormData({
          images: [],
          keptImages: updatedData.HeaderImage?.map((img) => ({
            id: img.id,
            path: img.path,
          })),
        });
        toast.success("Header saved", {
          description: "Your header information has been updated.",
        });
      } else {
        const errorData = await response.json();
        toast.error("Failed to save header data.", {
          description: errorData.error || "An unexpected error occurred.",
        });
      }
    } catch (error) {
      console.error("Error saving header data:", error);
      toast.error("Failed to save header data.");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Header Management</h1>
        <p className="text-muted-foreground">
          Customize your website's header and hero section.
        </p>
      </div>

      {/* Logo & Navigation Card */}
      <Card>
        <CardHeader>
          <CardTitle>Logo & Navigation</CardTitle>
          <CardDescription>
            Update your studio's logo text or image.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="logoText">Logo Text</Label>
            <Input
              id="logoText"
              name="logoText"
              value={headerData.logoText}
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

      {/* Hero Section Card */}
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
              <Label htmlFor="primaryButtonText">Primary Button Text</Label>
              <Input
                id="primaryButtonText"
                name="primaryButtonText"
                value={headerData.primaryButtonText}
                onChange={handleInputChange}
                placeholder="e.g., Explore Our Work"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="secondaryButtonText">Secondary Button Text</Label>
              <Input
                id="secondaryButtonText"
                name="secondaryButtonText"
                value={headerData.secondaryButtonText}
                onChange={handleInputChange}
                placeholder="e.g., Contact Us"
              />
            </div>
          </div>
          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="HeaderImage">Background Images</Label>
            </div>
            <div className="space-y-3">
              {/* File Input for Uploading New Images */}
              <Input
                id="backgroundImages"
                type="file"
                multiple
                onChange={handleImageUpload}
                placeholder="Choose File, No File Chosen"
              />
              {/* Preview Uploaded Images */}
              {[...formData.images, ...formData.keptImages].length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {[...formData.images, ...formData.keptImages].map(
                    (file, index) => {
                      const isFileObject = file instanceof File;
                      const imageUrl = isFileObject
                        ? URL.createObjectURL(file)
                        : file.path;
                      return (
                        <div key={index} className="relative w-20 h-20 group">
                          <img
                            src={imageUrl}
                            alt={`Preview ${index}`}
                            className="w-full h-full object-cover rounded"
                          />
                          {/* Hoverable Remove Button */}
                          <button
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            onClick={() => handleRemoveImage(index)}
                          >
                            &times;
                          </button>
                        </div>
                      );
                    }
                  )}
                </div>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              These images will rotate in the hero section background. Use
              high-quality images with a 16:9 aspect ratio.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSaveHeader}>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
