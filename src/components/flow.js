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
      name: "WEBでお申し込みください",
      image: (
        <StaticImage
          className="c-card-flow__image"
          src="../images/flow_1.jpg"
          alt="ステップ1"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={10}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "ココレアゴルフではWEB予約システムを採用しております。WEBからお申込みをお願いいたします。",
        "お電話はレッスン等で出ることができない場合がございますのでご了承ください。",
      ],
    },
    {
      step: "02",
      name: "体験レッスン当日",
      image: (
        <StaticImage
          className="c-card-flow__image"
          src="../images/flow_2.jpg"
          alt="ステップ2"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={10}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "当日はお時間10分ほど前にお越しください。ご予約時間の30分前に入退室管理システムから届くカギを使用して入室ください。",
        "ゴルフクラブ、シューズはご用意がございます。感染症対策の観点でグローブはご持参いただけますと安心です。更衣室がございますので、動きやすい格好をご準備ください。",
      ],
    },
    {
      step: "03",
      name: "事前面談・レッスン",
      image: (
        <StaticImage
          className="c-card-flow__image"
          src="../images/flow_3.jpg"
          alt="ステップ3"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={10}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "先ずはカウンセリングでお悩みや目標をお聞かせください。",
        "その後レッスン開始です。現在の問題点を浮き彫りにし改善方法や練習方法をお伝えします。",
        "ココレアゴルフでどのようにレッスンが行われているのか体験してください。",
      ],
    },
    {
      step: "04",
      name: "フィードバック",
      image: (
        <StaticImage
          className="c-card-flow__image"
          src="../images/flow_4.jpg"
          alt="ステップ4"
          style={{ height: "100%" }}
          loading="eager"
          backgroundColor="transparent"
          quality={10}
          placeholder="BLURRED"
        />
      ),
      desc: [
        "最後に、今後の課題とココレアゴルフのカリキュラム、システムなどについてご説明いたします。",
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
