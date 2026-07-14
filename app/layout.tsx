import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  return {
    title: "WH Deck｜萬海 GAM 面試準備",
    description: "顏文龍專屬的萬海航運 Global Account Manager 面試準備系統。",
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "WH Deck｜萬海 GAM 面試準備",
      description: "把溝通力，轉成航運商業力。",
      type: "website",
      locale: "zh_TW",
      images: [{ url: image, width: 1672, height: 941, alt: "WH Deck 萬海 GAM 面試準備" }],
    },
    twitter: { card: "summary_large_image", title: "WH Deck｜萬海 GAM 面試準備", description: "把溝通力，轉成航運商業力。", images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
