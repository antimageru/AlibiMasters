import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Clock3, MapPin, Sparkles, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PriceCalculator } from "@/components/price-calculator";
import { ContactPrompt, MaxNumber } from "@/components/contact-prompt";
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
  { q: "Сколько человек может играть?", a: "Обычно проводим игру для 10–20 участников. Подберём правила и ход игры под состав компании и площадку." },
  { q: "Для какого возраста подходит игра?", a: "Проводим игры для детей 8–12 лет, подростков 12–18 лет и взрослых 18+. Сложность правил и сценарий подбираем по возрасту участников." },
  { q: "Где вы проводите игры?", a: "В Геленджике, Кабардинке, Дивноморском и Новороссийске. Другие населённые пункты — по согласованию." },
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
          <p className="hero-lead">Команда опытных ведущих: от 6 лет проведения игр. Для дней рождения, корпоративов и компаний друзей от 10 до 20 человек. От 8 000 ₽ за мероприятие.</p>
          <div className="hero-actions"><Button asChild><a href={BUSINESS.telegram} target="_blank" rel="noopener noreferrer">Связаться в Telegram <ArrowUpRight size={18} /></a></Button><Button asChild variant="outline"><a href="#price">Рассчитать стоимость <ArrowRight size={18} /></a></Button></div>
          <div className="hero-meta"><div><span>01 / 03</span><strong>Ваш повод</strong></div><div><span>02 / 03</span><strong>Наша игра</strong></div><div><span>03 / 03</span><strong>Общие эмоции</strong></div></div>
        </div>
        <figure className="hero-photo"><Image src="/images/mafia-guest-with-mask.webp" alt="Гостья игры «Мафия» держит серебристую маску" fill priority sizes="(max-width: 850px) 100vw, 45vw" /><figcaption>РЕАЛЬНЫЕ КАДРЫ НАШИХ ИГР</figcaption></figure>
      </div>
      <div className="container hero-bottom"><a href="#about">УЗНАТЬ ОБ ИГРЕ <ArrowDown size={15} /></a><span>ГЕЛЕНДЖИК И ПОБЕРЕЖЬЕ ЧЁРНОГО МОРЯ</span></div>
    </section>

    <section className="section intro-section" id="about"><div className="container intro-grid"><div><span className="eyebrow">01 / О ПРОЕКТЕ</span><h2>Вечер, где роли<br /><em>оживают.</em></h2></div><div className="intro-text"><p>«Мафия» — это история, которую гости создают вместе. Каждый раунд приносит новые версии, союзы и неожиданные решения.</p><p>AlibiMasters — команда ведущих выездной «Мафии» для частных праздников и корпоративов. Мы объясняем правила, подбираем сценарий под гостей и ведём игру от знакомства с ролями до финального обсуждения.</p><div className="intro-facts"><div><strong>от 6 лет</strong><span>опыт проведения игр</span></div><div><strong>10–20</strong><span>участников</span></div></div></div></div></section>

    <section className="section formats-section" id="formats"><div className="container"><div className="section-heading"><div><span className="eyebrow">02 / ФОРМАТЫ</span><h2>У каждой компании<br /><em>свой сценарий.</em></h2></div><p>От знакомой классики до игры, созданной с учётом вашего события. Выберем подходящий ритм и уровень сложности.</p></div><div className="formats-grid">{formats.map((format) => <article className="format-card" key={format.number}><div className="format-card-top"><span>{format.number} / {format.label.toUpperCase()}</span><span className="format-icon" aria-hidden="true">{format.icon}</span></div><div><h3>{format.title}</h3><p>{format.text}</p></div><span className="format-card-line" /></article>)}</div></div></section>

    <section className="section age-section" id="ages"><div className="container"><div className="section-heading"><div><span className="eyebrow">ИГРА ДЛЯ РАЗНЫХ ВОЗРАСТОВ</span><h2>Ваш возраст.<br /><em>Ваши правила.</em></h2></div><p>Подбираем сложность и темп игры под гостей. Обычно за столом 10–20 участников.</p></div><div className="age-grid"><article><strong>8–12</strong><h3>Детям</h3><p>Понятные правила и динамичный сюжет для детского праздника.</p></article><article><strong>12–18</strong><h3>Подросткам</h3><p>Больше версий, обсуждений и самостоятельных решений.</p></article><article><strong>18+</strong><h3>Взрослым</h3><p>Игра для друзей, дней рождения и корпоративных встреч.</p></article></div></div></section>

    <section className="section benefits-section"><div className="container benefits-grid"><figure className="benefits-photo"><Image src="/images/mafia-guest-in-mask.webp" alt="Гостья смотрит поверх серебристой маски на игре «Мафия»" fill sizes="(max-width: 850px) 100vw, 40vw" /><figcaption>МАСКИ, РОЛИ, РЕШЕНИЯ</figcaption></figure><div><span className="eyebrow">03 / ПОЧЕМУ ALIBIMASTERS</span><h2>Всё внимание —<br /><em>вашей компании.</em></h2><div className="benefit-list"><div><span>01</span><div><h3>Опытные ведущие</h3><p>От 6 лет проведения игр. Поможем гостям быстро включиться и удержим ритм вечера.</p></div></div><div><span>02</span><div><h3>Формат под событие</h3><p>Классическая, спортивная и авторская «Мафия» с адаптацией под возраст и состав компании.</p></div></div><div><span>03</span><div><h3>Понятные условия</h3><p>Фиксированная ставка за час, реквизит и выезд включены в стандартной географии. Число участников не меняет цену.</p></div></div></div></div></div></section>

    <section className="section occasions-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">04 / ДЛЯ ВАШЕГО ПОВОДА</span><h2>Повод встречаться.<br /><em>Причина запомнить.</em></h2></div></div><div className="occasion-grid"><article className="occasion-card occasion-private"><div className="occasion-head"><span>01 / ЧАСТНЫЕ СОБЫТИЯ</span><Sparkles size={24} /></div><div><h3>День рождения<br />или вечеринка</h3><p>Игра для друзей и близких, которая объединяет гостей вокруг общего сюжета. Подберём формат под состав компании.</p><Link href="/birthday">Мафия на день рождения <ArrowUpRight size={18} /></Link></div></article><article className="occasion-card occasion-corporate"><div className="occasion-head"><span>02 / КОМАНДЫ</span><Users size={24} /></div><div><h3>Корпоратив<br />с характером</h3><p>Общее игровое пространство, где коллеги могут взаимодействовать в непривычных ролях. Формат можно адаптировать под мероприятие.</p><Link href="/corporate">Подробнее для компаний <ArrowUpRight size={18} /></Link></div></article></div></div></section>

    <section className="section gallery-section" id="gallery"><div className="container"><div className="section-heading"><div><span className="eyebrow">05 / АТМОСФЕРА</span><h2>Вот как выглядит<br /><em>игра вживую.</em></h2></div><p>Кадры с наших игр: маски, роли, обсуждения и настоящие эмоции участников.</p></div><div className="gallery-grid"><figure className="gallery-tile"><Image src="/images/mafia-players-discussing.webp" alt="Участники игры «Мафия» обсуждают версии за столом" fill sizes="(max-width: 600px) 100vw, (max-width: 850px) 34vw, 40vw" /><figcaption>01 / ОБСУЖДЕНИЕ</figcaption></figure><figure className="gallery-tile"><Image src="/images/mafia-guest-at-game.webp" alt="Гостья в маске на игре «Мафия»" fill sizes="(max-width: 600px) 50vw, (max-width: 850px) 33vw, 30vw" /><figcaption>02 / АТМОСФЕРА</figcaption></figure><figure className="gallery-tile"><Image src="/images/mafia-role-cards.webp" alt="Участник показывает игровые карты с ролями Мафии и Детектива" fill sizes="(max-width: 600px) 50vw, (max-width: 850px) 33vw, 30vw" /><figcaption>03 / РОЛИ</figcaption></figure></div></div></section>

    <section className="section price-section"><div className="container price-grid"><div><span className="eyebrow">06 / СТОИМОСТЬ</span><h2>Считаем время.<br /><em>Не гостей.</em></h2><p className="section-lead">Стоимость зависит только от продолжительности игры. Минимум — 2 часа.</p><div className="price-points"><div><Clock3 size={20} /><span>{formatRubles(BUSINESS.hourlyRate)} / час</span></div><div><Users size={20} /><span>Количество участников не влияет на цену</span></div><div><MapPin size={20} /><span>Выезд и реквизит включены в стандартной географии</span></div><div><Wallet size={20} /><span>Оплата наличными на мероприятии</span></div></div><p className="fine-print">За пределами стандартной географии условия выезда согласовываются индивидуально.</p></div><PriceCalculator /></div></section>

    <section className="section steps-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">07 / ПРОСТОЙ ПЛАН</span><h2>От идеи<br /><em>до первого раунда.</em></h2></div></div><div className="steps-grid"><div><span>01</span><h3>Расскажите о событии</h3><p>Напишите или позвоните: дата, место, повод и примерное число участников.</p></div><div><span>02</span><h3>Согласуем детали</h3><p>Обсудим формат, время и площадку. Проверим возможность проведения игры в выбранную дату.</p></div><div><span>03</span><h3>Подтвердим игру</h3><p>После отдельного согласования бронь будет подтверждена. Оплата — наличными при проведении.</p></div></div></div></section>

    <section className="section faq-section" id="faq"><div className="container faq-grid"><div><span className="eyebrow">08 / ВОПРОСЫ</span><h2>Перед тем,<br /><em>как сыграем.</em></h2><p>Не нашли ответ? Свяжитесь с нами удобным способом.</p><a href={BUSINESS.telegram} target="_blank" rel="noopener noreferrer" className="text-link">Написать в Telegram <ArrowUpRight size={18} /></a></div><div className="faq-list">{faq.map((item, index) => <details key={item.q}><summary><span className="faq-index">0{index + 1}</span><span>{item.q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></div></section>

    <section className="section booking-section"><div className="container"><ContactPrompt /></div></section>

    <section className="contact-section" id="contacts"><div className="container contact-grid"><div><span className="eyebrow">09 / КОНТАКТЫ</span><h2>Ваш следующий ход<br /><em>за вами.</em></h2><p>Геленджик, Кабардинка, Дивноморское, Новороссийск. Другие города — по согласованию.</p></div><div className="contact-actions"><a href={BUSINESS.telegram} target="_blank" rel="noopener noreferrer"><span>НАПИСАТЬ МНЕ В TELEGRAM</span><strong>@antimageru</strong><ArrowUpRight size={25} /></a><MaxNumber /><a href={BUSINESS.phoneHref}><span>ПОЗВОНИТЬ</span><strong>{BUSINESS.phoneDisplay}</strong><ArrowUpRight size={25} /></a></div></div></section>
  </>;
}
