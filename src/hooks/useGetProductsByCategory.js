import { useState, useEffect } from "react"

export const useGetProductsByCategory = (categoryId) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		if (categoryId) {
			async function getProducts() {
				const res = await (
					await fetch(
						`https://api.mercadolibre.com/sites/MLU/search?category=${categoryId}&limit=12`
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
	}, [categoryId])
	return products
}
