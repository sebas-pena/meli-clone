import React from "react"
import { Link } from "react-router-dom"
import { HomeGallery } from "../components/cards-galleries/HomeGallery"
import { useGetProducts } from "../hooks/useGetProducts"

// svg's
import ProtectedIcon from "../assets/svgs/protected-icon.svg"
import AwardIcon from "../assets/svgs/award-icon.svg"
import ShippingTruckIcon from "../assets/svgs/shipping-truck-icon.svg"
import Arrow from "../assets/svgs/arrow.svg"
import BlueStarFull from "../assets/svgs/blue-star-full.svg"
import QuestionIcon from "../assets/svgs/question-icon.svg"
import { ProductDisplay } from "../components/product-page/ProductDisplay"
export const ProductPage = () => {
	const products = useGetProducts()
	return (
		<main className="product-page">
			<div className="product-page__ctn">
				<div className="product-page__top-links">
					<ul className="product__suggestions ">
						<li>También puede interesarte:</li>
						<li>
							<Link to="algo">samsung s22 ultra</Link>
						</li>
						<li>
							<Link to="algo">telefono</Link>
						</li>
						<li>
							<Link to="algo">samsung galaxy s22</Link>
						</li>
						<li>
							<Link to="algo">galaxy s22</Link>
						</li>
						<li>
							<Link to="algo">s22</Link>
						</li>
					</ul>
					<ul className="product__categories ">
						<li className="product__bar-divisor">
							<Link to="algo">Volver al listado</Link>
						</li>
						<li>
							<Link to="algo">Celulares y Telefonía</Link>
							<img src={Arrow} alt="" />
						</li>
						<li>
							<Link to="algo">Celulares y Smartphones</Link>
							<img src={Arrow} alt="" />
						</li>
						<li>
							<Link to="algo">Xiaomi</Link>
						</li>
						<li className="product__bar-divisor">
							<Link to="algo">Compartir</Link>
						</li>
						<li>
							<Link to="algo">Vender uno igual</Link>
						</li>
					</ul>
				</div>

				<div className="product-screen">
					<div className="product-info-side">
						<ProductDisplay />
					</div>
					<sidebar className="product-sidebar">
						<section className="product-sidebar__sections product-sidebar__product-seciton">
							<p className="product__amount">Nuevo | 211 vendidos</p>
							<h2 className="prodduct__title">
								Xiaomi Poco X3 Pro 8gb Ram 256gb Nuevo + Regalo Dimm
							</h2>

							<div className="product-rating__ctn">
								<div className="product-rating__starts-ctn">
									<img src={BlueStarFull} alt="" />
									<img src={BlueStarFull} alt="" />
									<img src={BlueStarFull} alt="" />
									<img src={BlueStarFull} alt="" />
									<img src={BlueStarFull} alt="" />
								</div>
								<p className="product-rating__reviews-amount">361 opiniones</p>
							</div>
							<div className="product-price__ctn">
								<p className="product-price">
									<span className="product-price__currency">U$S </span>
									<span className="product-price__price">449</span>
									<div className="product-price__modal-icon">
										<img src={QuestionIcon} alt="" />
									</div>
								</p>
								<p className="product-price__installments">
									<span>En </span>
									<span>12x $1.578 sin interés</span>
								</p>
								<Link className="product-sidebar__link" to="payment-methods">
									ver los medios de pago
								</Link>
							</div>
							<div className="product-shipping-info">
								<img src={ShippingTruckIcon} alt="" />
								<div className="product-shipping-info__arrival">
									<p>
										Llega gratis <span>hoy</span>
									</p>
									<span>Solo en Montevideo</span>
									<span>
										Comprando dentro de las próximas
										<span className="highlight-orange"> 40min</span>
									</span>
								</div>
							</div>
							<Link className="product-sidebar__link" to="shipping-methods">
								ver más formas de entrega
							</Link>
							<div className="product-variants">
								<p>Color:</p>
								<ul className="product-variants__list">
									<li className="product-image">
										<img
											src="https://http2.mlstatic.com/D_Q_NP_883583-MLU49386049860_032022-R.webp"
											alt="product"
										/>
									</li>
									<li className="product-image">
										<img
											src="https://http2.mlstatic.com/D_Q_NP_883583-MLU49386049860_032022-R.webp"
											alt="product"
										/>
									</li>
								</ul>
							</div>
							<p>Stock disponible</p>
							<p>
								Cantidad: <span>1 unidad</span> <span>(26 disponibles)</span>
							</p>
							<button className="product-buy-now">Comprar ahora</button>
							<button className="product-add-to-cart">
								Agregar al carrito
							</button>
							<div className="product-beneficts">
								<div>
									<img src={ProtectedIcon} alt="" />
									<Link to="compra-protegida">Compra Protegida</Link> recibe el
									producto que esperabas o te devolvemos tu dinero.
								</div>
								<div>
									<img src={AwardIcon} alt="" />
									12 meses de garantía de fábrica.
								</div>
							</div>
						</section>
						<section className="product-sidebar__sections"></section>
						<section className="product-sidebar__sections"></section>
						<section className="product-sidebar__sections"></section>
					</sidebar>
				</div>
				{/* Final */}
				{!products.isLoading ? (
					<>
						<HomeGallery products={products.products} />
						<HomeGallery products={products.products} />
						<HomeGallery products={products.products} />
					</>
				) : (
					""
				)}
			</div>
		</main>
	)
}
