export function maskCEP(value: string): string {
  if (!value) return "";

  const cep = value.replace(/\D/g, '');
  const cepTruncado = cep.slice(0, 8);
  
  return cepTruncado.replace(/(\d{5})(\d)/, '$1-$2');
}