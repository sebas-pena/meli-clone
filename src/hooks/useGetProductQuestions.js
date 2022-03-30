import { useState, useEffect } from "react"

// unauthorized

export const useGetProductQuestions = (productId) => {
  const [questions, setQuestions] = useState({
    isLoading: true,
    questions: null,
  })

  useEffect(() => {
    const getProductQuestions = async (productId) => {
      const res = await (
        await fetch(
          `https://api.mercadolibre.com/questions/search?item=${productId}&api_version=4&limit=6`
        )
      ).json()

      console.log(res)
      setQuestions({
        questions: res.questions,
        isLoading: false,
      })
    }

    getProductQuestions(productId)
    console.log(questions)
  }, [productId])
  return questions
}
