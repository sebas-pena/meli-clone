import { useEffect } from "react"
import { HomeGallery } from "../components/cards-galleries/HomeGallery"
import { useGetProducts } from "../hooks/useGetProducts"

// svg's

import { ProductDisplay } from "../components/product-page/ProductDisplay"
import { ProductSection } from "../components/product-page/sidebar/ProductSection"
import { ProductTopLinks } from "../components/product-page/ProductTopLinks"
export const ProductPage = () => {
  const products = useGetProducts()
  useEffect(() => {
    document.title = "Xiaomi Poco X3 Pro 8gb Ram 256gb Nuevo + Regalo Dimm"
  }, [])
  return (
    <main className="product-page">
      <div className="product-page__ctn">
        <ProductTopLinks />
        <div className="product-screen">
          <div className="product-info-side">
            <ProductDisplay />
          </div>
          <sidebar className="product-sidebar">
            <ProductSection />
            <section className="product-sidebar__sections"></section>
            <section className="product-sidebar__sections"></section>
            <section className="product-sidebar__sections"></section>
          </sidebar>
        </div>
        {/* Final */}
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
