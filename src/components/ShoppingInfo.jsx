import { useState } from "react"
import paymentIcon from "../assets/svgs/payment.svg"
import shippingIcon from "../assets/svgs/shipping.svg"
import protectedIcon from "../assets/svgs/protected.svg"
import { Link } from "react-router-dom"
export const ShoppingInfo = () => {
	const [currentInfo, setCurrentInfo] = useState("payment")
	return (
		<>
			<ul className="shopping-info__ctn">
				<li className="shopping-info__section" id="shopping-info__payment">
					<img src={paymentIcon} alt="payment" />
					<h2>Paga con Mercado Pago</h2>
					<p>
						Usa Mercado Pago, la solución de Mercado Libre para pagar de forma
						segura y con el medio de pago que prefieras.
					</p>
					<Link to="">Cómo pagar con Mercado Pago</Link>
				</li>
				<div className="shopping-info__divisor"></div>
				<li className="shopping-info__section" id="shopping-info__shipping">
					<img src={shippingIcon} alt="shipping" />
					<h2>Envío gratis desde $ 2.000</h2>
					<p>
						Elige Mercado Envíos en tus compras y disfruta de envíos gratis en
						miles de productos nuevos.
					</p>
					<Link to="">Cómo recibo compras con Mercado Envíos</Link>
				</li>
				<div className="shopping-info__divisor"></div>
				<li className="shopping-info__section" id="shopping-info__protected">
					<img src={protectedIcon} alt="protected" />
					<h2>Compra Protegida</h2>
					<p>
						Paga con Mercado Pago y te acompañamos hasta que recibas lo que
						compraste. Y si no es lo que esperabas, te devolvemos el dinero.
					</p>
					<Link to="">Cómo te protegemos</Link>
				</li>
			</ul>
			<div className="shopping-info__buttons">
				<a
					className={currentInfo == "payment" ? "active" : ""}
					href="#shopping-info__payment"
					onClick={() => {
						setCurrentInfo("payment")
					}}
				/>
				<a
					className={currentInfo == "shipping" ? "active" : ""}
					href="#shopping-info__shipping"
					onClick={() => {
						setCurrentInfo("shipping")
					}}
				/>
				<a
					className={currentInfo == "protected" ? "active" : ""}
					href="#shopping-info__protected"
					onClick={() => {
						setCurrentInfo("protected")
					}}
				/>
			</div>
		</>
	)
}
