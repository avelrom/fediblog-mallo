/** Ayudas de la galería de Mallo (calendario y panel de fotos) sobre las entradas del core. */
import type { Nota } from '@fediblog/core/lib/notas';

export interface MonthGroup {
  key: string;
  year: number;
  month: number;
  monthName: string;
  daysInMonth: number;
  entriesByDay: Record<number, Nota[]>;
}

const MONTH_NAMES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

export function groupNotasByMonth(notas: Nota[]): MonthGroup[] {
  const monthsMap = new Map<string, MonthGroup>();

  for (const nota of notas) {
    const d = nota.data.date;
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const key = `${year}-${String(month).padStart(2, '0')}`;

    if (!monthsMap.has(key)) {
      const daysInMonth = new Date(year, month, 0).getDate();
      monthsMap.set(key, {
        key,
        year,
        month,
        monthName: MONTH_NAMES[month - 1],
        daysInMonth,
        entriesByDay: {},
      });
    }

    if (!monthsMap.get(key)!.entriesByDay[day]) {
      monthsMap.get(key)!.entriesByDay[day] = [];
    }
    monthsMap.get(key)!.entriesByDay[day].push(nota);
  }

  return Array.from(monthsMap.values()).sort((a, b) => b.key.localeCompare(a.key));
}
