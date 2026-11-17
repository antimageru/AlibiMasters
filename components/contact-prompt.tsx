"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function MaxNumber() {
  const [copied, setCopied] = useState(false);

  async function copyMaxNumber() {
    try {
      await navigator.clipboard.writeText(BUSINESS.phoneDisplay);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return <div className="contact-prompt-max"><span><small>НАЙТИ МЕНЯ В MAX ПО НОМЕРУ</small><strong>{BUSINESS.phoneDisplay}</strong></span><button type="button" onClick={copyMaxNumber} aria-label="Скопировать номер для MAX">{copied ? <Check size={21} /> : <Copy size={21} />}<span>{copied ? "Скопировано" : "Скопировать"}</span></button></div>;
}

export function ContactPrompt() {
  return <div className="contact-prompt" id="booking">
    <div className="contact-prompt-copy">
      <span className="eyebrow">СЛЕДУЮЩИЙ ШАГ</span>
      <h2>Давайте устроим<br /><em>вашу игру.</em></h2>
      <p>Напишите мне в Telegram или найдите в MAX по номеру. Для разговора достаточно вашего имени и телефона — остальные детали обсудим вместе.</p>
    </div>
    <div className="contact-prompt-actions">
      <a className="contact-prompt-link contact-prompt-primary" href={BUSINESS.telegram} target="_blank" rel="noopener noreferrer"><span><small>НАПИСАТЬ МНЕ В TELEGRAM</small><strong>@antimageru</strong></span><ArrowUpRight size={23} aria-hidden="true" /></a>
      <MaxNumber />
      <a className="contact-prompt-call" href={BUSINESS.phoneHref}><Phone size={17} aria-hidden="true" /> Позвонить: {BUSINESS.phoneDisplay}</a>
    </div>
  </div>;
}
