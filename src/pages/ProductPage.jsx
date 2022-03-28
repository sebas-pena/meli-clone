import React from "react"
import { Link } from "react-router-dom"
import { HomeGallery } from "../components/cards-galleries/HomeGallery"
import { useGetProducts } from "../hooks/useGetProducts"

export const ProductPage = () => {
	const products = useGetProducts()
	return (
		<div className="product-page__ctn">
			<p>
				También puede interesartesamsung s22 ultratelefonosamsung galaxy
				s22galaxy s22s22
			</p>
			<ul className="product-page__links">
				<li>
					<Link to="algo">Volver al listado</Link>
				</li>
				<li>
					<Link to="algo">Celulares y Telefonía</Link>
				</li>
				<li>
					<Link to="algo">Celulares y Smartphones</Link>
				</li>
				<li>
					<Link to="algo">Xiaomi</Link>
				</li>
				<li>
					<Link to="algo">Compartir</Link>
				</li>
				<li>
					<Link to="algo">Vender uno igual</Link>
				</li>
			</ul>
			<div className="product-screen">
				<div className="product-side"></div>
				<sidebar className="product-sid"></sidebar>
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
	)
}
