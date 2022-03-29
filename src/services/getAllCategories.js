export const getAllCategories = async () => {
  const res = await (
    await fetch("https://api.mercadolibre.com/sites/MLU/categories")
  ).json()

  console.log(res)
  return res
}
