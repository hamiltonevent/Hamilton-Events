import type { Metadata } from "next"
import { translations } from "@/lib/translations"
import type { Language } from "@/components/language-context"

export function generatePageMetadata(language: Language = 'en'): Metadata {
  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
    keywords: t('seoKeywords'),
    authors: [{ name: "Hamilton Events" }],
    creator: "Hamilton Events",
    publisher: "Hamilton Events",
    robots: "index, follow",
    openGraph: {
      title: t('seoTitle'),
      description: t('seoDescription'),
      type: "website",
      locale: getOpenGraphLocale(language),
      siteName: "Hamilton Events",
    },
    twitter: {
      card: "summary_large_image",
      title: t('seoTitle'),
      description: t('seoDescription'),
    },
    alternates: {
      languages: {
        'en': '/',
        'ar': '/?lang=ar',
        'nl': '/?lang=nl',
        'fa': '/?lang=fa',
        'fr': '/?lang=fr',
        'am': '/?lang=am',
        'it': '/?lang=it',
        'la': '/?lang=la',
        'ru': '/?lang=ru',
        'sv': '/?lang=sv',
        'zh': '/?lang=zh',
      }
    }
  }
}

function getOpenGraphLocale(language: Language): string {
  const localeMap: Record<Language, string> = {
    'en': 'en_US',
    'ar': 'ar_SA',
    'nl': 'nl_NL',
    'fa': 'fa_IR',
    'fr': 'fr_FR',
    'am': 'am_ET',
    'it': 'it_IT',
    'la': 'la_VA',
    'ru': 'ru_RU',
    'sv': 'sv_SE',
    'zh': 'zh_CN',
  }
  
  return localeMap[language] || 'en_US'
}