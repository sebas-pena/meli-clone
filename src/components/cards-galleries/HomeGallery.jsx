import { ItemCard } from "../cards/ItemCard"

export const HomeGallery = ({ title, items }) => {
	return (
		<div className="gallery-ctn">
			<h2 className="gallery-title">{title}</h2>
			<div className="gallery-items-ctn">
				<div className="gallery-items">
					{items &&
						items.map((product) => (
							<ItemCard {...product} key={product.title} />
						))}
				</div>
				<button className="gallery-item-next">
					<i className="fi fi-angle-right"></i>
				</button>
			</div>
		</div>
	)
}
