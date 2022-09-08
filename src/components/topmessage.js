import React from "react"
import Fade from "react-reveal/Fade"

const TopMessage = () => {

  return (
    <>
      <section className="l-top-message">
        <div className="l-top-message__inner">
          <div className="p-top-message__wrapper">
            <Fade bottom>
              <h2 className="p-top-message__title">トップメッセージ</h2>
              <p className="p-top-message__text">
                メッセージメッセージメッセージメッセージメッセージメッセージメッセージ
              </p>
            </Fade>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopMessage
