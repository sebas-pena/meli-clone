import { useState, useEffect } from "react"

export const useGetProductDescription = (productId) => {
  const [description, setDescription] = useState("")

  useEffect(() => {
    const getProductQuestions = async (productId) => {
      const res = await (
        await fetch(
          `https://api.mercadolibre.com/items/${productId}/description`
        )
      ).json()

      setDescription(res.plain_text)
    }

    getProductQuestions(productId)
  }, [productId])
  return description
}
