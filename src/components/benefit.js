import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Benefit = ({ data }) => {
  const benefits = [
    {
      jaName: ["飛距離アップに特化した", "マンツーマン指導"],
      image: (
        <StaticImage
          className="c-card-benefit__image"
          src="../images/benefit_1.jpg"
          alt="飛距離アップに特化したマンツーマン指導"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={80}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "飛距離アップに特化したマンツーマン指導を行っています。一人ひとりの特徴や課題に合わせた的確なアドバイスを行い、飛距離アップにつながる美スイングを身につけることができます。プロのアドバイスによって、確実な飛距離アップを実現しましょう。",
      ],
    },
    {
      jaName: ["スイング改善に", "効果的な最新設備を完備"],
      image: (
        <StaticImage
          className="c-card-benefit__image"
          src="../images/benefit_2.jpg"
          alt="スイング改善に効果的な最新設備"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={80}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "最新のシミュレーターとビデオ解析システムを使って、あなたのスイングを徹底的に診断します。シミュレーターは、飛距離や方向性だけでなく、スピン量など細かく計測し、超高精度カメラでクラブや体の動きを細部まで分析します。それらのデータをもとに科学的で効率的に練習を行うことができます。",
      ],
    },
    {
      jaName: ["あなたに合った", "オリジナルカリキュラム"],
      image: (
        <StaticImage
          className="c-card-benefit__image"
          src="../images/benefit_3.jpg"
          alt="あなたに合ったオリジナルカリキュラム"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={80}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "一人ひとりに合わせたオリジナルカリキュラムを提供しています。初心者の方から上級者まで、目的やレベルに応じたカリキュラムを用意しているため、無理なくレッスンを受けることができます。",
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
                  <h3
                    className="c-card-benefit__title"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {benefit.jaName.join("\n")}
                    {/* {benefit.jaName} */}
                  </h3>
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
