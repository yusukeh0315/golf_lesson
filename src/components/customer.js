import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import HeadingIcon from "./heading_icon"

const Customer = ({ data }) => {
  const customers = [
    {
      img: "img",
      jaName: "20代女性",
      desc: "楽しくおしゃべりしながらレッスンしてもらっています。教え方も工夫されていて分かりやすくメキメキ上達しました！",
    },
    {
      img: "img",
      jaName: "30代男性",
      desc: "とてもわかりやすく、わからない時は違った方法で伝えてくれるため、必ず上達できるようアプローチしてくれます！",
    },
    {
      img: "img",
      jaName: "30代女性",
      desc: "ゴルフを始めてからずっとお世話になっていて、無事にコースデビューできるまで上達しました！",
    },
    {
      img: "img",
      jaName: "40代女性",
      desc: "一人で練習して悩んでいた日々でしたが、ここに通い始めたところ、悩みを伝えれば的確なアドバイスをもらいステップアップできました！",
    },
  ]

  return (
    <section className="l-service">
      <div className="l-service__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">
            ゴルフ楽しい！
          </h2>
        </div>
        {/* <div className="p-body__wrapper">
          <p className="p-body__text">
            説明文説明文説明文説明文説明文説明文説明文
            説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
            説明文説明文
          </p>
        </div> */}
        <div className="p-cards-instructors p-cards-instructors--col2">
          {customers.map(instructor => {
            return (
              <>
                <div className="p-cards-instructors__item">
                  <div className="c-card-instructors">
                    <figure className="c-card-instructors__logo-wrapper">
                      <GatsbyImage
                        className="c-card-instructors__logo"
                        image={data.dummy.childImageSharp.gatsbyImageData}
                        alt=""
                        style={{ height: "100%" }}
                      />
                    </figure>
                    <div className="c-card-instructors__body">
                      <p className="c-card-instructors__janame">
                        {instructor.jaName}
                      </p>
                      <p className="c-card-instructors__text">
                        {instructor.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Customer
