import { useState, useEffect } from "react"
import { getProductsByQuery } from "../services/getProductsByQuery"

export const useGetProductsByQuery = (query) => {
  const [products, setProducts] = useState({
    isLoading: true,
    products: null,
  })
  useEffect(() => {
    async function fetchData() {
      const res = await getProductsByQuery(query)

      const products = res.map(
        ({ id, currency_id, price, title, thumbnail_id, shipping }) => ({
          id,
          currency: currency_id,
          price,
          title,
          imageUrl: `https://http2.mlstatic.com/D_Q_NP_${thumbnail_id}-AB.webp`,
          freeShipping: shipping.free_shipping,
          onSale: 10,
          maxInstallments: 10,
        })
      )
      setProducts({
        isLoading: false,
        products,
      })
    }
    fetchData()
  }, [query])
  return products
}
