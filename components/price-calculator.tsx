"use client";

import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { BUSINESS, calculatePrice, formatRubles } from "@/lib/business";
import { Button } from "@/components/ui/button";

export function PriceCalculator() {
  const [duration, setDuration] = useState<number>(BUSINESS.defaultDurationHours);
  const total = calculatePrice(duration);

  return <div className="calculator-card" id="price">
    <div className="calculator-top"><span className="eyebrow">ПРОЗРАЧНАЯ СТОИМОСТЬ</span><span className="calculator-symbol" aria-hidden="true">✳</span></div>
    <h3>Ваша игра.<br /><em>Ваше время.</em></h3>
    <p>Выберите продолжительность — стоимость пересчитается сразу.</p>
    <div className="calculator-controls">
      <div><span className="field-caption">Продолжительность</span><strong>{duration} {duration % 10 === 1 && duration % 100 !== 11 ? "час" : [2, 3, 4].includes(duration % 10) && !(duration % 100 >= 12 && duration % 100 <= 14) ? "часа" : "часов"}</strong></div>
      <div className="stepper" aria-label="Продолжительность игры в часах">
        <button type="button" aria-label="Уменьшить длительность" disabled={duration <= BUSINESS.minimumDurationHours} onClick={() => setDuration((v) => Math.max(BUSINESS.minimumDurationHours, v - 1))}><Minus size={18} /></button>
        <span aria-live="polite">{duration}</span>
        <button type="button" aria-label="Увеличить длительность" onClick={() => setDuration((v) => v + 1)}><Plus size={18} /></button>
      </div>
    </div>
    <div className="calculator-result"><span>Итого за игру</span><strong aria-live="polite">{formatRubles(total)}</strong></div>
    <p className="price-note">Оплата наличными при проведении мероприятия</p>
    <Button asChild className="calc-cta"><a href="#booking">Обсудить дату <ArrowUpRight size={18} /></a></Button>
    <div className="calculator-foot">От 2 часов · Цена не зависит от числа участников · Выезд и реквизит включены в стандартной географии</div>
  </div>;
}
