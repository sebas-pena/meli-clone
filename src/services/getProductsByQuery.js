import { categorizar } from "./categorizar"
import { getProductsByCategoryId } from "./getProductsByCategoryId"

export const getProductsByQuery = async (query) => {
  const categoryId = await categorizar(query)
  const res = await getProductsByCategoryId(categoryId)
  return res.results
}

// https://api.mercadolibre.com/sites/MLU/search?q=autos
