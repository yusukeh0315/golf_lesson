import React from "react"
import { Link } from "gatsby"

const Reservation = () => {
  return (
    <Link to={`/reservation/`}>
      <button className="c-reservation_button">ご予約</button>
    </Link>
  )
}

export default Reservation
