import { Link } from "react-router-dom"
import {
	CreditMethodsLogos,
	CollectionServicesLogos,
	DebitMethodsLogos,
} from "../../../assets/images/payment-methods-logos/importPaymentMethodsLogos"

import CardIcon from "../../../assets/svgs/card-icon.svg"
export const PaymentMethodsSection = () => {
	return (
		<section className="product-sidebar__sections payment-methods-section">
			<h2>Medios de pago</h2>
			<button className="green-button">
				<img src={CardIcon} alt="" />
				¡Paga en 12 cuotas sin interés!
			</button>
			<div className="payment-methods">
				<h3>Tarjetas de crédito</h3>
				<p>¡Cuotas sin interés con bancos seleccionados!</p>
				<ul className="payment-methods__logos">
					{CreditMethodsLogos.map((image) => (
						<li key={image.key}>
							<img src={image.logo} alt="" />
						</li>
					))}
				</ul>
			</div>
			<div className="payment-methods">
				<h3>Tarjetas de débito</h3>
				<ul className="payment-methods__logos">
					{DebitMethodsLogos.map((image) => (
						<li key={image.key}>
							<img src={image.logo} alt="" />
						</li>
					))}
				</ul>
			</div>
			<div className="payment-methods">
				<h3>Efectivo en redes de cobranza</h3>
				<ul className="payment-methods__logos">
					{CollectionServicesLogos.map((image) => (
						<li key={image.key}>
							<img src={image.logo} alt="" />
						</li>
					))}
				</ul>
			</div>
			<Link className="product-sidebar__link" to="">
				Conoce otros medios de pago
			</Link>
		</section>
	)
}
