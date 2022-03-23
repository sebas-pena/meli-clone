import React from "react"
import { MapPinIcon, ShoppingCartIcon } from "../../../assets/icons"

import logo from "../../../assets/images/pages/home/logo-large.png"
import freeShippingImg from "../../../assets/images/pages/home/free-shipping.webp"
import { SearchInput } from "./search-input/SearchInput"

export const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-start">
          <img src={logo} alt="logo mercado libre" />

          <div className="location">
            <MapPinIcon size="23" color="rgb(51,51,51)" />
            <span className="first-line"> Ingresa tu</span>
            <span className="second-line">Ubicación</span>
          </div>
        </div>

        <div className="nav-mid">
          <SearchInput />
          <ul className="search-menu">
            <li>
              <div className="categories">
                Categorias
                <span className="nav-cat-arrow"></span>
              </div>
            </li>
            <li>Ofertas</li>
            <li>Historial</li>
            <li>Moda</li>
            <li>Vender</li>
            <li>Ayuda</li>
          </ul>
        </div>

        <div className="nav-end">
          <img src={freeShippingImg} alt="free shipping" />
          <ul className="user-menu">
            <li>Crea tu cuenta</li>
            <li>Ingresa</li>
            <li>Mis compras</li>
            <li>
              <ShoppingCartIcon size="19" color="#000" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
