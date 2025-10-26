"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mic, Users2, Rocket, Handshake, Palette, CalendarCheck, HeartHandshake, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useTranslation } from "@/lib/translations"
import AdSenseAd, { AdConfigs } from "@/components/adsense-ad"

export default function HomePage() {
  const { language } = useLanguage()
  const t = useTranslation(language)

  const isRTL = language === 'ar' || language === 'fa';
  
  return (
    <div className="min-h-screen" style={{ direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left' }}>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250829_2104_Elegant%20Outdoor%20Gathering_remix_01k3vfxkb4e3c9ebjv8ct3nr7m%20%281%29-NzVtzfeVSF8ftjbxjmTdsB4SmHUZPv.png')`,
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white"
              style={{ fontFeatureSettings: isRTL ? "'calt', 'clig', 'kern'" : "normal" }}>
            {t("heroTitle")}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed text-white max-w-3xl mx-auto"
             style={{ fontFeatureSettings: isRTL ? "'calt', 'clig', 'kern'" : "normal" }}>
            {t("heroSubtitle")}
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
              {t("planEventButton")}
            </Button>
          </Link>
        </div>
      </section>

      {/* Event Opportunities */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4"
                style={{ fontFeatureSettings: isRTL ? "'calt', 'clig', 'kern'" : "normal" }}>
              {t("eventOpportunitiesTitle")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
               style={{ fontFeatureSettings: isRTL ? "'calt', 'clig', 'kern'" : "normal" }}>
              {t("eventOpportunitiesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center bg-card rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2">{t("conferencesTitle")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t("conferencesDesc")}</p>
            </div>

            <div className="text-center bg-card rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2">{t("corporateMeetingsTitle")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t("corporateMeetingsDesc")}</p>
            </div>

            <div className="text-center bg-card rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2">{t("productLaunchesTitle")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t("productLaunchesDesc")}</p>
            </div>

            <div className="text-center bg-card rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2">{t("networkingTitle")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t("networkingDesc")}</p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                {t("exploreServicesButton")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Banner Ad */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSenseAd {...AdConfigs.homepageBanner} />
        </div>
      </section>

      {/* Why Choose Hamilton Events Section */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t("whyChooseTitle")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("whyChooseSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">{t("tailoredTitle")}</h3>
              <p className="text-muted-foreground">
                {t("tailoredDesc")}
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <CalendarCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">{t("flawlessTitle")}</h3>
              <p className="text-muted-foreground">{t("flawlessDesc")}</p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <HeartHandshake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">{t("trustedTitle")}</h3>
              <p className="text-muted-foreground">
                {t("trustedDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Our Approach */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t("approachTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t("approachDesc")}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">{t("approachPoint1")}</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">{t("approachPoint2")}</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">{t("approachPoint3")}</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">{t("approachPoint4")}</p>
              </div>
            </div>
              
              {/* <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Discover Our Process
                </Button>
              </Link> */}
            </div>
            
            {/* Image */}
            <div className="order-first lg:order-last">
              <div className="relative">
                {/* <div className="absolute -inset-4 bg-primary/10 rounded-2xl "></div> */}
<img 
  src="/ii.jpg" 
  alt="Event planning team discussing plans" 
  className="relative rounded-2xl shadow-lg w-full h-auto"
/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("howWeWorkTitle")}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("howWeWorkSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("step1Title")}</h3>
              <p className="text-muted-foreground">{t("step1Desc")}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("step2Title")}</h3>
              <p className="text-muted-foreground">{t("step2Desc")}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("step3Title")}</h3>
              <p className="text-muted-foreground">{t("step3Desc")}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("step4Title")}</h3>
              <p className="text-muted-foreground">{t("step4Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            {t("ctaTitle")}
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-semibold w-full sm:w-auto">
                {t("planTodayButton")}
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto bg-transparent"
              >
                {t("learnAboutButton")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Footer Ad */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSenseAd {...AdConfigs.footer} />
        </div>
      </section>
    </div>
  )
}