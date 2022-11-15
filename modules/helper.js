export function prettyPrice(price) {
  return isNaN(price) ? "Unknown" : `${price.toLocaleString("fr-FR")} €`;
}
