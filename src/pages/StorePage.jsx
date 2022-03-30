import { Carrousel } from "../components/Carrousel"
import { StoreCategoriesCardGallery } from "../components/cards-galleries/StoreCategoriesCardGallery"
import { storePageData } from "../mocks/storePageData"

export const StorePage = () => {
	const { sliderImages, storeCategories, banner } = storePageData

	return (
		<div className="store-page">
			<Carrousel images={sliderImages} />
			<div className="store-page__ctn">
				<img className="store-page__banner" src={banner} alt="store banner" />

				<StoreCategoriesCardGallery categories={storeCategories} />

				<div className="store-page__video-ctn">
					<iframe
						className="video"
						src="https://www.youtube.com/embed/3pRwSGcDm7A"
						allowFullscreen=""
						frameBorder="0"
						title="3pRwSGcDm7A"
						height="666"
					></iframe>
				</div>
			</div>
		</div>
	)
}
