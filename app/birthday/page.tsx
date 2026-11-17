import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock3, MapPin, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MaxNumber } from "@/components/contact-prompt";
import { BUSINESS, formatRubles } from "@/lib/business";

export const metadata: Metadata = {
  title: "Мафия на день рождения в Геленджике — выездная игра",
  description:
    "Выездная игра «Мафия» на день рождения в Геленджике для детей, подростков и взрослых. Команда ведущих с опытом от 6 лет. Стоимость — 4 000 ₽ в час, минимум 2 часа.",
  alternates: { canonical: "/birthday" },
};

export default function BirthdayPage() {
  return (
    <>
      <section className="subhero birthday-hero">
        <div className="container subhero-grid">
          <div>
            <span className="eyebrow">ALIBIMASTERS / ДЕНЬ РОЖДЕНИЯ</span>
            <h1>Мафия на<br />день рождения<br /><em>в Геленджике.</em></h1>
            <p>Выездная игра для друзей и близких: роли, версии и решения, которые гости принимают вместе. Подберём сценарий и объясним правила с учётом возраста и состава компании.</p>
            <div className="hero-actions">
              <Button asChild><a href="#birthday-contact">Обсудить дату <ArrowUpRight size={18} /></a></Button>
              <Button asChild variant="outline"><Link href="/#price">Рассчитать стоимость</Link></Button>
            </div>
          </div>
          <div className="birthday-art birthday-photo">
            <Image src="/images/mafia-guest-at-game.webp" alt="Гостья в маске на игре «Мафия»" fill sizes="(max-width: 850px) 100vw, 45vw" />
            <span className="eyebrow">ВАШ ПРАЗДНИК / ВАША ИСТОРИЯ</span>
            <strong>От {formatRubles(BUSINESS.hourlyRate * BUSINESS.minimumDurationHours)}</strong>
            <span>за игру от {BUSINESS.minimumDurationHours} часов</span>
          </div>
        </div>
      </section>

      <section className="section corporate-intro">
        <div className="container intro-grid">
          <div><span className="eyebrow">01 / ФОРМАТ</span><h2>Праздник,<br /><em>в котором участвуют все.</em></h2></div>
          <div className="intro-text">
            <p>«Мафия» объединяет гостей вокруг общего сюжета. Пока одни ищут аргументы, другие строят версии и пытаются разгадать роли. У каждого есть возможность включиться в разговор и повлиять на игру.</p>
            <p>Можно выбрать знакомую классическую версию, более структурированную спортивную игру или обсудить адаптацию сценария под состав гостей и настроение праздника.</p>
          </div>
        </div>
      </section>

      <section className="section corporate-options">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">02 / ПОДГОТОВКА</span><h2>Что обсудим<br /><em>перед игрой.</em></h2></div></div>
          <div className="birthday-detail-grid">
            <article><UsersRound size={28} /><h3>Состав гостей</h3><p>Обычно проводим игры для 10–20 человек. Для детей 8–12 лет, подростков 12–18 лет и взрослых 18+ подберём подходящую сложность.</p></article>
            <article><Clock3 size={28} /><h3>Время и формат</h3><p>Длительность от двух часов. Выберем классическую, спортивную или адаптированную версию игры.</p></article>
            <article><MapPin size={28} /><h3>Место проведения</h3><p>Выезжаем в Геленджик, Кабардинку, Дивноморское и Новороссийск. Другие места — по согласованию.</p></article>
          </div>
        </div>
      </section>

      <section className="section corporate-process" id="birthday-contact">
        <div className="container price-grid">
          <div>
            <span className="eyebrow">03 / УСЛОВИЯ</span>
            <h2>Стоимость<br /><em>понятна заранее.</em></h2>
            <p className="section-lead">{formatRubles(BUSINESS.hourlyRate)} за час, минимум {BUSINESS.minimumDurationHours} часа. Количество участников не меняет цену.</p>
            <div className="price-points">
              <div><span className="condition-number">01</span><span>Выезд и игровой реквизит включены в стандартной географии</span></div>
              <div><span className="condition-number">02</span><span>Оплата наличными при проведении мероприятия</span></div>
              <div><span className="condition-number">03</span><span>Дата считается забронированной после отдельного согласования</span></div>
            </div>
          </div>
          <div className="birthday-contact-card">
            <span className="eyebrow">РАССКАЖИТЕ О ВАШЕМ ПРАЗДНИКЕ</span>
            <h3>Подберём игру<br />под вашу компанию.</h3>
            <p>Напишите дату, место и примерное количество гостей. Обсудим формат и проверим возможность проведения.</p>
            <a href={BUSINESS.phoneHref}>Позвонить: {BUSINESS.phoneDisplay} <ArrowUpRight size={18} /></a>
            <a href={BUSINESS.telegram} target="_blank" rel="noopener noreferrer">Написать в Telegram <ArrowUpRight size={18} /></a>
            <MaxNumber />
          </div>
        </div>
      </section>
    </>
  );
}
