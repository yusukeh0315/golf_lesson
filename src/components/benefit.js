import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Benefit = ({ data }) => {
  const services = [
    {
      jaName: "駅チカの屋内練習場",
      svg: (
        <GatsbyImage
          className="c-card-service__image"
          image={data.benefit.childImageSharp.gatsbyImageData}
          alt=""
          style={{ height: "100%" }}
        />
      ),
      desc: "新橋駅、有楽町駅から歩いて〇〇分",
    },
    {
      jaName: "楽しく上達",
      svg: (
        <GatsbyImage
          className="c-card-service__image"
          image={data.benefit.childImageSharp.gatsbyImageData}
          alt=""
          style={{ height: "100%" }}
        />
      ),
      desc: "インストラクターが丁寧にレクチャーし継続して上達できます。",
    },
    {
      jaName: "気軽に練習",
      svg: (
        <GatsbyImage
          className="c-card-service__image"
          image={data.benefit.childImageSharp.gatsbyImageData}
          alt=""
          style={{ height: "100%" }}
        />
      ),
      desc: "手ぶらで練習できます！",
    },
  ]

  return (
    <section className="l-service">
      <div className="l-service__inner">
        <div className="p-cards-service p-cards-service--col3">
          {services.map(service => {
            return (
              <div className="p-cards-service__item c-card-service">
                <figure className="c-card-service__icon-wrapper">
                  {service.svg}
                </figure>
                <div className="card__body">
                  <h3 className="c-card-service__title">{service.jaName}</h3>
                  <p className="c-card-service__text">{service.desc}</p>
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
