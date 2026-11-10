import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div>
        <Link href="/" className="brand footer-brand"><span className="brand-mark" aria-hidden="true">A<span>✦</span></span><span className="brand-word">ALIBI<span>MASTERS</span></span></Link>
        <p>Выездная ролевая «Мафия» для ваших событий в Геленджике и рядом.</p>
      </div>
      <div className="footer-links"><span>Разделы</span><Link href="/#formats">Форматы</Link><Link href="/corporate">Для компаний</Link><Link href="/#price">Стоимость</Link><Link href="/#booking">Заявка</Link></div>
      <div className="footer-links"><span>Информация</span><Link href="/terms">Условия бронирования</Link><Link href="/privacy">Конфиденциальность</Link><a href={BUSINESS.telegram} target="_blank" rel="noopener noreferrer">Telegram <ArrowUpRight size={14} /></a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} AlibiMasters</span><span>Геленджик · Кабардинка · Дивноморское · Новороссийск</span></div>
  </footer>;
}
