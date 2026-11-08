"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window !== "undefined") {
      return window.scrollY > 10;
    }
    return false;
  });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const t = useTranslations("header");

  const navLinks = [
    { href: "/about", label: t("about") },
    { href: "/experiences", label: t("experiences") },
    { href: "/projects", label: t("portfolio") },
    { href: "/contact", label: t("contact") },
  ];

  // Restore saved theme on client mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Mobile: auto-hide header when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Always show header on page transition
  useEffect(() => {
    setIsVisible(true);
    setLastScrollY(0);
  }, [pathname]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full md:translate-y-0"
      } ${
        isScrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo - Left Side */}
          <Link
            href="/"
            prefetch={true}
            scroll={false}
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            className="flex items-center gap-2.5 w-auto md:w-48 relative z-20 outline-none focus:outline-none select-none group"
          >
            <div className="h-8 w-8 rounded-lg bg-foreground text-background flex items-center justify-center font-bold text-xs tracking-wider shrink-0 shadow-sm border border-border/40 group-hover:scale-105 transition-transform duration-200">
              HP
            </div>
            <h1 className="text-[15px] font-semibold text-foreground tracking-tight whitespace-nowrap">
              Hoa Pham
            </h1>
          </Link>

          {/* Navigation - Center (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  scroll={false}
                  onClick={(e) => {
                    if (isActive) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }
                  }}
                  className={`relative py-1 text-sm transition-all duration-300 group outline-none focus:outline-none select-none ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-foreground transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-1/2"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Actions - Right Side */}
          <div className="flex items-center gap-1.5 sm:gap-2 w-48 justify-end relative z-20">
            {/* Language Change - Always visible */}
            <LanguageSwitcher />

            {/* Theme Toggle - Desktop & Mobile */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 hover:bg-secondary hover:text-foreground transition-all hover:scale-105 active:scale-95 duration-150 outline-none focus:outline-none ring-0 focus:ring-0 select-none"
              aria-label="Toggle theme"
              title={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg
      className="w-5 h-5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="w-5 h-5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
}
