import { Link } from "react-router-dom"
import { MapPinIcon, ShoppingCartIcon } from "../../assets/icons"
import logo from "../../assets/images/meli-logos/small.png"
import arrowImg from "../../assets/images/arrow.png"
import { SearchInput } from "./SearchInput"
export const NavMobile = () => {
	return (
		<header className="nav-header-mobile">
			<div className="nav-header-mobile__ctn">
				<div className="nav-mobile__top">
					<img className="nav-mobile__logo" src={logo} alt="meli logo" />
					<SearchInput />
					<button className="nav-mobile__menu-btn">
						<div className="nav-mobile__menu-icon"></div>
					</button>
					<Link to="/cart" className="nav-mobile__cart">
						<ShoppingCartIcon />
					</Link>
				</div>
				<Link to="/select-address" className="nav-mobile__select-address-ctn">
					<div>
						<MapPinIcon size="15" color="#333333" />
						<span>Ingresa tu ubicación</span>
					</div>
					<img
						className="nav-mobile__address-arrow"
						src={arrowImg}
						alt="arrow"
					/>
				</Link>
			</div>
		</header>
	)
}
