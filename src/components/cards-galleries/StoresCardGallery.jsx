import { StoreCard } from "../cards/StoreCard"

const StoresCardGallery = ({ stores }) => {
	return (
		<div className="stores-card-gallery">
			{stores.map((store) => <StoreCard {...store} />)}
		</div>
	)
}

export default StoresCardGallery
