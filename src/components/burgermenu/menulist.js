import React from "react"

const MenuList = ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>Home</li>
      <li onClick={close}>料金</li>
      <li onClick={close}>インストラクター</li>
      <li onClick={close}>施設紹介</li>
      <li onClick={close}>お問い合わせ</li>
      <li onClick={close}>
        <button className="c-reservation_button">ご予約</button>
      </li>
    </ul>
  </div>
)

export default MenuList
