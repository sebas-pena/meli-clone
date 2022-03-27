import { Link } from "react-router-dom"
import { SearchInput } from "./SearchInput"

import { ShoppingCartIcon } from "../../assets/icons"
import logoLarge from "../../assets/images/meli-logos/large.png"
import logoSmall from "../../assets/images/meli-logos/small.png"
import freeShippingImg from "../../assets/images/pages/home/free-shipping.webp"

export const NavTop = () => {
  return (
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
  )
}
