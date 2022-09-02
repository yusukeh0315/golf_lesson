import React from "react"

const MenuList = ({ close }) => (
  <div className="menu">
    <ul>
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
      aria-hidden="true" 
      onClick={close}>
        Home
      </li>
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
      aria-hidden="true" 
      onClick={close}>
        料金
      </li>
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
      aria-hidden="true" 
      onClick={close}>
        インストラクター
      </li>
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
      aria-hidden="true" 
      onClick={close}>
        施設紹介
      </li>
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
      aria-hidden="true" 
      onClick={close}>
        お問い合わせ
      </li>
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
      aria-hidden="true" 
      onClick={close}>
        <button className="c-reservation_button">ご予約</button>
      </li>
    </ul>
  </div>
)

export default MenuList
