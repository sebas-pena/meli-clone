import { MapPinIcon, ShoppingCartIcon } from "../../assets/icons"

import logoLarge from "../../assets/images/meli-logos/large.png"
import logoSmall from "../../assets/images/meli-logos/small.png"
import freeShippingImg from "../../assets/images/pages/home/free-shipping.webp"
import { SearchInput } from "./SearchInput"
import { Link } from "react-router-dom"
import arrowImg from "../../assets/images/arrow.png"

export const Nav = () => {
  return (
    <header className="nav-header">
      <div className="nav-header__ctn">
        <div className="nav-header__top">
          <Link to="/home" className="nav-header-desktop__logo">
            <img
              className="nav-header__desktop-logo"
              src={logoLarge}
              alt="logo mercado libre"
            />
            <img
              className="nav-header__mobile-logo"
              src={logoSmall}
              alt="meli logo"
            />
          </Link>
          <SearchInput />
          <div className="nav-header-top__mobile">
            <button className="nav-mobile__menu-btn">
              <div className="nav-mobile__menu-icon"></div>
            </button>
            <Link to="/cart" className="nav-header__mobile-cart">
              <ShoppingCartIcon />
            </Link>
          </div>
          <div className="nav-header-top__desktop">
            <img
              className="nav-header-desktop__free-shipping"
              src={freeShippingImg}
              alt="free shipping"
            />
          </div>
        </div>
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
            <Link
              to="/select-address"
              className="nav-mobile__select-address-ctn"
            >
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
      </div>
    </header>
  )
}
