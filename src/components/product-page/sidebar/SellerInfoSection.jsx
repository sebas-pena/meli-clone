import { useContext } from "react"

import MedalIcon from "../../../assets/svgs/medal-green-icon.svg"
import MapPinIcon from "../../../assets/svgs/map-pin-icon.svg"
import AtentionRepIcon from "../../../assets/svgs/reputation-speech-box-icon.svg"
import TimePositiveIcon from "../../../assets/svgs/reputation-time-positive-icon.svg"
import { Link } from "react-router-dom"
import { ProductPageContext } from "../../../context/ProductPageContext"

export const SellerInfoSection = () => {
	const product = useContext(ProductPageContext)
	return (
		<section className="product-sidebar__sections sidebar__seller-info">
			<h2 className="title">Información sobre el vendedor</h2>
			<div className="seller-info__section">
				<img src={MapPinIcon} alt="" />
				<div>
					<p className="seller-info__section-title">Ubicación</p>
					<p className="seller-info__section-subtitle">Belvedere, Montevideo</p>
				</div>
			</div>
			<div className="seller-info__section">
				<img src={MedalIcon} alt="" />
				<div>
					<p className="seller-info__section-title title-green">
						MercadoLíder Gold
					</p>
					<p className="seller-info__section-subtitle">
						¡Es uno de los mejores del sitio!
					</p>
				</div>
			</div>
			<div className="seller-reputation">
				<div className="seller-reputation__thermometer">
					<div className="level_1" />
					<div className="level_2" />
					<div className="level_3" />
					<div className="level_4" />
					<div className="level_5 current" />
				</div>
				<div className="seller-description">
					<div className="seller-description__item">
						<span>554</span>
						<p>Ventas en los últimos 120 días</p>
					</div>
					<div className="seller-description__item">
						<img src={AtentionRepIcon} alt="" />
						<p>Brinda buena atención</p>
					</div>
					<div className="seller-description__item">
						<img src={TimePositiveIcon} alt="" />
						<p>Entrega sus productos a tiempo</p>
					</div>
				</div>
				<Link className="product-sidebar__link" to="">
					Ver más datos de este vendedor
				</Link>
			</div>
		</section>
	)
}
