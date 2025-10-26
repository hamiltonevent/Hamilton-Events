"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Utensils, Music, Camera, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useTranslation } from "@/lib/translations"
import { galaDinnersTranslations } from "@/lib/translations/gala-dinners"
import AdSenseAd, { AdConfigs } from "@/components/adsense-ad"

export default function GalaDinnersPage() {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const tc = (key: string) => (galaDinnersTranslations[language]as any)?.[key] || key

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
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <Calendar className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-foreground">{tc("pageTitle")}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{tc("pageSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{tc("whatWeDo")}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{tc("whatWeDoDesc")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{tc("whatWeDoDesc2")}</p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">{tc("planningIncludes")}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{tc('feature1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{tc('feature2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{tc('feature3')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{tc('feature4')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{tc('feature5')}</span>
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
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{tc("whyChooseTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{tc("whyChooseSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{tc("whyChoose1Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tc("whyChoose1Desc")}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Music className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{tc("whyChoose2Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tc("whyChoose2Desc")}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{tc("whyChoose3Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tc("whyChoose3Desc")}</p>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">{tc("ctaTitle")}</h2>
          <p className="text-xl mb-8 opacity-90">{tc("ctaSubtitle")}</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">{tc("ctaButton")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
