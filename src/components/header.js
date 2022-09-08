import { Link } from "gatsby"
import React from "react"

import Reservation from "./reservation"

const Header = ({ page }) => {
  return (
    <header className="l-header">
      <div className="l-header__inner">
        <div className="p-header-logo">
          <Link to={`/`} className="p-header-logo__link">
            Logo
          </Link>
        </div>
        <nav className="p-header-nav">
          <ul className="p-header-nav__list">
            <li className="p-header-nav__item">
              <Link
                to={`/price/`}
                className={`p-header-nav__link ${
                  page === "price" ? "current" : ""
                }`}
              >
                料金
              </Link>
            </li>
            <li className="p-header-nav__item">
              <Link
                to={`/instructor/`}
                className={`p-header-nav__link ${
                  page === "instructor" ? "current" : ""
                }`}
              >
                インストラクター
              </Link>
            </li>
            <li className="p-header-nav__item">
              <Link
                to={`/facility/`}
                className={`p-header-nav__link ${
                  page === "facility" ? "current" : ""
                }`}
              >
                施設紹介
              </Link>
            </li>
            <li className="p-header-nav__item">
              <Link
                to={`/contact/`}
                className={`p-header-nav__link ${
                  page === "contact" ? "current" : ""
                }`}
              >
                お問い合わせ
              </Link>
            </li>
            <li className="p-header-nav__item">
              <Reservation />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
