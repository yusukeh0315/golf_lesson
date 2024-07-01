import { Link } from "gatsby"
import React from "react"

const Reservation = () => {
  return (
    <Link to={`https://cocolea.yamadataro.jp/login`}>
      <button className="c-reservation_button">会員ログイン</button>
    </Link>
  )
}

export default Reservation
