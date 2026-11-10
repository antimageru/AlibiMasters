"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const links = [
  { href: "/#about", label: "Об игре" },
  { href: "/#formats", label: "Форматы" },
  { href: "/corporate", label: "Для компаний" },
  { href: "/#price", label: "Стоимость" },
  { href: "/#faq", label: "Вопросы" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Перейти к содержимому</a>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="AlibiMasters — на главную" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">A<span>✦</span></span>
          <span className="brand-word">ALIBI<span>MASTERS</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {links.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-contact" href="/#booking">Обсудить игру <ArrowUpRight size={15} aria-hidden="true" /></Link>
        <button className="menu-trigger" type="button" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && <nav className="mobile-nav" id="mobile-menu" aria-label="Мобильная навигация">
        {links.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16} /></Link>)}
        <Link href="/#booking" onClick={() => setOpen(false)}>Забронировать игру <ArrowUpRight size={16} /></Link>
        <a href={BUSINESS.phoneHref}>Позвонить: {BUSINESS.phoneDisplay}</a>
      </nav>}
    </header>
  );
}
