import { useEffect } from "react"

import { useGetProductsByQuery } from "../hooks/useGetProductsByQuery"
import { homePageData } from "../mocks/homePageData"
import { Carrousel } from "../components/Carrousel"
import { CategoriesCardGallery } from "../components/cards-galleries/CategoriesCardGallery"
import { HomeGallery } from "../components/cards-galleries/HomeGallery"
import { PaymentMethodsInfo } from "../components/PaymentMethodsInfo"
import StoresCardGallery from "../components/cards-galleries/StoresCardGallery"
import { ShoppingInfo } from "../components/ShoppingInfo"

import bannerImg from "../assets/images/banners/banner1.jpg"

export const HomePage = () => {
	const { stores, sliderImages, homeCategories } = homePageData
	let ultimaBusqueda = "samsung s22"

	const lastSearchItems = useGetProductsByQuery(ultimaBusqueda)
	const iphoneItems = useGetProductsByQuery("iphone")
	useEffect(() => {
		document.title = "Mercado Libre Uruguay"
	}, [])
	return (
		<>
			<div className="home__ctn">
				<Carrousel images={sliderImages} />
				<div className="home__content">
					<PaymentMethodsInfo />
					<HomeGallery
						title="Basado en tu última busqueda"
						items={lastSearchItems}
					/>
					<HomeGallery title="Celulares iphone" items={iphoneItems} />
					<img
						className="home__banner"
						src={bannerImg}
						alt="envios a todo el país"
					/>
					<CategoriesCardGallery categories={homeCategories} />
					<StoresCardGallery stores={stores} />
				</div>
			</div>
			<ShoppingInfo />
		</>
	)
}
