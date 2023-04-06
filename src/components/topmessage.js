import React from "react"
// import Fade from "react-reveal/Fade"

const TopMessage = () => {
  return (
    <>
      <section className="l-top-message">
        <div className="l-top-message__inner">
          <div className="p-top-message__wrapper">
            {/* <Fade bottom> */}
            <h2 className="p-top-message__title">
              マンツーマン指導で飛距離アップ、美スイングの秘訣を学ぶ！
            </h2>
            <p className="p-top-message__text">
              「飛距離が伸びない…」そんな悩みをお持ちの方におすすめしたいのが、
              <br className="pc-return" />
              ココレアゴルフスタジオのマンツーマン指導！
              <br />
              <br />
              経験豊富なプロコーチが、あなたに合ったフォームやスイングを伝授します。
              <br className="pc-return" />
              効果的なトレーニング方法もサポートし、確実に飛距離アップを実現します！
            </p>
            {/* </Fade> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default TopMessage
