"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Clock, Linkedin, Instagram } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useTranslation } from "@/lib/translations"
import { contactTranslations } from "@/lib/translations/contact"

export default function ContactPage() {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const tc = (key: string) => (contactTranslations[language] as any)?.[key] || key

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-primary">{tc("contactTitle")}</h1>
          <p className="text-xl text-gray-600">{tc("contactSubtitle")}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-card-foreground">{tc("getInTouch")}</CardTitle>
                  <p className="text-muted-foreground">{tc("getInTouchDesc")}</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                        {tc("fullName")}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                        {tc("emailAddress")}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                        {tc("phoneNumber")}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                        {tc("message")}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us about your event interests and goals..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? tc("sending") || "Sending..." : tc("sendMessage")}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-green-800 text-sm">
                          {tc("messageSent") || "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours."}
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-800 text-sm">
                          {tc("messageError") || "Sorry, there was an error sending your message. Please try again or contact us directly."}
                        </p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-card-foreground">{tc("contactInformation")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">{tc("location")}</h3>
                      <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">{tc("email")}</h3>
                      <div className="text-muted-foreground">
                        <p>contact@hamiltonevents.net</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">{tc("phone")}</h3>
                      <p className="text-muted-foreground">+251935483093</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-card-foreground">{tc("followUs")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/company/hamilton-events-plc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/hamiltonevents.co/?igsh=cWtjbDA3c2t1aWF0#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{tc("followUsDesc")}</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {tc("officeHours")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>{tc("officeHoursDay1")}</span>
                      <span>{tc("officeHoursTime1")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{tc("officeHoursDay2")}</span>
                      <span>{tc("officeHoursTime2")}</span>
                    </div>
                  </div>
                  <p className="text-sm text-blue-100 mt-4">{tc("officeHoursTimezone")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
