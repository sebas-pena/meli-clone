import { useState } from "react"

import BlueStarFull from "../../../assets/svgs/blue-star-full.svg"
import QuestionIcon from "../../../assets/svgs/question-icon.svg"
import ProtectedIcon from "../../../assets/svgs/protected-icon.svg"
import AwardIcon from "../../../assets/svgs/award-icon.svg"
import Arrow from "../../../assets/svgs/arrow.svg"
import ShippingTruckIcon from "../../../assets/svgs/shipping-truck-icon.svg"
import { Link } from "react-router-dom"

export const ProductSection = () => {
	const [quantity, setQuantity] = useState(1)
	const [showQuantityOptions, setShowQuantityOptions] = useState(false)
	return (
		<section className="product-sidebar__sections product-sidebar__product-seciton">
			<p className="product__amount">Nuevo | 211 vendidos</p>
			<h2 className="product__title">
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
					<Link className="product-sidebar__link" to="shipping-methods">
						ver más formas de entrega
					</Link>
				</div>
			</div>
			<div className="product-variants">
				<p>
					Color: <span>Azul</span>
				</p>
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
			<p className="stock">Stock disponible</p>
			<div className="stock-selector">
				<button
					onClick={() => {
						setShowQuantityOptions(true)
					}}
				>
					Cantidad:{" "}
					<span className="quantity-selected">
						{quantity} {quantity > 1 ? " unidades " : " unidad "}
					</span>
					<img
						className={"arrow " + (showQuantityOptions ? "shown" : "hidden")}
						src={Arrow}
						alt=""
					/>
					<span className="quantity-avaliable">(26 disponibles)</span>
				</button>
				<ul className={showQuantityOptions ? "shown" : "hidden"}>
					<li
						className={quantity === 1 ? "selected" : ""}
						onClick={() => {
							setQuantity(1)
							setShowQuantityOptions(false)
						}}
					>
						1 unidad
					</li>
					<li
						className={quantity === 2 ? "selected" : ""}
						onClick={() => {
							setQuantity(2)
							setShowQuantityOptions(false)
						}}
					>
						2 unidades
					</li>
					<li
						className={quantity === 3 ? "selected" : ""}
						onClick={() => {
							setQuantity(3)
							setShowQuantityOptions(false)
						}}
					>
						3 unidades
					</li>
					<li
						className={quantity === 4 ? "selected" : ""}
						onClick={() => {
							setQuantity(4)
							setShowQuantityOptions(false)
						}}
					>
						4 unidades
					</li>
					<li
						className={quantity === 5 ? "selected" : ""}
						onClick={() => {
							setQuantity(5)
							setShowQuantityOptions(false)
						}}
					>
						5 unidades
					</li>
					<li
						className={quantity === 6 ? "selected" : ""}
						onClick={() => {
							setQuantity(6)
							setShowQuantityOptions(false)
						}}
					>
						6 unidades
					</li>
				</ul>
			</div>
			<button className="product-buy-now">Comprar ahora</button>
			<button className="product-add-to-cart">Agregar al carrito</button>
			<div className="product-beneficts">
				<div>
					<img src={ProtectedIcon} alt="" />
					<Link to="compra-protegida">Compra Protegida</Link> recibe el producto
					que esperabas o te devolvemos tu dinero.
				</div>
				<div>
					<img src={AwardIcon} alt="" />
					12 meses de garantía de fábrica.
				</div>
			</div>
		</section>
	)
}
