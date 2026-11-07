import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

// Metadata is handled in [locale]/layout.tsx for localization

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const { locale = "en" } = await params;

  return (
    <html lang={locale} className={`${inter.variable} dark`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
