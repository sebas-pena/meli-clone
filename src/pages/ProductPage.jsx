import React from "react"
import { Link } from "react-router-dom"
import { HomeGallery } from "../components/cards-galleries/HomeGallery"
import { useGetProducts } from "../hooks/useGetProducts"
import Arrow from "../assets/svgs/arrow.svg"
import BlueStarFull from "../assets/svgs/blue-star-full.svg"
import QuestionIcon from "../assets/svgs/question-icon.svg"
export const ProductPage = () => {
  const products = useGetProducts()
  return (
    <main className="product-page">
      <div className="product-page__ctn">
        <div className="product-page__top-links">
          <ul className="product__suggestions ">
            <li>También puede interesarte:</li>
            <li>
              <Link to="algo">samsung s22 ultra</Link>
            </li>
            <li>
              <Link to="algo">telefono</Link>
            </li>
            <li>
              <Link to="algo">samsung galaxy s22</Link>
            </li>
            <li>
              <Link to="algo">galaxy s22</Link>
            </li>
            <li>
              <Link to="algo">s22</Link>
            </li>
          </ul>
          <ul className="product__categories ">
            <li className="product__bar-divisor">
              <Link to="algo">Volver al listado</Link>
            </li>
            <li>
              <Link to="algo">Celulares y Telefonía</Link>
              <img src={Arrow} alt="" />
            </li>
            <li>
              <Link to="algo">Celulares y Smartphones</Link>
              <img src={Arrow} alt="" />
            </li>
            <li>
              <Link to="algo">Xiaomi</Link>
            </li>
            <li className="product__bar-divisor">
              <Link to="algo">Compartir</Link>
            </li>
            <li>
              <Link to="algo">Vender uno igual</Link>
            </li>
          </ul>
        </div>

        <div className="product-screen">
          <div className="product-side"></div>
          <sidebar className="product-sidebar">
            <section className="product-sidebar__sections">
              <p className="product__amount">Nuevo | 211 vendidos</p>
              <h2 className="prodduct__title">
                Xiaomi Poco X3 Pro 8gb Ram 256gb Nuevo + Regalo Dimm
              </h2>
              <div className="product-rating__ctn">
                <div className="product-rating__starts-ctn">
                  <img src={BlueStarFull} alt="" />
                  <img src={BlueStarFull} alt="" />
                  <img src={BlueStarFull} alt="" />
                  <img src={BlueStarFull} alt="" />
                  <img src={BlueStarFull} alt="" />
                </div>
                <p className="product-rating__reviews-amount">361 opiniones</p>
              </div>
              <div className="product-price__ctn">
                <p className="product-price">
                  <span className="product-price__currency">U$S </span>
                  <span className="product-price__price">449</span>
                </p>
                <div className="product-price__modal">
                  <img src={QuestionIcon} alt="" />
                </div>
              </div>
            </section>
            <section className="product-sidebar__sections"></section>
            <section className="product-sidebar__sections"></section>
            <section className="product-sidebar__sections"></section>
          </sidebar>
        </div>
        {!products.isLoading ? (
          <>
            <HomeGallery products={products.products} />
            <HomeGallery products={products.products} />
            <HomeGallery products={products.products} />
          </>
        ) : (
          ""
        )}
      </div>
    </main>
  )
}
