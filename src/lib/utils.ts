import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFCFA(value: number) {
  const n = Number(value) || 0
  const isNegative = n < 0
  const abs = Math.abs(n)
  const hasNoCents = Math.round(abs * 100) % 100 === 0
  const formatted = hasNoCents ? String(Math.round(abs)) : abs.toFixed(2)
  return `${isNegative ? "-" : ""}${formatted} FCFA`
}

export function parseAndFormatFCFA(input: string) {
  const s = String(input || "").trim()
  // remove surrounding brackets and whitespace
  const unbr = s.replace(/^\[|\]$/g, "").trim()
  // remove currency label, commas and spaces
  const cleaned = unbr.replace(/FCFA/ig, "").replace(/,/g, "").replace(/\s+/g, "")
  const num = Number(cleaned)
  if (Number.isNaN(num)) return input
  return formatFCFA(num)
}
