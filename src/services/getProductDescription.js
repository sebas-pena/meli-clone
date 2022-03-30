export const getProductDescription = async (productId) => {
	const res = await (
		await fetch(`https://api.mercadolibre.com/items/${productId}/description`)
	).json()
	return res.plain_text
}
