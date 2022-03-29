import React from "react"
import { Link } from "react-router-dom"

export const GuaranteeSection = () => {
	return (
		<section className="product-sidebar__sections sidebar__guarantee-section">
			<h2 className="guarantee-section__title">Garantía</h2>
			<h3 className="guarantee-section__subtitle">
				Compra Protegida con Mercado Pago
			</h3>
			<p className="guarantee-section__text">
				Recibe el producto que esperabas o te devolvemos tu dinero
			</p>
			<Link className="product-sidebar__link" to="">
				Conocer más sobre garantía
			</Link>
		</section>
	)
}
