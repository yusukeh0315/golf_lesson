import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import HeadingIcon from "./heading_icon"

const Instructors = ({ data }) => {
  const instructors = [
    {
      img: "../images/t_wakabayashi.jpg",
      jaName: "若林　孝典",
      enName: "Takanori Wakabayashi",
      title: "ココレアゴルフ代表",
      desc: "プロゴルファー猿をテレビで観て、友人の誘いで9歳よりゴルフを始め、中学、高校、大学時代には競技ゴルフに没頭。5年間の海外生活でミニツアーや地方トーナメントにも挑戦。基本を大切に、とにかく楽しいレッスンがモットーで、北は北海道から南は兵庫まで多くの生徒さんを抱える。英語でのレッスンも可能ですのでご相談ください。",
    },
  ]

  return (
    <section className="l-subsection">
      <div className="l-subsection__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">
            <HeadingIcon type="flower" />
            インストラクター紹介
          </h2>
        </div>
        <div className="p-cards p-cards--col2">
          {instructors.map(instructor => {
            return (
              <>
                <div className="p-cards__item">
                  <div className="c-card-instructors">
                    <figure className="c-card-instructors__logo-wrapper">
                      {/* TODO 画像を変数にする */}
                      <StaticImage
                        className="c-card-instructors__logo"
                        src="../images/t_wakabayashi.jpg"
                        alt="instructor"
                        style={{ height: "100%" }}
                        loading="eager"
                        backgroundColor="transparent"
                        quality={10}
                        placeholder="BLURRED"
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
