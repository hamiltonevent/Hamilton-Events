"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-context"
import { useTranslation } from "@/lib/translations"
import { privacyPolicyTranslations } from "@/lib/translations/privacy-policy"
import AdSenseAd, { AdConfigs } from "@/components/adsense-ad"

export default function PrivacyPolicyPage() {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const tc = (key: string) => (privacyPolicyTranslations[language] as any)?.[key] || key
  const isRTL = language === 'ar' || language === 'fa';

  return (
    <div className="min-h-screen bg-background" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {tc("backToHome")}
              </Button>
            </Link>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("pageTitle")}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("lastUpdated")}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
            <CardContent className="p-8 space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("introduction")}</h2>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                  {tc("introText")}
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("informationWeCollect")}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("personalInfo")}</h3>
                    <p className="text-muted-foreground mb-3" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("personalInfoText")}</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      {tc("personalInfoList").map((item: string, index: number) => (
                        <li key={index} style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{item}</li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground mt-4 mb-3" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("personalInfoTypes")}</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      {tc("personalInfoTypesList").map((item: string, index: number) => (
                        <li key={index} style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("automaticInfo")}</h3>
                    <p className="text-muted-foreground mb-3" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("automaticInfoText")}</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      {tc("automaticInfoList").map((item: string, index: number) => (
                        <li key={index} style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("howWeUse")}</h2>
                <p className="text-muted-foreground mb-3" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("howWeUseText")}</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {tc("howWeUseList").map((item: string, index: number) => (
                    <li key={index} style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("informationSharing")}</h2>
                <p className="text-muted-foreground mb-3" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("informationSharingText")}</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {tc("informationSharingList").map((item: string, index: number) => (
                    <li key={index} style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Google AdSense */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("googleAdsense")}</h2>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                  {tc("googleAdsenseText")}
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("cookies")}</h2>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                  {tc("cookiesText")}
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("dataSecurity")}</h2>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                  {tc("dataSecurityText")}
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("yourRights")}</h2>
                <p className="text-muted-foreground mb-3" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("yourRightsText")}</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {tc("yourRightsList").map((item: string, index: number) => (
                    <li key={index} style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("contact")}</h2>
                <p className="text-muted-foreground mb-3" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("contactText")}</p>
                <div className="bg-secondary p-4 rounded-lg">
                  <pre className="text-sm text-muted-foreground whitespace-pre-line" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                    {tc("contactInfo")}
                  </pre>
                </div>
              </section>

              {/* Changes to Policy */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("changes")}</h2>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                  {tc("changesText")}
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AdSense Banner Ad */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSenseAd {...AdConfigs.inContent} />
        </div>
      </section>
    </div>
  )
}