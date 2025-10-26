"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Star, MapPin, Target, Zap, Shield, Award, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useTranslation } from "@/lib/translations"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const isRTL = language === 'ar' || language === 'fa';

  return (
    <div className="min-h-screen bg-background" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("aboutTitle")}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("aboutSubtitle")}</p>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground mb-8" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
              {t("aboutContent1")}
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground mb-8" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
              {t("aboutContent2")}
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
              {t("aboutContent3")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("missionTitle")}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
              {t("missionSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-4" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("planningTitle")}</h3>
                <p className="text-sm sm:text-base text-muted-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                  {t("planningDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-4" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("engagementTitle")}</h3>
                <p className="text-sm sm:text-base text-muted-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                  {t("engagementDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-4" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("creativityTitle")}</h3>
                <p className="text-sm sm:text-base text-muted-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                  {t("creativityDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-4" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("venueTitle")}</h3>
                <p className="text-sm sm:text-base text-muted-foreground" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                  {t("venueDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("visionTitle")}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
              {t("visionSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("impactTitle")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                {t("impactDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
               <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />

              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("connectionsTitle")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                {t("connectionsDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("executionTitle")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                {t("executionDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("valuesTitle")}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
              {t("valuesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="group text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-lg">
                  <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("integrityTitle")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                {t("integrityDesc")}
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-lg">
                  <Award className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("expertiseTitle")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                {t("expertiseDesc")}
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-lg">
                  <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>{t("partnershipTitle")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" style={{ fontFeatureSettings: isRTL ? '"liga" off' : 'normal' }}>
                {t("partnershipDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


