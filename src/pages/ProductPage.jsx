import { useEffect } from "react"
import { HomeGallery } from "../components/cards-galleries/HomeGallery"
import { useGetProducts } from "../hooks/useGetProducts"

import { ProductDisplay } from "../components/product-page/ProductDisplay"
import { ProductSection } from "../components/product-page/sidebar/ProductSection"
import { ProductTopLinks } from "../components/product-page/ProductTopLinks"
import { SellerInfoSection } from "../components/product-page/sidebar/SellerInfoSection"
import { GuaranteeSection } from "../components/product-page/sidebar/GuaranteeSection"
import { PaymentMethodsSection } from "../components/product-page/sidebar/PaymentMethodsSection"
import { Description } from "../components/product-page/product-side/Description"
import { SellerPosts } from "../components/product-page/product-side/SellerPosts"
import { QuestionsAndAnswers } from "../components/product-page/product-side/QuestionsAndAnswers"
import { useGetProductById } from "../hooks/useGetProductById"
import { useParams } from "react-router-dom"
import { ProductPageContext } from "../context/ProductPageContext"
export const ProductPage = () => {
	const products = useGetProducts()
	const { productId } = useParams()
	const { product } = useGetProductById(productId)
	console.log(product)

	useEffect(() => {
		document.title = product ? product.title : "Mercado Libre Uruguay"
	}, [product])
	return (
		<ProductPageContext.Provider value={product}>
			<main className="product-page">
				<div className="product-page__ctn">
					<ProductTopLinks />
					<div className="product-screen">
						<div className="product-info-side">
							<ProductDisplay />
							<div className="description-ctn">
								<SellerPosts />
								<Description />
								<QuestionsAndAnswers />
							</div>
						</div>
						<sidebar className="product-sidebar">
							<div>
								<ProductSection />
								<SellerInfoSection />
								<GuaranteeSection />
								<PaymentMethodsSection />
							</div>
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
		</ProductPageContext.Provider>
	)
}
