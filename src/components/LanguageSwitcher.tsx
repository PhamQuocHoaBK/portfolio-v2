"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: "en" | "vi") => {
    if (newLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="inline-flex items-center p-0.5 rounded-full bg-secondary/80 border border-border/60 text-xs font-semibold tracking-wider">
      <button
        onClick={() => handleLanguageChange("en")}
        disabled={isPending}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 outline-none focus:outline-none ring-0 focus:ring-0 select-none ${
          locale === "en"
            ? "bg-foreground text-background shadow-sm"
            : "text-foreground/50 hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("vi")}
        disabled={isPending}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 outline-none focus:outline-none ring-0 focus:ring-0 select-none ${
          locale === "vi"
            ? "bg-foreground text-background shadow-sm"
            : "text-foreground/50 hover:text-foreground"
        }`}
        aria-label="Tiếng Việt"
      >
        VI
      </button>
    </div>
  );
}
