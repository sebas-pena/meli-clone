import { useState, useEffect } from "react"

export const useGetProductsBySeller = (sellerId) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (sellerId) {
      async function getProducts() {
        const res = await (
          await fetch(
            `https://api.mercadolibre.com/sites/MLU/search?seller_id=${sellerId}&limit=12`
          )
        ).json()

        setProducts(res.results)
      }
      getProducts()
    }
  }, [sellerId])
  return products
}
