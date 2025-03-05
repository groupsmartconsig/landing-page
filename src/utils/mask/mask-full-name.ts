export const maskFullName = (value: string) => {
  return value
    .replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
};
