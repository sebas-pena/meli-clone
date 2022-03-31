import React from "react"
import { ItemsGallery } from "../../cards-galleries/ItemsGallery"

export const SellerPosts = ({ items }) => {
	return (
		items && (
			<div>
				<h2>Publicacione del vendedor</h2>
				<ItemsGallery items={items} />
				<a className="product-link">Ver más publicaciones del vendedor</a>
			</div>
		)
	)
}
