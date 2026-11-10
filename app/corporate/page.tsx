import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, MessagesSquare, Shapes, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking-form";
import { BUSINESS, formatRubles } from "@/lib/business";

export const metadata: Metadata = {
  title: "Мафия на корпоратив и тимбилдинг в Геленджике",
  description: "Выездная игра «Мафия» для корпоративов и командных мероприятий в Геленджике. Формат можно адаптировать под компанию. Стоимость — 4 000 ₽ за час, минимум 2 часа.",
  alternates: { canonical: "/corporate" },
};

export default function CorporatePage() {
  return <>
    <section className="subhero corporate-hero"><div className="container subhero-grid"><div><span className="eyebrow">ALIBIMASTERS / ДЛЯ КОМАНД</span><h1>Корпоратив,<br />где каждый<br /><em>в игре.</em></h1><p>Выездная «Мафия» для командных событий в Геленджике и рядом. Совместный сюжет, новые роли и живое общение за одним столом.</p><div className="hero-actions"><Button asChild><a href="#booking">Обсудить мероприятие <ArrowUpRight size={18} /></a></Button><Button asChild variant="outline"><Link href="/#price">Рассчитать стоимость</Link></Button></div></div><div className="corporate-art" aria-label="Декоративная схема игрового стола"><div className="table-orbit"><span>A</span><span>?</span><span>M</span><span>✦</span><strong>ОДНА КОМАНДА<br />МНОГО РОЛЕЙ</strong></div><small>ДЕКОРАТИВНАЯ ИЛЛЮСТРАЦИЯ</small></div></div></section>
    <section className="section corporate-intro"><div className="container intro-grid"><div><span className="eyebrow">01 / ФОРМАТ</span><h2>Общий сюжет.<br /><em>Разные взгляды.</em></h2></div><div className="intro-text"><p>В корпоративной «Мафии» участники обсуждают версии, принимают решения и пробуют себя в непривычных ролях. Это игровой формат для общения команды вне рабочих задач.</p><p>Ведущий объясняет правила, поддерживает ход игры и помогает выбрать подходящую версию: классическую, спортивную или авторскую с адаптацией под компанию.</p></div></div></section>
    <section className="section corporate-options"><div className="container"><div className="section-heading"><div><span className="eyebrow">02 / КОГДА ПОДХОДИТ</span><h2>Игра вписывается<br /><em>в ваш повод.</em></h2></div></div><div className="corporate-option-grid"><article><BriefcaseBusiness size={28} /><h3>Корпоратив</h3><p>Отдельная программа для вечера коллег или часть общего события.</p></article><article><UsersRound size={28} /><h3>Тимбилдинг</h3><p>Общая игровая задача, в которой каждый участник может проявить себя.</p></article><article><MessagesSquare size={28} /><h3>Неформальная встреча</h3><p>Повод пообщаться за пределами рабочих тем и привычных ролей.</p></article><article><Shapes size={28} /><h3>Адаптированный сценарий</h3><p>Подбор формата с учётом состава команды, площадки и задач мероприятия.</p></article></div></div></section>
    <section className="section corporate-process"><div className="container price-grid"><div><span className="eyebrow">03 / УСЛОВИЯ</span><h2>Организация<br /><em>без сложностей.</em></h2><p className="section-lead">Сообщите дату, площадку, число участников и пожелания. Мы обсудим формат и подтвердим возможность проведения.</p><div className="price-points"><div><span className="condition-number">01</span><span>{formatRubles(BUSINESS.hourlyRate)} за час, минимум 2 часа</span></div><div><span className="condition-number">02</span><span>Количество участников не меняет стоимость</span></div><div><span className="condition-number">03</span><span>Выезд и реквизит включены в стандартной географии</span></div><div><span className="condition-number">04</span><span>Оплата наличными при проведении</span></div></div></div><div className="corporate-quote"><span>«</span><blockquote>Идеальная версия игры — та, в которой интересно именно вашей компании.</blockquote><p>Детали формата обсудим до мероприятия.</p><Link href="/#price">Открыть калькулятор <ArrowUpRight size={18} /></Link></div></div></section>
    <section className="section booking-section"><div className="container"><BookingForm /></div></section>
  </>;
}
