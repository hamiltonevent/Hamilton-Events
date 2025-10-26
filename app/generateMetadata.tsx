import type { Metadata } from "next"
import { generatePageMetadata } from "./metadata"
import type { Language } from "@/components/language-context"

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const lang = searchParams.lang as Language || 'en'
  
  // Validate language parameter
  const validLanguages: Language[] = ['en', 'ar', 'nl', 'fa', 'fr', 'am', 'it', 'la', 'ru', 'sv', 'zh']
  const language = validLanguages.includes(lang) ? lang : 'en'
  
  return generatePageMetadata(language)
}