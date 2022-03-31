import { useEffect } from "react"
import { HomeGallery } from "../components/cards-galleries/HomeGallery"

import { ProductDisplay } from "../components/product-page/product-side/ProductDisplay"
import { ProductTopLinks } from "../components/product-page/product-side/ProductTopLinks"
import { ProductSection } from "../components/product-page/sidebar/ProductSection"
import { SellerInfoSection } from "../components/product-page/sidebar/SellerInfoSection"
import { GuaranteeSection } from "../components/product-page/sidebar/GuaranteeSection"
import { PaymentMethodsSection } from "../components/product-page/sidebar/PaymentMethodsSection"
import { Description } from "../components/product-page/product-side/Description"
import { SellerPosts } from "../components/product-page/product-side/SellerPosts"
import { QuestionsAndAnswers } from "../components/product-page/product-side/QuestionsAndAnswers"
import { useGetProductById } from "../hooks/useGetProductById"
import { useParams } from "react-router-dom"
import { ProductPageContext } from "../context/ProductPageContext"
import { useGetProductsBySeller } from "../hooks/useGetProductsBySeller"

export const ProductPage = () => {
	const { productId } = useParams()
	const { product } = useGetProductById(productId)
	const sellerProducts = useGetProductsBySeller(
		product ? product.seller_id : ""
	)
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
								<SellerPosts items={sellerProducts} />
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
					<HomeGallery />
					<HomeGallery />
					<HomeGallery />
				</div>
			</main>
		</ProductPageContext.Provider>
	)
}
