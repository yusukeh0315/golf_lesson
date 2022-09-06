import React from "react"

const HeadingIcon = ({ type }) => {
  let src = ""

  if (type === "flower") {
    src = "/images/icon_flower.svg"
  } else if (type === "tree") {
    src = "/images/icon_tree.svg"
  } else if (type === "golfbag") {
    src = "/images/icon_golfbag.svg"
  } else if (type === "green") {
    src = "/images/icon_green.svg"
  } else if (type === "turtle") {
    src = "/images/icon_turtle.svg"
  }
  return (
      <img className="c-icon" src={src} alt="heading_icon" />
  )
}

export default HeadingIcon
