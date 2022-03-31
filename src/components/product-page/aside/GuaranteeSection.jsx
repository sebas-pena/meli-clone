import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductPageContext } from "../../../context/ProductPageContext"

export const GuaranteeSection = () => {
	const product = useContext(ProductPageContext)
	return (
		<section className="product-aside__sections aside__guarantee-section">
			<h2 className="guarantee-section__title">Garantía</h2>
			<h3 className="guarantee-section__subtitle">
				Compra Protegida con Mercado Pago
			</h3>
			<p className="guarantee-section__text">
				Recibe el producto que esperabas o te devolvemos tu dinero
			</p>
			{product && product.warranty ? (
				<>
					<h3 className="guarantee-section__subtitle">Garantía del vendedor</h3>
					<p className="guarantee-section__text">{product.warranty}</p>
				</>
			) : (
				""
			)}
			<Link className="product-aside__link" to="">
				Conocer más sobre garantía
			</Link>
		</section>
	)
}
