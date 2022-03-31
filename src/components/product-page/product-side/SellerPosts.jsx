import React from "react"
import { HomeGallery } from "../../cards-galleries/HomeGallery"

export const SellerPosts = ({ items }) => {
	return (
		<div>
			<h2>Publicacione del vendedor</h2>
			<HomeGallery items={items} />
			<a className="product-link">Ver más publicaciones del vendedor</a>
		</div>
	)
}
