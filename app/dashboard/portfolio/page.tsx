"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Edit, Plus, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Portfolio } from "@/models/portfolio";
import { PortfolioCategory } from "@/models/portfolio-category";
import ProjectCard from "@/components/portfolio-card";

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Portfolio[]>([]);
  const [categories, setCategories] = useState<PortfolioCategory[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Portfolio | null>(null);
  const [formData, setFormData] = useState<{
    id: string;
    title: string;
    description: string;
    link: string;
    images: (File | string)[];
    keptImages: string[]; // Paths of images to keep
    category: string;
  }>({
    id: "",
    title: "",
    description: "",
    link: "",
    images: [],
    keptImages: [], // Initialize as empty
    category: "",
  });

  useEffect(() => {
    const fecthData = async () => {
      const categoryResponse = await fetch(
        "/api/portfolio-category/active"
      ).then(async (result) => await result.json());
      const response = await fetch("/api/portfolio").then(
        async (result) => await result.json()
      );
      setCategories(categoryResponse);
      setProjects(response);
    };

    fecthData();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleAddProject = async () => {
    try {
      // Create a FormData object to send to the backend
      const formDataToSend = new FormData();

      // Append form fields to the FormData object
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("categoryId", formData.category);

      // Append image files to the FormData object
      formData.images.forEach((file) => {
        formDataToSend.append("images", file); // "images" matches the API's expected field name
      });

      // Call the API to create the project
      const response = await fetch("/api/portfolio", {
        method: "POST",
        body: formDataToSend,
      });

      // Handle the API response
      if (response.ok) {
        const newProject = await response.json(); // Get the newly created project from the backend

        // Update the projects state with the new project
        setProjects([...projects, newProject]);

        // Reset the form data
        setFormData({
          id: "",
          title: "",
          description: "",
          link: "",
          images: [],
          keptImages: [], // Initialize as empty
          category: "",
        });

        // Close the dialog
        setIsAddDialogOpen(false);

        // Show a success toast notification
        toast.success("Project added", {
          description: "The project has been added to your portfolio.",
        });
      } else {
        // Handle errors from the API
        const errorData = await response.json();
        toast.error("Failed to add project", {
          description: errorData.error || "An unexpected error occurred.",
        });
      }
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Failed to add project", {
        description: "An unexpected error occurred.",
      });
    }
  };

  const handleEditProject = async () => {
    try {
      if (!currentProject) return;

      // Create a FormData object to send to the backend
      const formDataToSend = new FormData();
      formDataToSend.append("id", formData.id);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("link", formData.link);
      formDataToSend.append("categoryId", formData.category);

      // Append kept images
      formData.keptImages.forEach((path) => {
        formDataToSend.append("keptImages", path);
      });

      // Append new image files
      formData.images.forEach((file) => {
        if (file instanceof File) {
          formDataToSend.append("images", file);
        }
      });

      // Call the API to update the project
      const response = await fetch(`/api/portfolio/${formData.id}`, {
        method: "PUT",
        body: formDataToSend,
      });

      if (response.ok) {
        const updatedProject = await response.json();

        // Update the projects state with the updated project
        setProjects((prev) =>
          prev.map((project) =>
            project.id === updatedProject.id ? updatedProject : project
          )
        );

        // Reset the form data and close the dialog
        setFormData({
          id: "",
          title: "",
          description: "",
          link: "",
          images: [],
          keptImages: [],
          category: "",
        });
        setCurrentProject(null);
        setIsEditDialogOpen(false);

        // Show a success toast notification
        toast.success("Project updated", {
          description: "The project has been updated successfully.",
        });
      } else {
        const errorData = await response.json();
        toast.error("Failed to update project", {
          description: errorData.error || "An unexpected error occurred.",
        });
      }
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Failed to update project", {
        description: "An unexpected error occurred.",
      });
    }
  };

  const handleDeleteProject = async (id: string) => {
    try {
      // Call the API to delete the project
      const response = await fetch(`/api/portfolio/${id}`, {
        method: "DELETE",
      });

      // Handle the API response
      if (response.ok) {
        // Update the projects state by filtering out the deleted project
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project.id !== id)
        );

        // Show a success toast notification
        toast.success("Project deleted", {
          description: "The project has been removed from your portfolio.",
        });
      } else {
        // Handle errors from the API
        const errorData = await response.json();
        toast.error("Failed to delete project", {
          description: errorData.error || "An unexpected error occurred.",
        });
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project", {
        description: "An unexpected error occurred.",
      });
    }
  };

  const openEditDialog = (project: Portfolio) => {
    setCurrentProject(project);
    setFormData({
      id: project.id,
      title: project.title,
      description: project.description,
      link: project.link,
      images: [], // New images will be added here
      keptImages: project.ProjectImage.map((image) => image.path), // Existing images to keep
      category: project.category.id,
    });
    setIsEditDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Portfolio Management
          </h1>
          <p className="text-muted-foreground">
            Add, edit, or remove projects from your portfolio.
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
              <DialogDescription>
                Fill in the details for your new portfolio project.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {/* Title Input */}
              <div className="grid gap-2">
                <Label htmlFor="title">Project Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Modern Apartment Design"
                />
              </div>

              {/* Category Select */}
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Image Upload and Preview */}
              <div className="grid gap-2">
                <Label htmlFor="images">Images</Label>
                <Input
                  id="images"
                  name="images"
                  placeholder="Choose File, No File Chosen"
                  type="file"
                  multiple // Allow multiple file selection
                  onChange={(e) => {
                    if (e.target.files) {
                      const files = Array.from(e.target.files); // Convert FileList to array
                      setFormData((prev) => ({
                        ...prev,
                        images: [...prev.images, ...files], // Append new files to existing images
                      }));
                    }
                    e.target.value = "";
                  }}
                />
                {/* Preview Uploaded Images */}
                {formData.images.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[...formData.images].map((file, index) => (
                      <div key={index} className="relative w-20 h-20 group">
                        <img
                          src={
                            typeof file === "string"
                              ? file
                              : URL.createObjectURL(file)
                          } // Create a temporary URL for preview
                          alt={`Preview ${index}`}
                          className="w-full h-full object-cover rounded"
                        />
                        {/* Hoverable Remove Button */}
                        <button
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              images: prev.images.filter((_, i) => i !== index), // Remove image by index
                            }));
                          }}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Description Textarea */}
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="A brief description of the project..."
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleAddProject}>Add Project</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onEdit={openEditDialog}
            onDelete={handleDeleteProject}
          />
        ))}
      </div>

      {/* Edit Project Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
            <DialogDescription>
              Update the details for this portfolio project.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Title Input */}
            <div className="grid gap-2">
              <Label htmlFor="edit-title">Project Title</Label>
              <Input
                id="edit-title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Modern Apartment Design"
              />
            </div>

            {/* Category Select */}
            <div className="grid gap-2">
              <Label htmlFor="edit-category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Image Upload and Preview */}
            <div className="grid gap-2">
              <Label htmlFor="edit-images">Images</Label>
              <Input
                id="edit-images"
                type="file"
                multiple // Allow multiple file selection
                onChange={(e) => {
                  if (e.target.files) {
                    const files = Array.from(e.target.files); // Convert FileList to array
                    setFormData((prev) => ({
                      ...prev,
                      images: [...prev.images, ...files], // Append new files to existing images
                    }));
                  }
                  e.target.value = ""; // Reset the file input
                }}
              />
              {/* Preview Uploaded Images */}
              {formData.images.length + formData.keptImages.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {[...formData.images, ...formData.keptImages].map(
                    (file, index) => {
                      const isFileObject = file instanceof File;
                      const imageUrl = isFileObject
                        ? URL.createObjectURL(file)
                        : file;

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
                            onClick={() => {
                              const isFileObject = file instanceof File;
                              if (isFileObject) {
                                // Remove a newly uploaded file
                                setFormData((prev) => ({
                                  ...prev,
                                  images: prev.images.filter(
                                    (_, i) => i !== index
                                  ),
                                }));
                              } else {
                                // Remove an existing image from keptImages
                                setFormData((prev) => ({
                                  ...prev,
                                  keptImages: prev.keptImages.filter(
                                    (path) => path !== file
                                  ),
                                }));
                              }
                            }}
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

            {/* Description Textarea */}
            <div className="grid gap-2">
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="A brief description of the project..."
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleEditProject}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
