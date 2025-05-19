"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  Copy,
  Eye,
  Inbox,
  Mail,
  MapPin,
  Phone,
  Save,
} from "lucide-react";

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

interface FormSubmission {
  id: string;
  email: string;
  subject: string;
  body: string;
  type: string;
  budget: string;
  createdAt: string;
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
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

  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [contactResponse, socialResponse, submissionsResponse] =
          await Promise.all([
            fetch("/api/contact-info").then((res) => res.json()),
            fetch("/api/social-media").then((res) => res.json()),
            fetch("/api/contact").then((res) => res.json()),
          ]);

        setContactData(contactResponse);
        setSocialLinks(socialResponse);
        setFormSubmissions(submissionsResponse);
      } catch (error) {
        toast.error("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

  const handleSaveContact = async () => {
    setLoading(true);
    try {
      await Promise.all([
        fetch("/api/contact-info", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactData),
        }),
        fetch("/api/social-media", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(socialLinks),
        }),
      ]);
      toast.success("Contact information saved", {
        description: "Your contact information has been updated.",
      });
    } catch (error) {
      toast.error("Failed to save data");
    } finally {
      setLoading(false);
    }
  };

  const formatBudget = (budget: string) => {
    return budget
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
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
          <TabsTrigger value="submissions">Form Submissions</TabsTrigger>
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
                <Label htmlFor="address">Studio Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={contactData.address}
                  onChange={handleContactChange}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleContactChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={contactData.phone}
                  onChange={handleContactChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="officeHours">Office Hours</Label>
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
              {Object.entries(socialLinks).map(([key, value]) => (
                <div className="space-y-2" key={key}>
                  <Label htmlFor={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Label>
                  <Input
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleSocialChange}
                    placeholder={`https://${key}.com/yourstudio`}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="submissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form Submissions</CardTitle>
              <CardDescription>
                Review all submissions from your contact form with detailed
                information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        #
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Budget
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {formSubmissions.length > 0 ? (
                      formSubmissions.map((submission, index) => (
                        <tr
                          key={submission.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 mr-2 text-gray-400" />
                              {submission.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 max-w-xs truncate">
                            {submission.subject}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                submission.type === "commercial"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {submission.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatBudget(submission.budget)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(
                              submission.createdAt
                            ).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-primary hover:text-primary/80"
                              onClick={() => {
                                navigator.clipboard.writeText(submission.email);
                                toast.info("Email copied to clipboard");
                              }}
                            >
                              <Copy className="h-4 w-4 mr-1.5" />
                              Copy
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => {
                                toast.message(submission.subject, {
                                  description: submission.body,
                                });
                              }}
                            >
                              <Eye className="h-4 w-4 mr-1.5" />
                              View
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="px-6 py-8 text-center">
                          <div className="flex flex-col items-center justify-center space-y-2 text-gray-500">
                            <Inbox className="h-8 w-8" />
                            <span>No form submissions yet</span>
                            <p className="text-sm text-gray-400">
                              All contact form submissions will appear here
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button onClick={handleSaveContact} disabled={loading}>
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" /> Save
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
