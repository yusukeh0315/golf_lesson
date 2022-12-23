import { Link } from "gatsby"
import React from "react"

import { enableBodyScroll } from "body-scroll-lock"
import Reservation from "../reservation"

const MenuList = ({ close }) => {
  const closeMenu = () => {
    let target = ""
    if (typeof document !== "undefined") {
      target = document.getElementsByClassName("menu")
    }
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
          <Link to={`/facility/`}>施設紹介とアクセス</Link>
        </li>
        <li // eslint-disable-line jsx-a11y/no-static-element-interactions
          aria-hidden="true"
          onClick={closeMenu}
        >
          <Link to={`/contact/`}>お問い合わせとよくある質問</Link>
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
