import { Link } from "react-router-dom"
import { HeartIcon } from "../../assets/icons"

export const ItemCard = ({
	title,
	id,
	imageUrl,
	price,
	onSale,
	currency,
	maxInstallments,
	freeShipping,
}) => {
	currency = currency = "USD" ? "U$D" : "$"

	let finalPrice = Math.floor((price - (price * onSale) / 100) * 100) / 100
	finalPrice = String(finalPrice).split(".")[0]
	const installmentsPrice = Math.round(finalPrice / maxInstallments)
	return (
		<Link to={`/product/${id}`} className="item-card ">
			<div className="item-card-img">
				<img src={imageUrl} alt="item" />
				<button className="item-heart-icon">
					<HeartIcon />
				</button>
			</div>
			<div className="item-card-description">
				{onSale && (
					<p className="item-price-without-discount">
						{currency + " " + price}
					</p>
				)}
				<div className="item-price">
					<p>{currency + " " + finalPrice}</p>
					{onSale && <p className="item-discount">{onSale}% OFF</p>}
				</div>
				{maxInstallments && (
					<p className="item-installments">
						{maxInstallments}x $ {installmentsPrice} sin interés
					</p>
				)}
				{freeShipping && <p className="item-free-shipping">Envio Gratis</p>}
				<p className="item-title">{title}</p>
			</div>
		</Link>
	)
}
