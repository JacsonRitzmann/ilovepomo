import { clsx, type ClassValue } from 'clsx'
import { Type } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const parametros = {
  linkTelegram: "https://t.me/ilovepomo_support",
  emailSuporte: "suporte@ilovepomo.com"
}

export type Plano = {
  id: string;
  nome: string;
  active: boolean;
  price: { [key: string]: string }[];
  itensInclusos: string[];
}

export const planosDisponiveis: Plano[] = [
  {
    id: 'gratuito', nome: 'Gratuito', active: true, price: [{
      br: 'R$ 0.00'
    }], itensInclusos: [
      "Timer Pomodoro completo",
      "Gestão básica de tarefas",
      "3 sons ambiente",
      "Relatórios semanais básicos",
    ]
  },
  {
    id: 'pro', nome: 'Pro', active: false, price: [{
      br: 'R$ 19.90'
    }], itensInclusos: [
      "Tudo do plano Free",
      "Mais sons ambiente ",
      "Relatórios avançados",
      "Calendário completo",
      "Dicas personalizadas de bem-estar",
      "Tema personalizável",
      "Suporte prioritário"]
  },
]

export function getPlanoById(planoId: string) {
  return planosDisponiveis.find((plano) => plano.id === planoId)
}

export function isActivePlano(planoId: string) {
  const plano = getPlanoById(planoId)
  return plano ? plano.active : false
}

export function pricePlano(planoId: string, currency: string = 'br') {
  const plano = getPlanoById(planoId)
  return plano ? plano.price.find((p) => p[currency])?.[currency] : 0
}


