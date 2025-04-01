"use client";

import type React from "react";

import { useEffect, useState } from "react";
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
import { toast } from "sonner";

import { Award } from "@/models/award";

export default function AwardsPage() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentAward, setCurrentAward] = useState<Award | null>(null);
  const [formData, setFormData] = useState<{
    title: string;
    year: number;
    organization: string;
  }>({ title: "", year: parseInt(""), organization: "" });

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const response = await fetch("/api/awards");
        if (!response.ok) throw new Error("Failed to fetch awards");
        const data = await response.json();
        setAwards(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAwards();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name == "year" ? parseInt(value) : value,
    }));
  };

  const handleAddAward = async () => {
    const response = await fetch("/api/awards", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    }).then(async (result) => await result.json());

    setAwards([...awards, response as Award]);
    setFormData({ title: "", year: parseInt(""), organization: "" });
    setIsAddDialogOpen(false);
    toast.success("Award added", {
      description: "The award has been added to your achievements.",
    });
  };

  const handleEditAward = async () => {
    if (!currentAward) return;
    const response = await fetch(`/api/awards/${currentAward.id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    }).then(async (result) => await result.json());

    const updatedAwards = awards.map((award) =>
      award.id === currentAward.id ? { ...award, ...response } : award
    );

    setAwards(updatedAwards);
    setCurrentAward(null);
    setIsEditDialogOpen(false);
    toast.success("Award updated", {
      description: "The award has been updated successfully.",
    });
  };

  const handleDeleteAward = async (id: string) => {
    await fetch(`/api/awards/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setAwards(awards.filter((award) => award.id !== id));
    toast.success("Award deleted", {
      description: "The award has been removed from your achievements.",
    });
  };

  const openEditDialog = (award: Award) => {
    setCurrentAward(award);
    setFormData({
      title: award.title,
      year: award.year,
      organization: award.organization,
    });
    setIsEditDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Awards & Recognition
          </h1>
          <p className="text-muted-foreground">
            Manage your studio's awards and achievements.
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Award
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Award</DialogTitle>
              <DialogDescription>
                Add a new award or recognition to showcase your achievements.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Award Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Design Excellence Award"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    name="year"
                    type="number"
                    value={formData.year.toString() ?? ""}
                    onChange={handleInputChange}
                    placeholder="e.g., 2023"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="e.g., Interior Design Association"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleAddAward}>Add Award</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Awards</CardTitle>
          <CardDescription>
            Showcase your achievements and recognition.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {awards.map((award) => (
              <Card key={award.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{award.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {award.organization} • {award.year}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(award)}
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteAward(award.id)}
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
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
            toast.success("Awards saved", {
              description: "Your awards have been updated.",
            })
          }
        >
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      {/* Edit Award Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Award</DialogTitle>
            <DialogDescription>
              Update this award or recognition.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-title">Award Title</Label>
              <Input
                id="edit-title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="edit-year">Year</Label>
                <Input
                  id="edit-year"
                  name="year"
                  value={formData.year.toString() ?? ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-organization">Organization</Label>
                <Input
                  id="edit-organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleEditAward}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
