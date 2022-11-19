import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Benefit = ({ data }) => {
  const benefits = [
    {
      jaName: "駅チカで24時間営業！",
      image: (
        <StaticImage
          className="c-card-benefit__image"
          src="../images/benefit_1.jpg"
          alt="駅チカで24時間営業！"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={10}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "東京メトロ新橋駅1番出口から徒歩1分！銀座中央通り沿いの黒いビルの地下1階です。",
        "駅近なので、仕事帰りや、ちょっと空いた時間にいつでも練習がです通いやすいです。もちろんレンタル道具は揃っているのて手ぶらでOK!!",
      ],
    },
    {
      jaName: "超少人数制だから楽しく短期間でメキメキ上達！",
      image: (
        <StaticImage
          className="c-card-benefit__image"
          src="../images/benefit_2.jpg"
          alt="超少人数制だから楽しく短期間でメキメキ上達！"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={10}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "レッスンは最大2名だからじっくりレッスンを受けてじっくり反復練習することができます。",
      ],
    },
    {
      jaName: "全打席最新のシュミレーター完備で打ち放題！",
      image: (
        <StaticImage
          className="c-card-benefit__image"
          src="../images/benefit_3.jpg"
          alt="全打席最新のシュミレーター完備で打ち放題！"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={10}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "超高性能カメラ内蔵だからスイングからインパクトの瞬間まで丸見えに！スピン量、打ち出し角などの数値を参考に科学的な練習が可能です。",
      ],
    },
  ]

  return (
    <section className="l-benefit">
      <div className="l-benefit__inner">
        <div className="p-cards p-cards--col3">
          {benefits.map(benefit => {
            return (
              <div className="p-cards__item c-card-benefit">
                <figure className="c-card-benefit__icon-wrapper">
                  {benefit.image}
                </figure>
                <div className="card__body">
                  <h3 className="c-card-benefit__title">{benefit.jaName}</h3>
                  {benefit.desc.map(text => (
                    <p className="c-card-benefit__text">{text}</p>
                  ))}
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
