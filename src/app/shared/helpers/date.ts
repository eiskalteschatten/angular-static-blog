export function formatDate(date: string | Date): string {
  const _date = date instanceof Date ? date : new Date(date);

  return _date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
