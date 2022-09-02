import React from "react"
import Popup from "reactjs-popup"
import Icon from "./icon"
import MenuList from "./menulist"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  // marginTop: "40px",
}
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none",
}

const BurgerMenu = () => (
  <div style={styles}>
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Icon open={open} />}
    >
      {close => <MenuList close={close} />}
    </Popup>
  </div>
)

export default BurgerMenu
