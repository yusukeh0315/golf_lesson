import React from "react"

import HeadingIcon from "./heading_icon"

const Instructors = ({ data }) => {
  const instructors = [
    {
      img: "img",
      jaName: "若林　孝典",
      enName: "Takanori Wakabayashi",
      title: "ココレアゴルフ代表",
      desc: "プロゴルファー猿をテレビで観て、友人の誘いで9歳よりゴルフを始め、中学、高校、大学時代には競技ゴルフに没頭。5年間の海外生活でミニツアーや地方トーナメントにも挑戦。基本を大切に、とにかく楽しいレッスンがモットーで、北は北海道から南は兵庫まで多くの生徒さんを抱える。英語でのレッスンも可能ですのでご相談ください。",
    },
    // {
    //   img: "img",
    //   jaName: "山田 太郎",
    //   enName: "Taro Yamada",
    //   title: "NGFプロインストラクター、PGM認定インストラクター",
    //   desc: "紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文",
    // },
    // {
    //   img: "img",
    //   jaName: "山田 太郎",
    //   enName: "Taro Yamada",
    //   title: "NGFプロインストラクター",
    //   desc: "紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文",
    // },
    // {
    //   img: "img",
    //   jaName: "山田 太郎",
    //   enName: "Taro Yamada",
    //   title: "NGFプロインストラクター",
    //   desc: "紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文",
    // },
    // {
    //   img: "img",
    //   jaName: "山田 太郎",
    //   enName: "Taro Yamada",
    //   title: "NGFプロインストラクター",
    //   desc: "紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文",
    // },
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
        {/* <div className="p-body__wrapper">
          <p className="p-body__text">
            採用したインストラクターの基準、背景などがここで垣間見えるような紹介が良いかと思います。
          </p>
        </div> */}
        <div className="p-cards p-cards--col2">
          {instructors.map(instructor => {
            return (
              <>
                <div className="p-cards__item">
                  <div className="c-card-instructors">
                    {/* <figure className="c-card-instructors__logo-wrapper">
                      <GatsbyImage
                        className="c-card-instructors__logo"
                        image={data.dummy.childImageSharp.gatsbyImageData}
                        alt="instructor"
                        style={{ height: "100%" }}
                      />
                    </figure> */}
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
