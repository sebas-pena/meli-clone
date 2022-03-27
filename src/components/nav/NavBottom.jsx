import { Link } from "react-router-dom"

import { MapPinIcon, ShoppingCartIcon } from "../../assets/icons"
import arrowImg from "../../assets/images/arrow.png"

export const NavBottom = () => {
  return (
    <div className="nav-header-bottom">
      <div className="nav-header-bottom__desktop">
        <div className="nav-header-desktop__select-address">
          <MapPinIcon size="23" color="rgb(51,51,51)" />
          <span className="first-line"> Ingresa tu</span>
          <span className="second-line">ubicación</span>
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
      <div className="nav-header-bottom__mobile">
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
    </div>
  )
}
