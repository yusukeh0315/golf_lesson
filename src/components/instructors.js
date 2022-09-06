import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import HeadingIcon from "./heading_icon"

const Instructors = ({ data }) => {
  const instructors = [
    {
      img: "img",
      jaName: "山田 太郎",
      enName: "Taro Yamada",
      title: "NGFプロインストラクター、PGM認定インストラクター",
      desc: "紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文",
    },
    {
      img: "img",
      jaName: "山田 太郎",
      enName: "Taro Yamada",
      title: "NGFプロインストラクター、PGM認定インストラクター",
      desc: "紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文",
    },
    {
      img: "img",
      jaName: "山田 太郎",
      enName: "Taro Yamada",
      title: "NGFプロインストラクター",
      desc: "紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文",
    },
    {
      img: "img",
      jaName: "山田 太郎",
      enName: "Taro Yamada",
      title: "NGFプロインストラクター",
      desc: "紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文",
    },
    {
      img: "img",
      jaName: "山田 太郎",
      enName: "Taro Yamada",
      title: "NGFプロインストラクター",
      desc: "紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文",
    },
  ]

  return (
    <section className="l-service">
      <div className="l-service__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">
            <HeadingIcon type="flower" />
            インストラクター紹介
          </h2>
        </div>
        <div className="p-body__wrapper">
          <p className="p-body__text">
            採用したインストラクターの基準、背景などがここで垣間見えるような紹介が良いかと思います。
          </p>
        </div>
        <div className="p-cards-instructors p-cards-instructors--col2">
          {instructors.map(instructor => {
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
                      <p className="c-card-instructors__enname">
                        {instructor.enName}
                      </p>
                      <p className="c-card-instructors__title">
                        {instructor.title}
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

export default Instructors
