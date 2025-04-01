"use client";
import type React from "react";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Trash, Edit } from "lucide-react";
import { PortfolioCategory } from "@/models/portfolio-category";

export default function CategoriesDashboard() {
  const [categories, setCategories] = useState<PortfolioCategory[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentCategory, setCurrentCategory] =
    useState<PortfolioCategory | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    isActive: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/portfolio-category").then(
        async (result) => await result.json()
      );
      setCategories(response);
    };

    fetchData();
  }, []);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Add a new category
  const handleAddCategory = async () => {
    const newCategory = await fetch("/api/portfolio-category", {
      method: "POST",
      headers: { "Content-Type": "accept/json" },
      body: JSON.stringify(formData),
    }).then(async (result) => await result.json());
    setCategories([...categories, newCategory]);
    setFormData({ title: "", isActive: true });
    setIsAddDialogOpen(false);
    toast.success("Category added", {
      description: "The category has been added successfully.",
    });
  };

  // Update an existing category
  const handleEditCategory = async () => {
    if (!currentCategory) return;

    const response = await fetch(
      `/api/portfolio-category/${currentCategory.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    ).then(async (result) => await result.json());
    const updatedCategories = categories.map((category) =>
      category.id === currentCategory.id
        ? { ...category, ...response }
        : category
    );
    setCategories(updatedCategories);
    setCurrentCategory(null);
    setIsEditDialogOpen(false);
    toast.success("Category updated", {
      description: "The category has been updated successfully.",
    });
  };

  // Delete a category
  const handleDeleteCategory = async (id: string) => {
    await fetch(`/api/portfolio-category/${id}`, { method: "DELETE" });
    setCategories(categories.filter((category) => category.id !== id));
    toast.success("Category deleted", {
      description: "The category has been removed successfully.",
    });
  };

  // Open edit dialog and populate form data
  const openEditDialog = (category: PortfolioCategory) => {
    setCurrentCategory(category);
    setFormData({
      title: category.title,
      isActive: category.isActive,
    });
    setIsEditDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Category Management
          </h1>
          <p className="text-muted-foreground">
            Add, edit, activate, or deactivate categories for your portfolio.
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription>
                Fill in the details for your new category.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Category Name</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter category name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="isActive">Status</Label>
                <div className="flex items-center space-x-2">
                  <input
                    id="isActive"
                    name="isActive"
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label htmlFor="isActive" className="text-sm">
                    Active
                  </Label>
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
              <Button onClick={handleAddCategory}>Add Category</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Categories Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.title}</TableCell>
              <TableCell>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    category.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {category.isActive ? "Active" : "Inactive"}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEditDialog(category)}
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteCategory(category.id)}
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit Category Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>
              Update the details for this category.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-title">Category Name</Label>
              <Input
                id="edit-title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-isActive">Status</Label>
              <div className="flex items-center space-x-2">
                <input
                  id="edit-isActive"
                  name="isActive"
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor="edit-isActive" className="text-sm">
                  Active
                </Label>
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
            <Button onClick={handleEditCategory}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
