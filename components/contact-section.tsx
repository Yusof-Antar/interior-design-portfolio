"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    budget: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Thank you for your inquiry! We'll be in touch soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
      budget: "",
    })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Create Something Beautiful Together
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ready to transform your space? Get in touch with us to schedule a consultation or discuss your project.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-2xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Reach out to us through any of the following channels or fill out the
                  form.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Studio Location</h4>
                    <p className="text-muted-foreground">123 Design Avenue, New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-muted-foreground">hello@designstudio.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="mr-4 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Office Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
                    <p className="text-muted-foreground">Saturday: By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="mb-4 text-2xl font-semibold">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  {["Instagram", "Pinterest", "LinkedIn", "Houzz"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type</Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => handleSelectChange("projectType", value)}
                        >
                          <SelectTrigger id="projectType">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="hospitality">Hospitality</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Budget Range</Label>
                      <RadioGroup
                        value={formData.budget}
                        onValueChange={(value) => handleSelectChange("budget", value)}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="under-10k" id="under-10k" />
                          <Label htmlFor="under-10k">Under $10k</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="10k-25k" id="10k-25k" />
                          <Label htmlFor="10k-25k">$10k - $25k</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="25k-50k" id="25k-50k" />
                          <Label htmlFor="25k-50k">$25k - $50k</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="50k-plus" id="50k-plus" />
                          <Label htmlFor="50k-plus">$50k+</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project"
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="underline underline-offset-2">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

