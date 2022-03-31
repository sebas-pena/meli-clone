import { useEffect } from "react"
import { HomeGallery } from "../components/cards-galleries/HomeGallery"

import { ProductDisplay } from "../components/product-page/product-side/ProductDisplay"
import { ProductTopLinks } from "../components/product-page/product-side/ProductTopLinks"
import { ProductSection } from "../components/product-page/aside/ProductSection"
import { SellerInfoSection } from "../components/product-page/aside/SellerInfoSection"
import { GuaranteeSection } from "../components/product-page/aside/GuaranteeSection"
import { PaymentMethodsSection } from "../components/product-page/aside/PaymentMethodsSection"
import { Description } from "../components/product-page/product-side/Description"
import { SellerPosts } from "../components/product-page/product-side/SellerPosts"
import { QuestionsAndAnswers } from "../components/product-page/product-side/QuestionsAndAnswers"
import { useGetProductById } from "../hooks/useGetProductById"
import { useParams } from "react-router-dom"
import { ProductPageContext } from "../context/ProductPageContext"
import { useGetProductsBySeller } from "../hooks/useGetProductsBySeller"
import { useGetProductsByCategory } from "../hooks/useGetProductsByCategory"

export const ProductPage = () => {
	const { productId } = useParams()
	const { product } = useGetProductById(productId)
	const sellerProducts = useGetProductsBySeller(
		product ? product.seller_id : ""
	)
	const similarProducts = useGetProductsByCategory(
		product ? product.category_id : ""
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
							<div className="seller-posts">
								<SellerPosts items={sellerProducts} />
							</div>
							<div className="description-ctn">
								<Description />
								<QuestionsAndAnswers />
							</div>
						</div>
						<aside className="product-aside">
							<div>
								<ProductSection />
								<SellerInfoSection />
								<GuaranteeSection />
								<PaymentMethodsSection />
							</div>
						</aside>
					</div>
					<HomeGallery title="Productos similares" items={similarProducts} />
					<HomeGallery />
					<HomeGallery />
				</div>
			</main>
		</ProductPageContext.Provider>
	)
}
