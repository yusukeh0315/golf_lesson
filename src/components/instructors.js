import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import HeadingIcon from "./heading_icon"

const Instructors = () => {
  const instructors = [
    {
      jaName: "若林　孝典",
      enName: "Takanori Wakabayashi",
      title: "ココレアゴルフ代表",
      desc: [
        "10歳よりゴルフを始め、学生時代は競技ゴルフに没頭し東海TV杯争奪学生ゴルフ選手権などのタイトルを獲得。大学卒業後は5年間の海外生活にて多くの有名スクールで学びミニツアーなどに参戦。日本に帰国後はAUSプロゴルファーの日本ツアー参戦のサポートに携わりゴルフレッスン業に従事。2023年に港区新橋にココレアゴルフを主宰。",
        "　",
        "保有資格：USGTFティーチングプロライセンス（2004年1月アメリカ、サンディエゴにて1st Place Medalist として合格）",
        "　",
        "ゴルフを学んだ主なスクール、コーチ",
        "ROYAL FREMANTLE GC（AUSパース）Andy Mowatt氏（AUS PGAトップ100コーチ）Jim McLean Golf School（USAラキンタ）など",
        "　",
        "皆様へのメッセージ",
        "クラブを全く握ったことのない方から80切りを目指す上級者の方、そしてYouTubeの見過ぎでお悩みの方まで私にお任せください。延べ10,000人以上のレッスン経験と海外で学んだ最新理論に裏付けられた楽しくわかりやすいレッスンで上達をお約束します。",
      ],
      image: (
        <StaticImage
          className="c-card-instructors__logo"
          src="../images/t_wakabayashi.jpg"
          alt="若林　孝典"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={10}
          placeholder="BLURRED"
        />
      ),
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
        <div className="p-cards p-cards--col1">
          {instructors.map(instructor => {
            return (
              <>
                <div className="p-cards__item">
                  <div className="c-card-instructors">
                    <figure className="c-card-instructors__logo-wrapper">
                      {instructor.image}
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
                      {instructor.desc.map(text => (
                        <p className="c-card-instructors__text">{text}</p>
                      ))}
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
