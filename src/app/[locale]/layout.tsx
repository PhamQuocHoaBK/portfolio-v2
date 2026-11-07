import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      template: `%s | ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "vi")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start z-20">
              <ProfileCard />
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-6">{children}</div>
          </div>
        </main>
      </div>
    </NextIntlClientProvider>
  );
}
