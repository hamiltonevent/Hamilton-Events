"use client"
import { useLanguage } from "@/components/language-context"
import { useTranslation } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = useTranslation(language)

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hamilton Events</h3>
            <p className="text-gray-300 text-sm sm:text-base">From Vision to Execution, We craft events that speak Elegance, Precision, and Purpose delivering experiences that leave a lasting impression on every guest.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{t("footerContact")}</h4>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <p>Addis Ababa, Ethiopia</p>
              <p>Email: contact@hamiltonevents.net</p>
              <p>Phone: +251935483093</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{t("footerFollow")}</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://www.linkedin.com/company/hamilton-events-plc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm sm:text-base"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/hamiltonevents.co/?igsh=cWtjbDA3c2t1aWF0#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm sm:text-base"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2025 Hamilton Events. {t("footerRights")}</p>
            <div className="flex gap-4 text-sm">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
