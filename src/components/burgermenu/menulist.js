import React from "react"
import { Link } from "gatsby"

import Reservation from "../reservation"

const MenuList = ({ close }) => (
  <div className="menu">
    <ul>
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        aria-hidden="true"
        onClick={close}
      >
        <Link to={`/price/`}>料金</Link>
      </li>
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        aria-hidden="true"
        onClick={close}
      >
        <Link to={`/instructor/`}>インストラクター</Link>
      </li>
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        aria-hidden="true"
        onClick={close}
      >
        <Link to={`/facility/`}>施設紹介</Link>
      </li>
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        aria-hidden="true"
        onClick={close}
      >
        <Link to={`/contact/`}>お問い合わせ</Link>
      </li>
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        aria-hidden="true"
        onClick={close}
      >
        <Reservation />
      </li>
    </ul>
  </div>
)

export default MenuList
