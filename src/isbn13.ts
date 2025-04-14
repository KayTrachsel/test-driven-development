export function isValid(isbn: string): boolean {
  if (!/^\d{13}$/.test(isbn)) return false;

  const digits = isbn.split("").map(Number);
  const checkDigit = digits.pop()!;

  const sum = digits.reduce((acc, digit, idx) => {
    return acc + digit * (idx % 2 === 0 ? 1 : 3);
  }, 0);

  const expected = (10 - (sum % 10)) % 10;

  return checkDigit === expected;
}
