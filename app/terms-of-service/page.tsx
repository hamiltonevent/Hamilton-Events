"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-context"
import { useTranslation } from "@/lib/translations"
import { termsOfServiceTranslations } from "@/lib/translations/terms-of-service"
import AdSenseAd, { AdConfigs } from "@/components/adsense-ad"

export default function TermsOfServicePage() {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const tc = (key: string) => (termsOfServiceTranslations[language] as any)?.[key] || key
  const isRTL = language === 'ar'

  return (
    <div 
      className="min-h-screen bg-background text-foreground" 
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {tc("backToHome")}
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold text-primary font-serif">
                {tc("pageTitle")}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                {tc("lastUpdated")}
              </p>
            </CardHeader>
            
            <CardContent className="prose prose-slate dark:prose-invert max-w-none space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("introduction")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tc("introText")}
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("acceptance")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tc("acceptanceText")}
                </p>
              </section>

              {/* Our Services */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("services")}</h2>
                <p className="text-muted-foreground mb-3">{tc("servicesText")}</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {tc("servicesList").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* User Responsibilities */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("userResponsibilities")}</h2>
                <p className="text-muted-foreground mb-3">{tc("userResponsibilitiesText")}</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {tc("userResponsibilitiesList").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Booking and Payment */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("bookingPayment")}</h2>
                <p className="text-muted-foreground mb-3">{tc("bookingPaymentText")}</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {tc("bookingPaymentList").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Cancellation Policy */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("cancellation")}</h2>
                <p className="text-muted-foreground mb-3">{tc("cancellationText")}</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {tc("cancellationList").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("intellectualProperty")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tc("intellectualPropertyText")}
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("liability")}</h2>
                <p className="text-muted-foreground mb-3">{tc("liabilityText")}</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {tc("liabilityList").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Privacy and Data Protection */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("privacy")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tc("privacyText")}
                </p>
              </section>

              {/* Modifications to Terms */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("modifications")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tc("modificationsText")}
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("governing")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tc("governingText")}
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("contact")}</h2>
                <p className="text-muted-foreground mb-3">{tc("contactText")}</p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <pre className="text-sm text-muted-foreground whitespace-pre-line">
                    {tc("contactInfo")}
                  </pre>
                </div>
              </section>

              {/* Severability */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("severability")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tc("severabilityText")}
                </p>
              </section>

              {/* Entire Agreement */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary font-serif">{tc("entireAgreement")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tc("entireAgreementText")}
                </p>
              </section>
            </CardContent>
          </Card>

          {/* AdSense Banner */}
          <section className="mt-12">
            <AdSenseAd adSlot="banner" />
          </section>
        </div>
      </div>
    </div>
  )
}