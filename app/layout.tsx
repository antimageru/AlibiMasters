import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Выездная Мафия в Геленджике | AlibiMasters", template: "%s | AlibiMasters" },
  description: "Выездная ролевая игра «Мафия» в Геленджике, Кабардинке, Дивноморском и Новороссийске. Ведущий с опытом более 6 лет. От 8 000 ₽ за мероприятие.",
  openGraph: { type: "website", locale: "ru_RU", siteName: "AlibiMasters", title: "Выездная Мафия в Геленджике | AlibiMasters", description: "Проведём игру «Мафия» для вашего события. От 8 000 ₽ за мероприятие." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}
