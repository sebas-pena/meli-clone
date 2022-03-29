export const getTrends = async () => {
  const res = await (
    await fetch("https://api.mercadolibre.com/trends/MLU")
  ).json()
  return res
}
