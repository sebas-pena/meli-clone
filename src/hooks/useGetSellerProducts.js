import { useState, useEffect } from "react"

export const useGetSellerProducts = (sellerId) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function getSellerProducts() {
      const res = await (
        await fetch(
          `https://api.mercadolibre.com/sites/MLU/search?seller_id=${sellerId}&limit=12`
        )
      ).json()
      setProducts(res.results)
    }
    getSellerProducts()
  }, [sellerId])
  console.log(products)
  return products
}
