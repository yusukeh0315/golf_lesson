import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const Benefit = ({ data }) => {
  // const benefits = [
  //   {
  //     jaName: "駅チカの屋内練習場",
  //     svg: (
  //       <GatsbyImage
  //         className="c-card-benefit__image"
  //         image={data.benefit_1.childImageSharp.gatsbyImageData}
  //         alt="benefit1"
  //         style={{ height: "100%" }}
  //       />
  //     ),
  //     desc: "新橋駅、有楽町駅から歩いて〇〇分！天気を気にせず、いつでも練習できます。",
  //   },
  //   {
  //     jaName: "セミパーソナルゴルフレッスン",
  //     svg: (
  //       <GatsbyImage
  //         className="c-card-benefit__image"
  //         image={data.benefit_2.childImageSharp.gatsbyImageData}
  //         alt="benefit2"
  //         style={{ height: "100%" }}
  //       />
  //     ),
  //     desc: "少人数だから、インストラクターが丁寧にレクチャーしみるみる上達できます！",
  //   },
  //   {
  //     jaName: "最新シミュレーター全打席完備",
  //     svg: (
  //       <GatsbyImage
  //         className="c-card-benefit__image"
  //         image={data.benefit_3.childImageSharp.gatsbyImageData}
  //         alt="benefit3"
  //         style={{ height: "100%" }}
  //       />
  //     ),
  //     desc: "全打席に最新のシミュレータを完備しているので、いつでも同じ環境で練習ができます。",
  //   },
  // ]

  const benefits = [
    {
      jaName: "駅チカで24時間営業！",
      svg: (
        <GatsbyImage
          className="c-card-benefit__image"
          image={data.benefit_1.childImageSharp.gatsbyImageData}
          alt="benefit1"
          style={{ height: "100%" }}
        />
      ),
      // desc: `東京メトロ新橋駅1番出口から徒歩1分！銀座中央通り沿いの黒いビルの地下1階です。\n駅近なので、仕事帰りや、ちょっと空いた時間にいつでも練習がです通いやすいです。もちろんレンタル道具は揃っているのて手ぶらでOK!!`,
      desc: [
        "東京メトロ新橋駅1番出口から徒歩1分！銀座中央通り沿いの黒いビルの地下1階です。",
        "駅近なので、仕事帰りや、ちょっと空いた時間にいつでも練習がです通いやすいです。もちろんレンタル道具は揃っているのて手ぶらでOK!!",
      ],
    },
    {
      jaName: "超少人数制だから楽しく短期間でメキメキ上達！",
      svg: (
        <GatsbyImage
          className="c-card-benefit__image"
          image={data.benefit_2.childImageSharp.gatsbyImageData}
          alt="benefit2"
          style={{ height: "100%" }}
        />
      ),
      desc: [
        "レッスンは最大2名だからじっくりレッスンを受けてじっくり反復練習することができます。",
      ],
    },
    {
      jaName: "全打席最新のシュミレーター完備で打ち放題！",
      svg: (
        <GatsbyImage
          className="c-card-benefit__image"
          image={data.benefit_3.childImageSharp.gatsbyImageData}
          alt="benefit3"
          style={{ height: "100%" }}
        />
      ),
      // desc: "超高性能カメラ内蔵だからスイングからインパクトの瞬間まで丸見えに！スピン量、打ち出し角などの数値を参考に科学的な練習が可能です。",
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
            // const texts = benefit.desc.split(/(\n)/).map((item, index) => {
            //   return (
            //     <React.Fragment key={index}>
            //       {item.match(/\n/) ? <br /> : item}
            //     </React.Fragment>
            //   )
            // })
            return (
              <div className="p-cards__item c-card-benefit">
                <figure className="c-card-benefit__icon-wrapper">
                  {benefit.svg}
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
