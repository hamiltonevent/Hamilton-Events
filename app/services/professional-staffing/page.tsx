"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, UserCheck, Clock, Award, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useTranslation } from "@/lib/translations"
import { professionalStaffingTranslations } from "@/lib/translations/professional-staffing"
import AdSenseAd, { AdConfigs } from "@/components/adsense-ad"

export default function ProfessionalStaffingPage() {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const tc = (key: string) => (professionalStaffingTranslations[language] as any)?.[key] || key
  
  const isRTL = language === 'ar' || language === 'fa';

  return (
    <div className="min-h-screen bg-background" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {tc("backToServices")}
          </Link>
          <div className="text-center" style={{ textAlign: isRTL ? 'right' : 'left' }}>
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("pageTitle")}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("pageSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("whatWeDo")}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{tc("whatWeDoDesc")}</p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">{tc("planningIncludes")}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{tc("feature1")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{tc("feature2")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{tc("feature3")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{tc("feature4")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{tc("feature5")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{tc("whyChoose")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{tc("expertStaff")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tc("expertStaffDesc")}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{tc("flexibleScheduling")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tc("flexibleSchedulingDesc")}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{tc("qualityAssurance")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tc("qualityAssuranceDesc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AdSense Banner Ad */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSenseAd {...AdConfigs.homepageBanner} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-6">{tc("ctaTitle")}</h2>
          <p className="text-xl mb-8">{tc("ctaSubtitle")}</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-semibold">
              {tc("planConference")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
