import { Link } from "react-router-dom"
import Arrow from "../../../assets/svgs/arrow.svg"

export const ProductTopLinks = () => {
	return (
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
	)
}
