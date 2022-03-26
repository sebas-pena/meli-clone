import { MapPinIcon, ShoppingCartIcon } from "../../assets/icons"

import logo from "../../assets/images/meli-logos/large.png"
import freeShippingImg from "../../assets/images/pages/home/free-shipping.webp"
import { SearchInput } from "./SearchInput"
import { Link } from "react-router-dom"

export const NavDesktop = () => {
	return (
		<header className="nav-header-desktop">
			<div className="nav-header-desktop__ctn">
				<div className="nav-header-desktop__top">
					<Link to="/home" className="nav-header-desktop__logo">
						<img src={logo} alt="logo mercado libre" />
					</Link>
					<SearchInput />
					<img
						className="nav-header-desktop__free-shipping"
						src={freeShippingImg}
						alt="free shipping"
					/>
				</div>
				<div className="nav-header-desktop__bottom">
					<div className="nav-header-desktop__select-address">
						<MapPinIcon size="23" color="rgb(51,51,51)" />
						<span className="first-line"> Ingresa tu</span>
						<span className="second-line">Ubicación</span>
					</div>
					<nav className="nav-header-desktop__nav">
						<ul className="nav-header-desktop__categories-menu">
							<li>
								<div className="categories">
									Categorias
									<span className="nav-cat-arrow"></span>
								</div>
								<div className="categories-menu"></div>
							</li>
							<li>Ofertas</li>
							<li>Historial</li>
							<li>Moda</li>
							<li>Vender</li>
							<li>Ayuda</li>
						</ul>
						<ul className="user-menu">
							<li>Crea tu cuenta</li>
							<li>Ingresa</li>
							<li>Mis compras</li>
							<li>
								<ShoppingCartIcon size="19" color="#333333" />
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
