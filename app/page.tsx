import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Clock3, MapPin, Sparkles, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PriceCalculator } from "@/components/price-calculator";
import { BookingForm } from "@/components/booking-form";
import { BUSINESS, formatRubles } from "@/lib/business";

export const metadata: Metadata = {
  title: "Выездная Мафия в Геленджике — игра, которую запомнят все",
  alternates: { canonical: "/" },
};

const formats = [
  { number: "01", label: "Классическая", title: "Мафия, которую любят все", text: "Знакомая ролевая игра с интригой, обсуждениями и неожиданными поворотами. Подходит для компании друзей и семейного праздника.", icon: "♠" },
  { number: "02", label: "Спортивная", title: "Игра на логику и внимание", text: "Более структурированный формат для тех, кому нравится искать аргументы, замечать детали и выстраивать стратегию.", icon: "◆" },
  { number: "03", label: "Авторская", title: "Сценарий под вашу компанию", text: "Авторские форматы и адаптация игры под состав участников, повод и желаемую атмосферу вечера.", icon: "✦" },
];

const faq = [
  { q: "Сколько стоит проведение игры?", a: "4 000 ₽ за час, минимальная продолжительность — 2 часа. Минимальная стоимость мероприятия — 8 000 ₽. Количество участников на цену не влияет." },
  { q: "Что входит в стоимость?", a: "Ведение игры, выезд и игровой реквизит в пределах стандартной географии обслуживания. Для других населённых пунктов условия выезда согласовываются индивидуально." },
  { q: "Можно ли провести игру для большой компании?", a: "Да, возможно проведение игры для 16–20 и более участников за одним большим столом. Детали организации обсуждаются с учётом площадки и состава гостей." },
  { q: "Где вы проводите игры?", a: "В Геленджике, Кабардинке, Дивноморском, Большом Геленджике и Новороссийске. Другие населённые пункты — по согласованию." },
  { q: "Как подтверждается бронирование?", a: "После вашего обращения мы согласуем дату, время, место и формат. Бронь подтверждается только после отдельного согласования с организатором." },
  { q: "Как происходит оплата?", a: "Только наличными при проведении мероприятия. Онлайн-оплаты и предоплаты на сайте нет." },
];

