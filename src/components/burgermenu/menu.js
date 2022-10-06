import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import React, {useEffect} from "react"
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

const BurgerMenu = () => {
  const target = document.getElementsByClassName("menu")

  let scrollValue = ""

  const closeMenu = () => {
    enableBodyScroll(target)
    preventScrollTop()
  }

  const openMenu = () => {
    document.body.style.top = -`${window.scrollY}` + "px"
    scrollValue = document.body.style.top
    disableBodyScroll(target)
  }

  const preventScrollTop = () => {
    const scrollY = parseInt(scrollValue || "0") * -1
    document.body.style.top = ""
    window.scrollTo(0, scrollY)
  }

  return (
    <div style={styles}>
      <Popup
        modal
        overlayStyle={{ background: "rgba(255,255,255,0.98" }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={open => <Icon open={open} />}
        onOpen={openMenu}
        onClose={closeMenu}
      >
        {close => <MenuList close={close} />}
      </Popup>
    </div>
  )
}

export default BurgerMenu
