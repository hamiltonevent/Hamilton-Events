import type { Metadata } from "next"
import { generatePageMetadata } from "./metadata"
import type { Language } from "@/components/language-context"
import HomePage from "./HomePage"

export const dynamic = 'force-static'

interface PageProps {
  params: Promise<{ [key: string]: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams
  const lang = resolvedSearchParams.lang as Language || 'en'
  
  // Validate language parameter
  const validLanguages: Language[] = ['en', 'ar', 'nl', 'fa', 'fr', 'am', 'it', 'la', 'ru', 'sv', 'zh']
  const language = validLanguages.includes(lang) ? lang : 'en'
  
  return generatePageMetadata(language)
}

export default function Page(props: PageProps) {
  return <HomePage />
}