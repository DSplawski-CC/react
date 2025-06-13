export function getYearFromDate(date: string) {
  return String(new Date(date).getFullYear());
}