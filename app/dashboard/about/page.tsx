"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Save, Plus } from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import { About } from "@/models/about";
import { v4 as uuidv4 } from "uuid";

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<About>({
    id: "",
    studio: "",
    year: "",
    description: "",
    mission: "",
    vision: "",
    quote: "",
    quoteAuthor: "",
    image: "", // This will store the image URL or path
    Expertise: [],
  });

  const [formData, setFormData] = useState<{
    id: string;
    studio: string;
    year: string;
    description: string;
    mission: string;
    vision: string;
    quote: string;
    quoteAuthor: string;
    image: File | undefined; // This will store the uploaded file
    expertise: { id: string; path: string }[];
  }>({
    id: "",
    studio: "",
    year: "",
    description: "",
    mission: "",
    vision: "",
    quote: "",
    quoteAuthor: "",
    image: undefined,
    expertise: [],
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null); // State to store image preview URL

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/about").then(
        async (result) => await result.json()
      );
      setFormData(response);
      setAboutData(response);

      // If there's an existing image URL, set it as the preview
      if (response.image) {
        setImagePreview(response.image);
      }
    };
    fetchData();
  }, []);

  const handleAboutChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        setFormData((prev) => ({ ...prev, [name]: file }));
        setAboutData((prev) => ({ ...prev, [name]: file }));

        // Create a preview URL for the uploaded image
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);
      }
    } else {
      setAboutData((prev) => ({ ...prev, [name]: value }));
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleExpertiseChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newExpertise = [...aboutData.Expertise];
    newExpertise[index].path = e.target.value;
    setAboutData((prev) => ({ ...prev, expertise: newExpertise }));
  };

  const addExpertise = () => {
    setAboutData((prev) => ({
      ...prev,
      Expertise: [...(prev.Expertise || []), { id: uuidv4(), path: "" }],
    }));
  };

  const removeExpertise = async (index: number, expertiseId: string) => {
    try {
      // Send a DELETE request to the backend
      const response = await fetch(`/api/about?expertiseId=${expertiseId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete expertise entry");
      }

      // Remove the expertise entry from the local state
      const newExpertise = [...aboutData.Expertise];
      newExpertise.splice(index, 1);
      setAboutData((prev) => ({ ...prev, Expertise: newExpertise }));

      toast.success("Expertise removed", {
        description: "The expertise entry has been deleted.",
      });
    } catch (error) {
      console.error("Error deleting expertise entry:", error);
      toast.error("Error", {
        description: "Failed to delete expertise entry. Please try again.",
      });
    }
  };

  const handleSaveAbout = async () => {
    try {
      const newFormData = new FormData();
      // Append text fields to FormData
      newFormData.append("studio", formData.studio);
      newFormData.append("year", formData.year);
      newFormData.append("description", formData.description);
      newFormData.append("mission", formData.mission);
      newFormData.append("vision", formData.vision);
      newFormData.append("quote", formData.quote);
      newFormData.append("quoteAuthor", formData.quoteAuthor);
      // Append the image file if provided
      // Handle the image field
      if (formData.image instanceof File) {
        // If a new file is uploaded, append it to FormData
        newFormData.append("image", formData.image);
      } else if (aboutData.image) {
        // If no new file is uploaded, append the existing image URL
        newFormData.append("image", aboutData.image);
      }

      // Append expertise data as a JSON string
      newFormData.append("expertise", JSON.stringify(aboutData.Expertise));

      const response = await fetch("/api/about", {
        method: "PUT",
        body: newFormData,
      });

      if (!response.ok) {
        throw new Error("Failed to update About section");
      }

      toast.success("Changes saved", {
        description: "Your about studio information has been updated.",
      });
    } catch (error) {
      console.error("Error saving About section:", error);
      toast.error("Error", {
        description: "Failed to save changes. Please try again.",
      });
    }
  };
  // const [teamMembers, setTeamMembers] = useState([
  //   {
  //     id: 1,
  //     name: "Sarah Johnson",
  //     role: "Principal Designer",
  //     bio: "With over 15 years of experience in interior design, Sarah leads our creative team with passion and vision.",
  //     image: "/placeholder.svg?height=400&width=400",
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Chen",
  //     role: "Senior Architect",
  //     bio: "Michael specializes in spatial planning and architectural details that transform ordinary spaces into extraordinary environments.",
  //     image: "/placeholder.svg?height=400&width=400",
  //   },
  //   {
  //     id: 3,
  //     name: "Emma Rodriguez",
  //     role: "Design Stylist",
  //     bio: "Emma has an exceptional eye for color, texture, and finishing touches that bring warmth and personality to every project.",
  //     image: "/placeholder.svg?height=400&width=400",
  //   },
  // ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Studio</h1>
        <p className="text-muted-foreground">
          Manage information about your design studio and team.
        </p>
      </div>

      <Tabs defaultValue="studio">
        {/* <TabsList className="mb-4">
          <TabsTrigger value="studio">Studio Information</TabsTrigger>
          <TabsTrigger value="team">Team Members</TabsTrigger>
        </TabsList> */}

        <TabsContent value="studio" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Studio Profile</CardTitle>
              <CardDescription>
                Update your studio's basic information and description.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="studio">Studio Name</Label>
                  <Input
                    id="studio"
                    name="studio"
                    value={aboutData.studio}
                    onChange={handleAboutChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Founded Year</Label>
                  <Input
                    id="year"
                    name="year"
                    value={aboutData.year}
                    onChange={handleAboutChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Studio Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={aboutData.description}
                  onChange={handleAboutChange}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mission">Mission Statement</Label>
                <Textarea
                  id="mission"
                  name="mission"
                  value={aboutData.mission}
                  onChange={handleAboutChange}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vision">Vision</Label>
                <Textarea
                  id="vision"
                  name="vision"
                  value={aboutData.vision}
                  onChange={handleAboutChange}
                  rows={3}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="quote">Featured Quote</Label>
                  <Input
                    id="quote"
                    name="quote"
                    value={aboutData.quote}
                    onChange={handleAboutChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quoteAuthor">Quote Author</Label>
                  <Input
                    id="quoteAuthor"
                    name="quoteAuthor"
                    value={aboutData.quoteAuthor}
                    onChange={handleAboutChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Profile Image</Label>
                <Input
                  id="image"
                  name="image"
                  type="file"
                  onChange={handleAboutChange}
                />
                <div className="mt-2 aspect-[4/3] max-w-[300px] overflow-hidden rounded-md border">
                  {/* Display the image preview */}
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="Studio profile"
                      width={300}
                      height={225}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src="/placeholder.svg"
                      alt="Placeholder"
                      width={300}
                      height={225}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Areas of Expertise</CardTitle>
              <CardDescription>
                Highlight your studio's specializations and skills.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {aboutData.Expertise?.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={item.path}
                    onChange={(e) => handleExpertiseChange(e, index)}
                    placeholder="e.g., Residential Design"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeExpertise(index, item.id)}
                    className="shrink-0"
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button variant="outline" onClick={addExpertise}>
                Add Expertise
              </Button>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSaveAbout}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </TabsContent>

        {/* <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>
                Manage your design team profiles.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member) => (
                  <Card key={member.id} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {member.bio}
                      </p>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-destructive hover:bg-destructive/10"
                        >
                          Remove
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="flex h-full flex-col items-center justify-center p-6">
                  <div className="mb-4 rounded-full bg-muted p-6">
                    <Plus className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 font-medium">Add Team Member</h3>
                  <p className="mb-4 text-center text-sm text-muted-foreground">
                    Add a new member to your design team
                  </p>
                  <Button>Add Member</Button>
                </Card>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button
              onClick={() =>
                toast({
                  title: "Team updated",
                  description: "Your team information has been saved.",
                })
              }
            >
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  );
}
