import { useState, useEffect } from "react"

export const useGetProductsByQuery = (query) => {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    const getProducts = async () => {
      const res = await (
        await fetch(
          `https://api.mercadolibre.com/sites/MLU/search?q=${query}&limit=12`
        )
      ).json()

      const products = res.results.map(
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
      setProducts(
        products
      )
    }
    getProducts()
  }, [query])

  return products
}
