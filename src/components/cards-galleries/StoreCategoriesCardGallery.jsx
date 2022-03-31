import { StoreCategoryCard } from "../cards/StoreCategoryCard"

export const StoreCategoriesCardGallery = ({ categories }) => {
	return (
		<div className="store-categories-card-gallery">
			{categories.map((category) => (
				<StoreCategoryCard
					{...category}
					key={category.is}
					alt={category.title}
				/>
			))}
		</div>
	)
}
