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
import { getProductDescription } from "../services/getProductDescription"
export const ProductPage = () => {
	const products = useGetProducts()
	useEffect(() => {
		getProductDescription("MLU606282854")
		document.title = "Xiaomi Poco X3 Pro 8gb Ram 256gb Nuevo + Regalo Dimm"
	}, [])
	return (
		<main className="product-page">
			<div className="product-page__ctn">
				<ProductTopLinks />
				<div className="product-screen">
					<div className="product-info-side">
						<ProductDisplay />
						<SellerPosts />
						<Description />
						<QuestionsAndAnswers />
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
	)
}
