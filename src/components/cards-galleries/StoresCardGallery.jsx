import { StoreCard } from "../cards/StoreCard"

const StoresCardGallery = ({ stores }) => {
	return (
		<div className="stores-card-gallery">
			{stores.map((store, index) => (
				<StoreCard {...store} key={index * 20} />
			))}
		</div>
	)
}

export default StoresCardGallery
