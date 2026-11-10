export const BUSINESS = {
  name: "AlibiMasters",
  phoneDisplay: "+7 928 240-20-69",
  phoneHref: "tel:+79282402069",
  telegram: "https://t.me/antimageru",
  hourlyRate: 4000,
  minimumDurationHours: 2,
  defaultDurationHours: 2,
  timezone: "Europe/Moscow",
  serviceAreas: ["Геленджик", "Кабардинка", "Дивноморское", "Большой Геленджик", "Новороссийск"],
} as const;

export function calculatePrice(durationHours: number): number {
  if (!Number.isInteger(durationHours) || durationHours < BUSINESS.minimumDurationHours) {
    throw new RangeError("Длительность должна быть целым числом от 2 часов.");
  }
  return durationHours * BUSINESS.hourlyRate;
}

export function formatRubles(amount: number): string {
  return `${new Intl.NumberFormat("ru-RU").format(amount)} ₽`;
}
