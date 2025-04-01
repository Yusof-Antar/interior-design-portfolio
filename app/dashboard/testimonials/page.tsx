"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Edit, Plus, Save, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import { Testimonial } from "@/models/testimonial";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] =
    useState<Testimonial | null>(null);
  const [formData, setFormData] = useState<{
    content: string;
    name: string;
    position: string;
    avatar: File | undefined;
  }>({
    content: "",
    name: "",
    position: "",
    avatar: undefined,
  });

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/api/testimonials").then(
        async (result) => await result.json()
      );
      setTestimonials(response);
    };
    fetchTestimonials();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        setFormData((prev) => ({ ...prev, [name]: target.files![0] }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Real-time validation feedback with Sonner
    if (name === "content" && value.trim() === "") {
      toast.error("Validation Error", {
        description: "Testimonial content cannot be empty.",
      });
    }
    if (name === "name" && value.trim() === "") {
      toast.error("Validation Error", {
        description: "Client name cannot be empty.",
      });
    }
    if (name === "position" && value.trim() === "") {
      toast.error("Validation Error", {
        description: "Client position cannot be empty.",
      });
    }
  };

  const handleAddTestimonial = async () => {
    // Validate content
    if (!formData.content || formData.content.trim() === "") {
      toast.error("Validation Error", {
        description: "Testimonial content is required.",
      });
      return;
    }

    // Validate name
    if (!formData.name || formData.name.trim() === "") {
      toast.error("Validation Error", {
        description: "Client name is required.",
      });
      return;
    }

    // Validate position
    if (!formData.position || formData.position.trim() === "") {
      toast.error("Validation Error", {
        description: "Client position is required.",
      });
      return;
    }

    // Validate avatar
    if (!formData.avatar || !(formData.avatar instanceof File)) {
      toast.error("Validation Error", {
        description: "Please upload a valid avatar file.",
      });
      return;
    }

    // If all validations pass, proceed with the API call
    const newFormData = new FormData();
    newFormData.append("avatar", formData.avatar);
    newFormData.append("content", formData.content);
    newFormData.append("name", formData.name);
    newFormData.append("position", formData.position);

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        body: newFormData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload testimonial!");
      }

      const result = await response.json();

      // Clear form data and close dialog
      setFormData({ content: "", name: "", position: "", avatar: undefined });
      setIsAddDialogOpen(false);

      // Show success toast with Sonner
      toast.success("Testimonial Added", {
        description: "The testimonial has been added successfully.",
      });

      setTestimonials((prevTestimonials) => [result, ...prevTestimonials]);
    } catch (error) {
      console.error("Error:", error);

      // Show error toast with Sonner
      toast.error("Error", {
        description: "Failed to add the testimonial. Please try again.",
      });
    }
  };

  const handleDeleteTestimonial = async (id: number) => {
    await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
    setTestimonials(
      testimonials.filter((testimonial) => testimonial.id !== id)
    );

    // Show success toast with Sonner
    toast.success("Testimonial Deleted", {
      description: "The testimonial has been removed from your collection.",
    });
  };

  const openEditDialog = async (testimonial: Testimonial) => {
    async function urlToFile(
      url: string,
      filename: string,
      mimeType: string
    ): Promise<File> {
      const response = await fetch(url);
      const blob = await response.blob();
      return new File([blob], filename, { type: mimeType });
    }
    const avatarFile = testimonial.avatar
      ? await urlToFile(testimonial.avatar, "avatar.jpg", "image/jpeg")
      : undefined;
    setCurrentTestimonial(testimonial);
    setFormData({
      content: testimonial.text,
      name: testimonial.clientName,
      position: testimonial.clientPosition,
      avatar: avatarFile,
    });
    setIsEditDialogOpen(true);
  };

  const handleEditTestimonial = async () => {
    if (!currentTestimonial) return;

    // Validation: Ensure all required fields are present
    if (!formData.content || formData.content.trim() === "") {
      toast.error("Validation Error", {
        description: "Testimonial content is required.",
      });
      return;
    }

    if (!formData.name || formData.name.trim() === "") {
      toast.error("Validation Error", {
        description: "Client name is required.",
      });
      return;
    }

    if (!formData.position || formData.position.trim() === "") {
      toast.error("Validation Error", {
        description: "Client position is required.",
      });
      return;
    }

    try {
      // Prepare the updated testimonial data
      const updatedData = new FormData();
      updatedData.append("content", formData.content);
      updatedData.append("name", formData.name);
      updatedData.append("position", formData.position);

      // Append the avatar file only if a new file is selected
      if (formData.avatar instanceof File) {
        updatedData.append("avatar", formData.avatar);
      }

      // Send the update request to the API
      const response = await fetch(
        `/api/testimonials/${currentTestimonial.id}`,
        {
          method: "PUT",
          body: updatedData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update testimonial!");
      }

      const result = await response.json();

      // Update the testimonials list in the state
      const updatedTestimonials = testimonials.map((testimonial) =>
        testimonial.id === result.id
          ? { ...testimonial, ...result }
          : testimonial
      );

      setTestimonials(updatedTestimonials);

      // Clear form data and close dialog
      setCurrentTestimonial(null);
      setFormData({ content: "", name: "", position: "", avatar: undefined });
      setIsEditDialogOpen(false);

      // Show success toast
      toast.success("Testimonial Updated", {
        description: "The testimonial has been updated successfully.",
      });
    } catch (error) {
      console.error("Error:", error);

      // Show error toast
      toast.error("Error", {
        description: "Failed to update the testimonial. Please try again.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Testimonials Management
          </h1>
          <p className="text-muted-foreground">
            Add, edit, or remove client testimonials.
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Testimonial</DialogTitle>
              <DialogDescription>
                Add a new client testimonial to showcase on your website.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="content">Testimonial Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  // value={formData.text}
                  onChange={handleInputChange}
                  placeholder="What the client said about your work..."
                  rows={4}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Client Name</Label>
                  <Input
                    id="name"
                    name="name"
                    // value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., John Smith"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="position">Client Role/Company</Label>
                  <Input
                    id="position"
                    name="position"
                    // value={formData.position}
                    onChange={handleInputChange}
                    placeholder="e.g., Homeowner"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="avatar">Avatar URL</Label>
                <Input
                  id="avatar"
                  name="avatar"
                  type="file"
                  onChange={handleInputChange}
                  placeholder="/placeholder.svg?height=100&width=100"
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
              <Button onClick={handleAddTestimonial}>Add Testimonial</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Client Testimonials</CardTitle>
          <CardDescription>
            Manage testimonials from your satisfied clients.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.clientName}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mb-4 text-muted-foreground">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <h4 className="font-medium">
                          {testimonial.clientName}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.clientPosition}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2 justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEditDialog(testimonial)}
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteTestimonial(testimonial.id)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button
          onClick={() =>
            toast("Testimonials saved", {
              description: "Your testimonials have been updated.",
            })
          }
        >
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      {/* Edit Testimonial Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Testimonial</DialogTitle>
            <DialogDescription>
              Update this client testimonial.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-content">Testimonial Content</Label>
              <Textarea
                id="edit-content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={4}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Client Name</Label>
                <Input
                  id="edit-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-position">Client Role/Company</Label>
                <Input
                  id="edit-position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-avatar">Avatar URL</Label>
              <Input
                id="edit-avatar"
                name="avatar"
                type="file"
                // value={formData.avatar?.name}
                onChange={handleInputChange}
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
            <Button onClick={handleEditTestimonial}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
