import { useLayoutEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import { Footer } from "../components/Footer"
import { HomePage } from "../pages/HomePage"
import { PageNotFound } from "../pages/PageNotFound"
import { StorePage } from "../pages/StorePage"
import { Nav } from "../components/nav/Nav"
import { ProductPage } from "../pages/ProductPage"

export const DashboardRouter = () => {
	const location = useLocation()
	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])

	return (
		<>
			<Nav />
			<Routes>
				<Route path="home" element={<HomePage />} />
				<Route path="store/*" element={<StorePage />} />
				<Route path="product/:productId" element={<ProductPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</>
	)
}
