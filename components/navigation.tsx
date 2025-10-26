
"use client"
import React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-context"
import Image from "next/image"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/translations"

const getNavigation = (t: (key: string) => string) => [
  { name: t("home"), href: "/" },
  { name: t("services"), href: "/services" },
  { name: t("about"), href: "/about" },
  { name: t("contact"), href: "/contact" },
];

const languages: Array<{ code: string; label: string }> = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "nl", label: "Nederlands" },
  { code: "fa", label: "فارسی" },
  { code: "fr", label: "Français" },
  { code: "am", label: "አማርኛ" },
  { code: "it", label: "Italiano" },
  { code: "la", label: "Latina" },
  { code: "ru", label: "Русский" },
  { code: "sv", label: "Svenska" },
  { code: "zh", label: "中文" },
];

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const t = useTranslation(language)
  const navigation = getNavigation(t)

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className={cn("shadow-sm border-b", mounted && theme === "dark" ? "bg-black" : "bg-white")}> 
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
              <Image
                src={mounted && theme === "dark" ? "/Logo_dark_mode.png" : "/Logo_light_mode.png"}
                alt="Hamilton Logo"
                width={40}
                height={40}
                className="transition-all duration-300 hover:scale-110"
              />
            </Link>
            <div className="hidden md:flex ml-10 items-baseline space-x-4 lg:space-x-8 flex-1 min-w-0 overflow-x-auto no-scrollbar">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-2 lg:px-3 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap flex-shrink-0",
                    pathname === item.href
                      ? mounted && theme === "dark"
                        ? "text-white border-b-2 border-white"
                        : "text-primary border-b-2 border-primary"
                      : mounted && theme === "dark"
                        ? "text-gray-300 hover:text-white hover:border-b-2 hover:border-white"
                        : "text-gray-700 hover:text-primary hover:border-b-2 hover:border-primary",
                    "hover:scale-105 active:scale-95 duration-200"
                  )}
                  style={{ direction: language === 'ar' || language === 'fa' ? 'rtl' : 'ltr' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher Desktop */}
            <select
              value={language}
              onChange={e => setLanguage(e.target.value as typeof language)}
              className={cn(
                "px-3 py-2 rounded-lg border transition-all duration-200 hover:scale-105 cursor-pointer w-[140px]",
                mounted && theme === "dark" 
                  ? "bg-black text-white border-white hover:bg-gray-900" 
                  : "bg-white text-primary border-primary hover:bg-gray-50"
              )}
              aria-label="Select language"
              style={{ 
                textOverflow: 'ellipsis',
                direction: language === 'ar' || language === 'fa' ? 'rtl' : 'ltr',
                textAlign: language === 'ar' || language === 'fa' ? 'right' : 'left'
              }}
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code} style={{ 
                  direction: lang.code === 'ar' || lang.code === 'fa' ? 'rtl' : 'ltr',
                  textAlign: lang.code === 'ar' || lang.code === 'fa' ? 'right' : 'left'
                }}>
                  {lang.label}
                </option>
              ))}
            </select>
            
            {/* Dark Mode Toggle Desktop */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn(
                "p-2 rounded-full border transition-all duration-200 hover:scale-110 active:scale-95",
                mounted && theme === "dark" 
                  ? "bg-gray-800 border-white text-white hover:bg-gray-700" 
                  : "bg-white border-primary text-primary hover:bg-gray-100"
              )}
              aria-label="Toggle dark mode"
            >
              {mounted && theme === "dark" ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Switcher Mobile - Compact */}
            <select
              value={language}
              onChange={e => setLanguage(e.target.value as typeof language)}
              className={cn(
                "px-2 py-1 text-xs rounded border transition-all duration-200 hover:scale-105 w-[70px] overflow-hidden text-ellipsis",
                mounted && theme === "dark" ? "bg-black text-white border-white" : "bg-white text-primary border-primary"
              )}
              aria-label="Select language"
              style={{ 
                textOverflow: 'ellipsis',
                direction: language === 'ar' || language === 'fa' ? 'rtl' : 'ltr',
                textAlign: language === 'ar' || language === 'fa' ? 'right' : 'left'
              }}
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code} style={{ 
                  direction: lang.code === 'ar' || lang.code === 'fa' ? 'rtl' : 'ltr',
                  textAlign: lang.code === 'ar' || lang.code === 'fa' ? 'right' : 'left'
                }}>
                  {lang.label}
                </option>
              ))}
            </select>
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn(
                "p-2 rounded-full border transition-all duration-200 hover:scale-110 active:scale-95",
                mounted && theme === "dark" 
                  ? "bg-gray-800 border-white text-white hover:bg-gray-700" 
                  : "bg-white border-primary text-primary hover:bg-gray-100"
              )}
              aria-label="Toggle dark mode"
            >
              {mounted && theme === "dark" ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 transition-all duration-200 hover:scale-110 active:scale-95",
                mounted && theme === "dark" ? "text-white hover:text-gray-300" : "text-gray-700 hover:text-primary"
              )}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={cn("md:hidden", mounted && theme === "dark" ? "bg-black" : "bg-white")}> 
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors rounded-md",
                    pathname === item.href
                      ? mounted && theme === "dark"
                        ? "text-white bg-white/10"
                        : "text-primary bg-primary/10"
                      : mounted && theme === "dark"
                        ? "text-gray-300 hover:text-white hover:bg-white/5"
                        : "text-gray-700 hover:text-primary hover:bg-primary/5",
                    "hover:scale-105 active:scale-95 duration-200"
                  )}
                  style={{ direction: language === 'ar' || language === 'fa' ? 'rtl' : 'ltr', textAlign: language === 'ar' || language === 'fa' ? 'right' : 'left' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
