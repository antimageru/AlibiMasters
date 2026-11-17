import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "Выездная Мафия в Геленджике | AlibiMasters", template: "%s | AlibiMasters" },
  description: "Выездная игра «Мафия» в Геленджике, Кабардинке, Дивноморском и Новороссийске. Команда ведущих с опытом от 6 лет. Для 10–20 участников, от 8 000 ₽ за мероприятие.",
  openGraph: { type: "website", locale: "ru_RU", siteName: "AlibiMasters", title: "Выездная Мафия в Геленджике | AlibiMasters", description: "Проведём игру «Мафия» для вашего события. От 8 000 ₽ за мероприятие.", images: [{ url: "/images/mafia-og-preview.webp", width: 1200, height: 630, alt: "Участники игры «Мафия» обсуждают версии за столом" }] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}
