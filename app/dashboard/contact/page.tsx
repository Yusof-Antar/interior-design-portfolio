"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Calendar, Mail, MapPin, Phone, Save } from "lucide-react";

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

import { ContactInfo } from "@/models/contact-info";

export default function ContactPage() {
  const [contactData, setContactData] = useState<ContactInfo>({
    address: "",
    email: "",
    phone: "",
    officeHours: "",
    mapEmbedded: "https://www.google.com/maps/embed?pb=...",
  });

  const [socialLinks, setSocialLinks] = useState({
    instagram: "",
    pinterest: "",
    linkedin: "",
    whatsapp: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/contact-info").then(
        async (result) => await result.json()
      );
      const socialResponse = await fetch("/api/social-media").then(
        async (result) => await result.json()
      );
      setContactData(response);
      setSocialLinks(socialResponse);
    };

    fetchData();
  }, []);

  const [formSettings, setFormSettings] = useState({
    emailRecipient: "inquiries@designstudio.com",
    emailSubject: "New Website Inquiry",
    confirmationMessage: "Thank you for your inquiry! We'll be in touch soon.",
    showBudgetField: true,
    showProjectTypeField: true,
  });

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialLinks((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSettingsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormSettings((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSaveContact = async () => {
    await fetch("/api/contact-info", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });
    await fetch("/api/social-media", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(socialLinks),
    });

    toast.success("Contact information saved", {
      description: "Your contact information has been updated.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Contact Information
        </h1>
        <p className="text-muted-foreground">
          Manage your studio's contact details and form settings.
        </p>
      </div>

      <Tabs defaultValue="contact">
        <TabsList className="mb-4">
          <TabsTrigger value="contact">Contact Details</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          {/* <TabsTrigger value="form">Form Settings</TabsTrigger> */}
        </TabsList>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Update your studio's contact details displayed on your website.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                  <Label htmlFor="address">Studio Address</Label>
                </div>
                <Textarea
                  id="address"
                  name="address"
                  value={contactData.address}
                  onChange={handleContactChange}
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-start">
                  <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                  <Label htmlFor="email">Email Address</Label>
                </div>
                <Input
                  id="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleContactChange}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-start">
                  <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                  <Label htmlFor="phone">Phone Number</Label>
                </div>
                <Input
                  id="phone"
                  name="phone"
                  value={contactData.phone}
                  onChange={handleContactChange}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-start">
                  <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                  <Label htmlFor="officeHours">Office Hours</Label>
                </div>
                <Textarea
                  id="officeHours"
                  name="officeHours"
                  value={contactData.officeHours}
                  onChange={handleContactChange}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mapEmbedded">Google Maps Embed URL</Label>
                <Input
                  id="mapEmbedded"
                  name="mapEmbedded"
                  value={contactData.mapEmbedded}
                  onChange={handleContactChange}
                />
                <div className="mt-2 aspect-video w-full overflow-hidden rounded-md border">
                  <iframe
                    src={contactData.mapEmbedded}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>
                Update your studio's social media profiles.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  name="instagram"
                  value={socialLinks.instagram}
                  onChange={handleSocialChange}
                  placeholder="https://instagram.com/yourstudio"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pinterest">Pinterest</Label>
                <Input
                  id="pinterest"
                  name="pinterest"
                  value={socialLinks.pinterest}
                  onChange={handleSocialChange}
                  placeholder="https://pinterest.com/yourstudio"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  value={socialLinks.linkedin}
                  onChange={handleSocialChange}
                  placeholder="https://linkedin.com/company/yourstudio"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">Whatsapp</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  value={socialLinks.whatsapp}
                  onChange={handleSocialChange}
                  placeholder="https://houzz.com/pro/yourstudio"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="form" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form Settings</CardTitle>
              <CardDescription>
                Configure your website's contact form behavior.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="emailRecipient">Form Submission Email</Label>
                <Input
                  id="emailRecipient"
                  name="emailRecipient"
                  value={formSettings.emailRecipient}
                  onChange={handleFormSettingsChange}
                  placeholder="Where form submissions should be sent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emailSubject">Email Subject Line</Label>
                <Input
                  id="emailSubject"
                  name="emailSubject"
                  value={formSettings.emailSubject}
                  onChange={handleFormSettingsChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmationMessage">
                  Confirmation Message
                </Label>
                <Textarea
                  id="confirmationMessage"
                  name="confirmationMessage"
                  value={formSettings.confirmationMessage}
                  onChange={handleFormSettingsChange}
                  rows={2}
                  placeholder="Message shown after form submission"
                />
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-medium">Form Fields</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="showBudgetField"
                    name="showBudgetField"
                    checked={formSettings.showBudgetField}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label
                    htmlFor="showBudgetField"
                    className="text-sm font-normal"
                  >
                    Show budget range field
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="showProjectTypeField"
                    name="showProjectTypeField"
                    checked={formSettings.showProjectTypeField}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label
                    htmlFor="showProjectTypeField"
                    className="text-sm font-normal"
                  >
                    Show project type field
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button onClick={handleSaveContact}>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
