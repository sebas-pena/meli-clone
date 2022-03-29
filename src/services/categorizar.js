export const categorizar = async (query) => {
  const res = await (
    await fetch(
      `https://api.mercadolibre.com/sites/MLU/domain_discovery/search?limit=8&q=${encodeURIComponent(
        query
      )}`
    )
  ).json()
  console.log(query)
  console.log(res)
  console.log("arriba")
  return res[0].category_id
}
