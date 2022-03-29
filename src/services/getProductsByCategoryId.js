export const getProductsByCategoryId = async (categoryId = "MLU1055") => {
  const url = `https://api.mercadolibre.com/sites/MLU/search?category=${categoryId}`

  const res = await (await fetch(url)).json()
  return res
}
