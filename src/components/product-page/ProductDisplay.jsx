import { useContext, useEffect, useState } from "react"
import { ProductPageContext } from "../../context/ProductPageContext"

export const ProductDisplay = () => {
  const product = useContext(ProductPageContext)
  const [displayPictureId, setDisplayPictureId] = useState("")
  const [picturesId, setPicturesId] = useState([])

  useEffect(() => {
    if (product) {
      let productPictures = product.pictures
        .slice(0, 6)
        .map((picture) => picture.id)
      setDisplayPictureId(productPictures[0])
      setPicturesId(productPictures)
    }
  }, [product])

  const handleDisplayChange = ({ target }) => {
    setDisplayPictureId(picturesId[target.getAttribute("position")])
  }

  return (
    product && (
      <section className="product-info-side__section product-display">
        <ul className="product-images">
          {picturesId.map((pictureId, index) => (
            <li className="product-image" alt="" key={pictureId}>
              <img
                onMouseEnter={handleDisplayChange}
                position={index}
                src={`https://http2.mlstatic.com/D_Q_NP_${pictureId}-R.webp`}
                alt="product"
              />
            </li>
          ))}
        </ul>
        <div className="product-image-display">
          <img
            src={`https://http2.mlstatic.com/D_NQ_NP_${displayPictureId}-O.webp`}
            alt="product"
          />
        </div>
      </section>
    )
  )
}
