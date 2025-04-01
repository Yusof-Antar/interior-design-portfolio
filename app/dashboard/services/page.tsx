"use client";

import type React from "react";

import { useEffect, useState } from "react";
import {
  Edit,
  LayoutListIcon as LayoutPlaneLine,
  Palette,
  Plus,
  Ruler,
  Save,
  Sofa,
  Sparkles,
  Store,
  Trash,
} from "lucide-react";

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
import { Service } from "@/models/service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// utils/fontAwesomeUtils.ts
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add all icons to the library
library.add(fas, far, fab);

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    icon: "",
    description: "",
  });

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch("/api/services").then(
        async (result) => await result.json()
      );
      setServices(response);
    };
    fetchServices();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddService = async () => {
    const newService = await fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(async (result) => await result.json());

    setServices([...services, newService]);
    setFormData({ title: "", icon: "", description: "" });
    setIsAddDialogOpen(false);
    toast.success("Service added", {
      description: "The service has been added to your offerings.",
    });
  };

  const handleEditService = async () => {
    if (!currentService) return;

    const response = await fetch(`/api/services/${currentService.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(async (result) => await result.json());

    const updatedServices = services.map((service) =>
      service.id === response.id ? { ...service, ...response } : service
    );

    setServices(updatedServices);
    setCurrentService(null);
    setIsEditDialogOpen(false);
    toast.success("Service updated", {
      description: "The service has been updated successfully.",
    });
  };

  const handleDeleteService = async (id: string) => {
    await fetch(`/api/services/${id}`, { method: "DELETE" });

    setServices(services.filter((service) => service.id !== id));
    toast.success("Service deleted", {
      description: "The service has been removed from your offerings.",
    });
  };

  const openEditDialog = (service: Service) => {
    setCurrentService(service);
    setFormData({
      title: service.title,
      icon: service.icon,
      description: service.description,
    });
    setIsEditDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Services Management
          </h1>
          <p className="text-muted-foreground">
            Add, edit, or remove services that your studio offers.
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
              <DialogDescription>
                Fill in the details for the new service you offer.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Service Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Space Planning"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="icon">Icon</Label>
                <Input
                  id="icon"
                  name="icon"
                  value={formData.icon}
                  onChange={handleInputChange}
                  placeholder="e.g., Space Planning"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the service you offer..."
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
              <Button onClick={handleAddService}>Add Service</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Services</CardTitle>
          <CardDescription>
            Manage the services displayed on your website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <FontAwesomeIcon
                      icon={service.icon as IconProp}
                      size="2x"
                    />
                  </div>
                  <h3 className="mb-2 font-semibold">{service.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEditDialog(service)}
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteService(service.id)}
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
            toast.success("Services saved", {
              description: "Your services have been updated.",
            })
          }
        >
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      {/* Edit Service Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
            <DialogDescription>
              Update the details for this service.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-title">Service Title</Label>
              <Input
                id="edit-title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-icon">Icon</Label>
              <Input
                id="edit-icon"
                name="icon"
                value={formData.icon}
                onChange={handleInputChange}
                placeholder="e.g., Space Planning"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
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
            <Button onClick={handleEditService}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
