import { Link } from "gatsby"
import React from "react"

import { enableBodyScroll } from "body-scroll-lock"
import Reservation from "../reservation"

const MenuList = ({ close }) => {
  const target = document.getElementsByClassName("menu")
  const closeMenu = () => {
    enableBodyScroll(target)
  }
  return (
    <div className="menu">
      <ul>
        <li // eslint-disable-line jsx-a11y/no-static-element-interactions
          aria-hidden="true"
          onClick={closeMenu}
        >
          <Link to={`/price/`}>料金</Link>
        </li>
        <li // eslint-disable-line jsx-a11y/no-static-element-interactions
          aria-hidden="true"
          onClick={closeMenu}
        >
          <Link to={`/instructor/`}>インストラクター</Link>
        </li>
        <li // eslint-disable-line jsx-a11y/no-static-element-interactions
          aria-hidden="true"
          onClick={closeMenu}
        >
          <Link to={`/facility/`}>施設紹介</Link>
        </li>
        <li // eslint-disable-line jsx-a11y/no-static-element-interactions
          aria-hidden="true"
          onClick={closeMenu}
        >
          <Link to={`/contact/`}>お問い合わせ</Link>
        </li>
        <li // eslint-disable-line jsx-a11y/no-static-element-interactions
          aria-hidden="true"
          onClick={closeMenu}
        >
          <Reservation />
        </li>
      </ul>
    </div>
  )
}

export default MenuList
