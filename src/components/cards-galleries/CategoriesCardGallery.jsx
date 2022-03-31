import React from "react"
import { CategoryCard } from "../cards/CategoryCard"

export const CategoriesCardGallery = ({ categories }) => {
	return (
		<div className="Categories-Card-Gallery-ctn">
			<p className="gallery-title">Descubre</p>
			<div className="Categories-Card-Gallery">
				{categories.map((category) => (
					<CategoryCard {...category} key={category.title} />
				))}
			</div>
		</div>
	)
}
