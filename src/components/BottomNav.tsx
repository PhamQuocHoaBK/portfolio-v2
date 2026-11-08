"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("header");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [optimisticPath, setOptimisticPath] = useState<string | null>(null);

  const navLinks = [
    {
      href: "/about",
      label: t("about"),
      icon: (
        <svg
          className="w-5 h-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      href: "/experiences",
      label: t("experiences"),
      icon: (
        <svg
          className="w-5 h-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      href: "/projects",
      label: t("portfolio"),
      icon: (
        <svg
          className="w-5 h-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      href: "/contact",
      label: t("contact"),
      icon: (
        <svg
          className="w-5 h-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  // Set scroll restoration to manual and prefetch all routes for instant transitions
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    navLinks.forEach((link) => {
      try {
        router.prefetch(link.href);
      } catch {
        // ignore
      }
    });
  }, [router]);

  // Auto-hide when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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

  // Always reset to top, reset scroll state, and clear optimistic tab when route updates
  useEffect(() => {
    setIsVisible(true);
    setLastScrollY(0);
    setOptimisticPath(null);
    window.scrollTo({ top: 0, behavior: "instant" });
    const rafId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  const currentPath = optimisticPath ?? pathname;
  const activeIndex = Math.max(
    0,
    navLinks.findIndex((link) => link.href === currentPath)
  );

  return (
    <nav
      className={`md:hidden fixed bottom-3 sm:bottom-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-20 opacity-0 scale-95 pointer-events-none"
      }`}
      aria-label="Mobile Navigation"
    >
      <div className="relative flex items-center p-0.5 rounded-full bg-white/85 dark:bg-[#0a0a0c]/85 backdrop-blur-2xl backdrop-saturate-150 border border-black/[0.08] dark:border-white/[0.1] shadow-[0_8px_24px_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.8)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.1)] w-[272px] max-w-[calc(100vw-32px)]">
        {/* 1px Specular Top Light */}
        <div className="pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent" />

        {/* Sliding Pill Indicator */}
        <div
          className="absolute top-0.5 bottom-0.5 left-0.5 rounded-full bg-neutral-900 shadow-sm dark:bg-white/[0.14] dark:border dark:border-white/[0.16] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
          style={{
            width: "calc((100% - 4px) / 4)",
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />

        {navLinks.map((link) => {
          const isActive = currentPath === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              scroll={false}
              onClick={(e) => {
                if (pathname === link.href) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  setOptimisticPath(link.href);
                  window.scrollTo({ top: 0, behavior: "instant" });
                }
              }}
              className="relative z-10 flex-1 h-[38px] flex items-center justify-center outline-none focus:outline-none select-none group"
              aria-label={link.label}
              title={link.label}
            >
              <div
                className={`transition-all duration-200 ${
                  isActive
                    ? "text-white scale-110"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-zinc-400 dark:hover:text-zinc-200 scale-95 opacity-70 group-hover:opacity-100"
                }`}
              >
                {link.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
