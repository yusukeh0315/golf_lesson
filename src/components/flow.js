import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Flow = () => {
  const arrow = (
    <div className="c-card-flow__arrow-wrapper">
      <svg
        className="c-card-flow__arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
      </svg>
    </div>
  )

  const flows = [
    {
      step: "01",
      name: "WEB申込み",
      image: (
        <StaticImage
          className="c-card-flow__image"
          src="../images/flow_1.jpg"
          alt="ステップ1"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={80}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "ココレアゴルフスタジオでは、24時間いつでもWEBから簡単にお申し込みいただける予約システムをご利用いただけます。",
        "お電話でのお問合せは、レッスン中などで応答できない場合がございますので、ご了承ください。",
      ],
    },
    {
      step: "02",
      name: "ご来店",
      image: (
        <StaticImage
          className="c-card-flow__image"
          src="../images/flow_2.jpg"
          alt="ステップ2"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={80}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "体験レッスン当日は、ご予約時間の30分前に届く入退室管理システムのカギを使用して入室していただきます。",
        "当スタジオでは、レンタルゴルフクラブ、シューズ、手袋などご用意をしておりますので、手ぶらでお越しいただけます。また、更衣室も完備しておりますので、動きやすい格好をご準備ください。",
      ],
    },
    {
      step: "03",
      name: "カウンセリング・レッスン",
      image: (
        <StaticImage
          className="c-card-flow__image"
          src="../images/flow_3.jpg"
          alt="ステップ3"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={80}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "体験レッスンでは、まずはカウンセリングを行い、お客様のゴルフに対する悩みや目標をお聞かせいただきます。",
        "その後実際にレッスンを受けていただき、お客様のスイングの問題点を発見し、改善方法や練習方法をお伝えいたします。実際にこちらでどのようなレッスンを受けることができるのかを体験してください。",
      ],
    },
    {
      step: "04",
      name: "アフターフォロー・ご予約",
      image: (
        <StaticImage
          className="c-card-flow__image"
          src="../images/flow_4.jpg"
          alt="ステップ4"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={80}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "レッスン終了後には、フィードバックを行い、今後の課題や当スタジオのカリキュラムやシステムなどもご説明いたします。ご希望があれば、次回のレッスンのご予約も承ります。",
        "体験レッスンを通じて、ココレアゴルフスタジオでのレッスンスタイルや効果を実感していただけます。",
      ],
    },
  ]
  return (
    <section className="l-flow">
      <div className="l-flow__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">体験レッスンの流れ</h2>
        </div>
        <div className="p-cards p-cards-flow--col4">
          {flows.map(flow => {
            return (
              <>
                <div className="p-cards__item c-card-flow">
                  <figure className="c-card-flow__icon-wrapper">
                    {flow.image}
                  </figure>
                  <div className="card__body">
                    <div className="c-card-flow__title-wrapper">
                      <p className="c-card-flow__step">{flow.step}</p>
                      <h3 className="c-card-flow__title">{flow.name}</h3>
                    </div>
                    {flow.desc.map(text => (
                      <p className="c-card-flow__text">{text}</p>
                    ))}
                  </div>
                  {flow.step === "04" ? "" : arrow}
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Flow
