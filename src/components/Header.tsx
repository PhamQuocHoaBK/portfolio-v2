"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const t = useTranslations("header");
  const tCommon = useTranslations("common");

  const navLinks = [
    { href: "/about", label: t("about") },
    { href: "/experiences", label: t("experiences") },
    { href: "/projects", label: t("portfolio") },
    { href: "/contact", label: t("contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Function to close menu
  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center gap-3 w-48 relative z-20">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg animate-pulse-glow shrink-0">
              HP
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
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
                  className={`relative py-1 text-sm font-semibold transition-all duration-300 group ${
                    isActive
                      ? "text-primary scale-110"
                      : "text-foreground/60 hover:text-primary/80"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-1/2"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Actions - Right Side */}
          <div className="flex items-center gap-2 md:gap-3 w-48 justify-end relative z-20">
            {/* Language Change - Always visible */}
            <LanguageSwitcher />

            {/* Theme Toggle - Desktop */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-card/95 backdrop-blur-xl border-b border-border/50 rounded-b-3xl transition-all duration-300 ease-in-out overflow-hidden shadow-2xl ${
          isMenuOpen
            ? "max-h-[80vh] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`py-3 px-4 rounded-xl text-lg font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-primary/10 text-primary border-l-4 border-primary"
                    : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between px-4">
            <span className="text-sm font-medium opacity-60">
              {isDark ? tCommon("lightMode") : tCommon("darkMode")}
            </span>
            <button
              onClick={toggleTheme}
              className="rounded-full p-3 bg-secondary text-foreground transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg
      className="h-6 w-6"
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
      className="h-6 w-6"
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
