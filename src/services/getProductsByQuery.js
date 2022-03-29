export const getProductsByQuery = async (query) => {
	const res = await (
		await fetch(
			`https://api.mercadolibre.com/sites/MLU/search?q=${query}&limit=12`
		)
	).json()

	return res.results
}
