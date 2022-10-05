import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const Benefit = ({ data }) => {
  const benefits = [
    {
      jaName: "駅チカの屋内練習場",
      svg: (
        <GatsbyImage
          className="c-card-benefit__image"
          image={data.benefit_1.childImageSharp.gatsbyImageData}
          alt="benefit1"
          style={{ height: "100%" }}
        />
      ),
      desc: "新橋駅、有楽町駅から歩いて〇〇分！天気を気にせず、いつでも練習できます。",
    },
    {
      jaName: "セミパーソナルゴルフレッスン",
      svg: (
        <GatsbyImage
          className="c-card-benefit__image"
          image={data.benefit_2.childImageSharp.gatsbyImageData}
          alt="benefit2"
          style={{ height: "100%" }}
        />
      ),
      desc: "少人数だから、インストラクターが丁寧にレクチャーしみるみる上達できます！",
    },
    {
      jaName: "最新シミュレーター全打席完備",
      svg: (
        <GatsbyImage
          className="c-card-benefit__image"
          image={data.benefit_3.childImageSharp.gatsbyImageData}
          alt="benefit3"
          style={{ height: "100%" }}
        />
      ),
      desc: "全打席に最新のシミュレータを完備しているので、いつでも同じ環境で練習ができます。",
    },
  ]

  return (
    <section className="l-benefit">
      <div className="l-benefit__inner">
        <div className="p-cards-benefit p-cards-benefit--col3">
          {benefits.map(benefit => {
            return (
              <div className="p-cards-benefit__item c-card-benefit">
                <figure className="c-card-benefit__icon-wrapper">
                  {benefit.svg}
                </figure>
                <div className="card__body">
                  <h3 className="c-card-benefit__title">{benefit.jaName}</h3>
                  <p className="c-card-benefit__text">{benefit.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefit
