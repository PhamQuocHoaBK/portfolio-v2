import { redirect } from "@/i18n/routing";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect({ href: "/about", locale: locale as "en" | "vi" });
  return null;
}
