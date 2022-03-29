import { useEffect, useState } from "react"
import { getProductsByQuery } from "../../services/getProductsByQuery"
import { ItemCard } from "../cards/ItemCard"

export const HomeGallery = ({ title, products, isLoading, query }) => {
  /* eslint-disable */
  const [products2, setProducts] = useState({
    products: null,
    isLoading: true,
  })
  useEffect(async () => {
    query ? setProducts(await getProductsByQuery(query)) : ""
  }, [])
  useEffect(() => {
    console.log(products2)
  }, [products2])
  return (
    <div className="gallery-ctn">
      <h2 className="gallery-title">{title}</h2>
      <div className="gallery-items-ctn">
        <div className="gallery-items">
          {!isLoading &&
            products.map((product) => (
              <ItemCard {...product} key={product.title} />
            ))}
        </div>
        <button className="gallery-item-next">
          <i className="fi fi-angle-right"></i>
        </button>
      </div>
    </div>
  )
}
