import { categorizar } from "./categorizar"
import { getProductsByCategoryId } from "./getProductsByCategoryId"

export const getProductsByQuery = async (query) => {
  const categoryId = await categorizar(query)
  const res = await getProductsByCategoryId(categoryId)
  console.log(query)
  return res.results
}
