"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition, useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const toggleLanguage = () => {
    const nextLocale = (currentLocale === "en" ? "vi" : "en") as "en" | "vi";
    setCurrentLocale(nextLocale);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      disabled={isPending}
      className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 hover:bg-secondary hover:text-foreground transition-all hover:scale-105 active:scale-95 duration-150 outline-none focus:outline-none ring-0 focus:ring-0 select-none font-bold text-xs tracking-wider"
      aria-label={`Switch to ${currentLocale === "en" ? "Vietnamese" : "English"}`}
      title={currentLocale === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
    >
      <span className="transition-transform duration-150">
        {currentLocale === "en" ? "EN" : "VI"}
      </span>
    </button>
  );
}
