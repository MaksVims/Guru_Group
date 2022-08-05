
export function getFormatDate(date: number) {
  return Intl.DateTimeFormat('ru', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}