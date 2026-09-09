export function formatIDR(amount: number): string {
  if (typeof amount !== "number" || isNaN(amount)) return "Rp 0";
  const formatted = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `Rp ${formatted}`;
}

export function formatUSD(amount: number): string {
  if (typeof amount !== "number" || isNaN(amount)) return "USD 0";
  const formatted = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `USD ${formatted}`;
}

const MONTHS_ID = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

export function formatDateID(dateString: string): string {
  // If date is already formatted or has letters, return cleaned string
  if (/[a-zA-Z]/.test(dateString)) {
    return dateString;
  }
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return `${date.getDate()} ${MONTHS_ID[date.getMonth()]} ${date.getFullYear()}`;
}
