import { useEffect, useState } from "react"

export const useGetProductById = (productId) => {
	const [product, setProduct] = useState({
		isLoading: true,
		product: null,
	})

	useEffect(() => {
		async function getProductById() {
			const res = await (
				await fetch(`https://api.mercadolibre.com/items/${productId}`)
			).json()
			setProduct({
				product: res,
				isLoading: false,
			})
		}

		getProductById()
	}, [productId])

	return product
}
