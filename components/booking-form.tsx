"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, CircleAlert } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { Button } from "@/components/ui/button";

type FormFields = {
  name: string; phone: string; date: string; time: string; duration: string;
  participants: string; location: string; eventType: string; comment: string; consent: boolean;
};

const initial: FormFields = { name: "", phone: "", date: "", time: "", duration: "2", participants: "", location: "", eventType: "", comment: "", consent: false };

export function BookingForm() {
  const [form, setForm] = useState<FormFields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const today = new Date().toLocaleDateString("sv-SE");

  function update<K extends keyof FormFields>(field: K, value: FormFields[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Укажите имя.";
    if (!/^\+?[\d\s()\-]{10,20}$/.test(form.phone.trim()) || form.phone.replace(/\D/g, "").length < 10) next.phone = "Введите номер телефона с кодом города или страны.";
    if (!form.date || form.date < today) next.date = "Выберите сегодняшнюю или будущую дату.";
    if (!form.time) next.time = "Укажите время начала.";
    if (!Number.isInteger(Number(form.duration)) || Number(form.duration) < BUSINESS.minimumDurationHours) next.duration = "Минимальная длительность — 2 часа.";
    if (!Number.isInteger(Number(form.participants)) || Number(form.participants) < 1) next.participants = "Укажите количество участников.";
    if (!form.location.trim()) next.location = "Укажите адрес или район.";
    if (!form.eventType) next.eventType = "Выберите тип мероприятия.";
    if (!form.consent) next.consent = "Необходимо согласие на обработку данных.";
    setErrors(next);
    if (Object.keys(next).length) {
      const firstInvalid = Object.keys(next)[0];
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    setSending(true);
    // Демонстрационный режим: данные остаются только в состоянии браузера.
    window.setTimeout(() => { setSending(false); setSubmitted(true); }, 350);
  }

  const input = (key: keyof FormFields, label: string, type = "text", placeholder = "", required = true) => <label className="form-field" htmlFor={key} key={key}>
    <span>{label}{required && <b aria-hidden="true"> *</b>}</span>
    <input id={key} name={key} type={type} value={String(form[key])} placeholder={placeholder} required={required} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `${key}-error` : undefined} min={key === "date" ? today : key === "duration" ? "2" : key === "participants" ? "1" : undefined} step={key === "duration" || key === "participants" ? "1" : undefined} onChange={(e) => update(key, e.target.value as never)} />
    {errors[key] && <small id={`${key}-error`} className="field-error">{errors[key]}</small>}
  </label>;

  return <div className="booking-card" id="booking">
    <div className="booking-intro"><span className="eyebrow">СЛЕДУЮЩИЙ ШАГ</span><h2>Давайте устроим<br /><em>вашу игру.</em></h2><p>Заполните детали, чтобы подготовиться к разговору. Пока форма работает в демонстрационном режиме и не отправляет заявку.</p><div className="demo-notice"><CircleAlert size={18} /><span>Для реального бронирования позвоните или напишите в Telegram.</span></div></div>
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        {input("name", "Имя", "text", "Как к вам обращаться")}
        {input("phone", "Телефон", "tel", "+7 999 000-00-00")}
        {input("date", "Дата мероприятия", "date")}
        {input("time", "Время начала", "time")}
        {input("duration", "Длительность, часов", "number")}
        {input("participants", "Количество участников", "number")}
        {input("location", "Адрес или район", "text", "Например, Геленджик")}
        <label className="form-field" htmlFor="eventType"><span>Тип мероприятия <b aria-hidden="true">*</b></span><select id="eventType" name="eventType" value={form.eventType} required aria-invalid={Boolean(errors.eventType)} aria-describedby={errors.eventType ? "eventType-error" : undefined} onChange={(e) => update("eventType", e.target.value)}><option value="">Выберите формат</option><option>День рождения</option><option>Частная вечеринка</option><option>Корпоратив</option><option>Тимбилдинг</option><option>Туристическое мероприятие</option><option>Другое</option></select>{errors.eventType && <small id="eventType-error" className="field-error">{errors.eventType}</small>}</label>
        <label className="form-field field-full" htmlFor="comment"><span>Комментарий</span><textarea id="comment" name="comment" value={form.comment} onChange={(e) => update("comment", e.target.value)} placeholder="Расскажите о пожеланиях к игре" rows={3} /></label>
      </div>
      <label className="consent"><input type="checkbox" checked={form.consent} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} onChange={(e) => update("consent", e.target.checked)} /><span>Я согласен(на) на обработку персональных данных и ознакомлен(а) с <Link href="/privacy">политикой конфиденциальности</Link>.</span></label>
      {errors.consent && <small id="consent-error" className="field-error">{errors.consent}</small>}
      <Button type="submit" className="form-submit" disabled={sending}>{sending ? "Проверяем данные…" : "Проверить данные"}<ArrowUpRight size={18} /></Button>
      {submitted && <div className="form-result" role="status"><strong>Данные заполнены, но заявка не отправлена.</strong><span>Форма демонстрационная. Свяжитесь с нами напрямую, чтобы обсудить дату и подтвердить бронирование.</span><div><a href={BUSINESS.phoneHref}>Позвонить</a><a href={BUSINESS.telegram} target="_blank" rel="noopener noreferrer">Написать в Telegram</a></div></div>}
    </form>
  </div>;
}
