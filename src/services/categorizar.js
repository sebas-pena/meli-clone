export const categorizar = async (query) => {
  const res = await (
    await fetch(
      `https://api.mercadolibre.com/sites/MLU/domain_discovery/search?limit=1&q=${encodeURIComponent(
        query
      )}`
    )
  ).json()
  console.log(res)
  return res[0].category_id
}