export default function HomePage() {
  return <>
    <section className="hero">
      <div className="hero-noise" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="gold-line" /> ИГРА, В КОТОРОЙ КАЖДЫЙ ВАЖЕН</div>
          <h1>Выездная Мафия<br />в Геленджике —<br /><em>игра, которую</em><br /><em>запомнят все</em></h1>
          <p className="hero-lead">Профессиональный ведущий с опытом более 6 лет. Для дней рождения, корпоративов и компаний друзей. От 8 000 ₽ за мероприятие.</p>
          <div className="hero-actions"><Button asChild><a href="#booking">Забронировать игру <ArrowUpRight size={18} /></a></Button><Button asChild variant="outline"><a href="#price">Рассчитать стоимость <ArrowRight size={18} /></a></Button></div>
          <div className="hero-meta"><div><span>01 / 03</span><strong>Ваш повод</strong></div><div><span>02 / 03</span><strong>Наша игра</strong></div><div><span>03 / 03</span><strong>Общие эмоции</strong></div></div>
        </div>
        <div className="hero-art" aria-label="Декоративная композиция с игральными картами и фишкой">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-card card-back"><span>ALIBI<br />MASTERS</span><i>✦</i></div>
          <div className="art-card card-front"><span className="card-corner">A <b>♠</b></span><span className="card-center">♠</span><span className="card-corner card-corner-bottom">A <b>♠</b></span></div>
          <div className="art-chip"><span>ALIBI</span><strong>✦</strong><span>MASTERS</span></div>
          <div className="art-caption">ВИЗУАЛЬНАЯ ИЛЛЮСТРАЦИЯ · НЕ ФОТО МЕРОПРИЯТИЯ</div>
        </div>
      </div>
      <div className="container hero-bottom"><a href="#about">УЗНАТЬ ОБ ИГРЕ <ArrowDown size={15} /></a><span>ГЕЛЕНДЖИК И ПОБЕРЕЖЬЕ ЧЁРНОГО МОРЯ</span></div>
    </section>

    <section className="section intro-section" id="about"><div className="container intro-grid"><div><span className="eyebrow">01 / О ПРОЕКТЕ</span><h2>Вечер, где роли<br /><em>оживают.</em></h2></div><div className="intro-text"><p>«Мафия» — это история, которую гости создают вместе. Каждый раунд приносит новые версии, союзы и неожиданные решения.</p><p>AlibiMasters проводит выездные игры для частных праздников, корпоративов и туристических мероприятий. Ведущий помогает выбрать формат и поддерживает ритм вечера — от первого знакомства с правилами до финального обсуждения.</p><div className="intro-facts"><div><strong>6+ лет</strong><span>опыт ведущего</span></div><div><strong>16–20+</strong><span>участников за одним столом</span></div></div></div></div></section>

    <section className="section formats-section" id="formats"><div className="container"><div className="section-heading"><div><span className="eyebrow">02 / ФОРМАТЫ</span><h2>У каждой компании<br /><em>свой сценарий.</em></h2></div><p>От знакомой классики до игры, созданной с учётом вашего события. Выберем подходящий ритм и уровень сложности.</p></div><div className="formats-grid">{formats.map((format) => <article className="format-card" key={format.number}><div className="format-card-top"><span>{format.number} / {format.label.toUpperCase()}</span><span className="format-icon" aria-hidden="true">{format.icon}</span></div><div><h3>{format.title}</h3><p>{format.text}</p></div><span className="format-card-line" /></article>)}</div></div></section>

    <section className="section benefits-section"><div className="container benefits-grid"><div className="benefits-art"><span className="benefits-orbit">A</span><span className="benefits-stamp">ИГРА НАЧИНАЕТСЯ<br />С ОДНОГО ВОПРОСА</span><span className="art-disclaimer">ДЕКОРАТИВНАЯ ИЛЛЮСТРАЦИЯ</span></div><div><span className="eyebrow">03 / ПОЧЕМУ ALIBIMASTERS</span><h2>Всё внимание —<br /><em>вашей компании.</em></h2><div className="benefit-list"><div><span>01</span><div><h3>Ведущий с опытом</h3><p>Более 6 лет проведения игр — чтобы гости быстро включились и каждый чувствовал себя частью истории.</p></div></div><div><span>02</span><div><h3>Формат под событие</h3><p>Классическая, спортивная и авторская «Мафия» с возможностью адаптации под компанию.</p></div></div><div><span>03</span><div><h3>Понятные условия</h3><p>Фиксированная ставка за час, реквизит и выезд включены в стандартной географии. Число участников не меняет цену.</p></div></div></div></div></div></section>

    <section className="section occasions-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">04 / ДЛЯ ВАШЕГО ПОВОДА</span><h2>Повод встречаться.<br /><em>Причина запомнить.</em></h2></div></div><div className="occasion-grid"><article className="occasion-card occasion-private"><div className="occasion-head"><span>01 / ЧАСТНЫЕ СОБЫТИЯ</span><Sparkles size={24} /></div><div><h3>День рождения<br />или вечеринка</h3><p>Игра для друзей и близких, которая объединяет гостей вокруг общего сюжета. Подберём формат под состав компании.</p><a href="#booking">Обсудить праздник <ArrowUpRight size={18} /></a></div></article><article className="occasion-card occasion-corporate"><div className="occasion-head"><span>02 / КОМАНДЫ</span><Users size={24} /></div><div><h3>Корпоратив<br />с характером</h3><p>Общее игровое пространство, где коллеги могут взаимодействовать в непривычных ролях. Формат можно адаптировать под мероприятие.</p><Link href="/corporate">Подробнее для компаний <ArrowUpRight size={18} /></Link></div></article></div></div></section>

    <section className="section gallery-section" id="gallery"><div className="container"><div className="section-heading"><div><span className="eyebrow">05 / АТМОСФЕРА</span><h2>Представьте<br /><em>этот вечер.</em></h2></div><p>Пока здесь — стилизованные иллюстрации. Фотографии реальных игр появятся после согласования материалов.</p></div><div className="gallery-grid"><div className="gallery-tile gallery-tile-one"><span className="gallery-number">01 / ИНТРИГА</span><span className="gallery-graphic">?</span><span className="gallery-disclaimer">ДЕМО-ИЛЛЮСТРАЦИЯ</span></div><div className="gallery-tile gallery-tile-two"><span className="gallery-number">02 / РЕШЕНИЕ</span><span className="gallery-graphic">♠</span><span className="gallery-disclaimer">ДЕМО-ИЛЛЮСТРАЦИЯ</span></div><div className="gallery-tile gallery-tile-three"><span className="gallery-number">03 / ИСТОРИЯ</span><span className="gallery-graphic">✦</span><span className="gallery-disclaimer">ДЕМО-ИЛЛЮСТРАЦИЯ</span></div></div></div></section>

    <section className="section price-section"><div className="container price-grid"><div><span className="eyebrow">06 / СТОИМОСТЬ</span><h2>Считаем время.<br /><em>Не гостей.</em></h2><p className="section-lead">Стоимость зависит только от продолжительности игры. Минимум — 2 часа.</p><div className="price-points"><div><Clock3 size={20} /><span>{formatRubles(BUSINESS.hourlyRate)} / час</span></div><div><Users size={20} /><span>Количество участников не влияет на цену</span></div><div><MapPin size={20} /><span>Выезд и реквизит включены в стандартной географии</span></div><div><Wallet size={20} /><span>Оплата наличными на мероприятии</span></div></div><p className="fine-print">За пределами стандартной географии условия выезда согласовываются индивидуально.</p></div><PriceCalculator /></div></section>

    <section className="section steps-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">07 / ПРОСТОЙ ПЛАН</span><h2>От идеи<br /><em>до первого раунда.</em></h2></div></div><div className="steps-grid"><div><span>01</span><h3>Расскажите о событии</h3><p>Напишите или позвоните: дата, место, повод и примерное число участников.</p></div><div><span>02</span><h3>Согласуем детали</h3><p>Обсудим формат, время и площадку. Проверим возможность проведения игры в выбранную дату.</p></div><div><span>03</span><h3>Подтвердим игру</h3><p>После отдельного согласования бронь будет подтверждена. Оплата — наличными при проведении.</p></div></div></div></section>

    <section className="section faq-section" id="faq"><div className="container faq-grid"><div><span className="eyebrow">08 / ВОПРОСЫ</span><h2>Перед тем,<br /><em>как сыграем.</em></h2><p>Не нашли ответ? Свяжитесь с нами удобным способом.</p><a href={BUSINESS.telegram} target="_blank" rel="noopener noreferrer" className="text-link">Написать в Telegram <ArrowUpRight size={18} /></a></div><div className="faq-list">{faq.map((item, index) => <details key={item.q}><summary><span className="faq-index">0{index + 1}</span><span>{item.q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></div></section>

    <section className="section booking-section"><div className="container"><BookingForm /></div></section>

    <section className="contact-section" id="contacts"><div className="container contact-grid"><div><span className="eyebrow">09 / КОНТАКТЫ</span><h2>Ваш следующий ход<br /><em>за вами.</em></h2><p>Геленджик, Кабардинка, Дивноморское, Большой Геленджик, Новороссийск. Другие города — по согласованию.</p></div><div className="contact-actions"><a href={BUSINESS.phoneHref}><span>ПОЗВОНИТЬ</span><strong>{BUSINESS.phoneDisplay}</strong><ArrowUpRight size={25} /></a><a href={BUSINESS.telegram} target="_blank" rel="noopener noreferrer"><span>НАПИСАТЬ</span><strong>Telegram</strong><ArrowUpRight size={25} /></a></div></div></section>
  </>;
}
