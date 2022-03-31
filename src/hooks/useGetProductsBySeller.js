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
        
        setProducts(products)
      }
      getProducts()
    }
  }, [sellerId])
  return products
}
