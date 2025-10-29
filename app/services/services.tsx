"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users, 
  Mic, 
  Calendar, 
  Settings, 
  TrendingUp, 
  Building2,
  Lightbulb,
  Utensils,
  Briefcase,
  DollarSign,
  BarChart3,
  Handshake,
  Package,
  UserCheck,
  Globe,
  Target
} from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useTranslation } from "@/lib/translations"
import { servicesTranslations } from "@/lib/translations/services"
import AdSenseAd, { AdConfigs } from "@/components/adsense-ad"

export default function ServicesPage() {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const ts = (key: string) => (servicesTranslations[language] as any)?.[key] || key

  const services = [
    {
      title: ts("conferencesTitle"),
      description: ts("conferencesDesc"),
      details: ts("conferencesDetails"),
      icon: Users,
      slug: "conferences-summits",
      features: [
        "Strategic theme development and content curation",
        "Venue selection and technical setup",
        "Registration and attendee management",
        "Networking facilitation and breakout sessions",
        "Keynote and speaker coordination",
      ],
    },
    {
      title: ts("corporateConferencesTitle"),
      description: ts("corporateConferencesDesc"),
      details: ts("corporateConferencesDetails"),
      icon: Building2,
      slug: "corporate-conferences",
      features: [
        "Strategic corporate communications",
        "Executive meeting coordination",
        "Brand alignment and messaging",
        "Professional networking facilitation",
      ],
    },
    {
      title: ts("meetingsWorkshopsTitle"),
      description: ts("meetingsWorkshopsDesc"),
      details: ts("meetingsWorkshopsDetails"),
      icon: Settings,
      slug: "meetings-workshops",
      features: [
        "High stakes board meeting coordination",
        "Creative team-building workshops",
        "Technology and logistics management",
        "Catering and venue arrangements",
      ],
    },
    {
      title: ts("customRequestsTitle"),
      description: ts("customRequestsDesc"),
      details: ts("customRequestsDetails"),
      icon: Lightbulb,
      slug: "custom-requests",
      features: [
        "Unique concept development",
        "Ambitious project execution",
        "Personalized event design",
        "Creative problem solving",
      ],
    },
    {
      title: ts("galaDinnersAwardsTitle"),
      description: ts("galaDinnersAwardsDesc"),
      details: ts("galaDinnersAwardsDetails"),
      icon: Calendar,
      slug: "gala-dinners-awards",
      features: [
        "Elegant décor and seating arrangements",
        "Entertainment and program coordination",
        "Award presentation management",
        "Prestigious atmosphere creation",
      ],
    },
    {
      title: ts("galaDinnersTitle"),
      description: ts("galaDinnersDesc"),
      details: ts("galaDinnersDetails"),
      icon: Utensils,
      slug: "gala-dinners",
      features: [
        "Exquisite cuisine coordination",
        "Elegant ambiance creation",
        "Premium service management",
        "Achievement celebration focus",
      ],
    },

    {
      title: ts("eventManagementTitle"),
      description: ts("eventManagementDesc"),
      details: ts("eventManagementDetails"),
      icon: Briefcase,
      slug: "event-management",
      features: [
        "End-to-end event planning",
        "Vendor coordination and management",
        "Timeline and budget oversight",
        "Quality assurance and execution",
      ],
    },

    {
      title: ts("productLaunchesTitle"),
      description: ts("productLaunchesDesc"),
      details: ts("productLaunchesDetails"),
      icon: Package,
      slug: "Inauguration",
      features: [
        "Product positioning strategy",
        "Market entry coordination",
        "Launch event orchestration",
        "Media and PR management",
      ],
    },
    {
      title: ts("professionalStaffingTitle"),
      description: ts("professionalStaffingDesc"),
      details: ts("professionalStaffingDetails"),
      icon: UserCheck,
      slug: "professional-staffing",
      features: [
        "Expert talent sourcing",
        "Event staffing solutions",
        "Project team assembly",
        "Quality assurance protocols",
      ],
    },

  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-primary">{ts("servicesTitle")}</h1>
          <p className="text-xl text-muted-foreground">{ts("servicesSubtitle")}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group bg-card h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-semibold text-card-foreground mb-2 leading-tight">{service.title}</CardTitle>
                        <p className="text-primary font-medium text-sm">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-1">{service.details}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-card-foreground mb-3 text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-muted-foreground text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-2"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-primary text-sm font-medium">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    {service.slug && (
                      <div className="mt-6 pt-4 border-t border-border">
                        <Link href={`/services/${service.slug}`}>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                            Learn More About This Service
                          </Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">{ts("processTitle")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{ts("processSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{ts("processStep1Title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{ts("processStep1Desc")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{ts("processStep2Title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{ts("processStep2Desc")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{ts("processStep3Title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{ts("processStep3Desc")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{ts("processStep4Title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{ts("processStep4Desc")}</p>
            </div>
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
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">{ts("ctaTitle")}</h2>
          <p className="text-xl mb-8 text-blue-100">{ts("ctaSubtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-semibold">
                {ts("planEventButton")}
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                {ts("learnMoreButton")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
