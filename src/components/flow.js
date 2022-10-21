import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const Flow = ({ data }) => {
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
      name: "WEBでお申し込みください。",
      image: (
        <GatsbyImage
          className="c-card-flow__image"
          image={data.flow_1.childImageSharp.gatsbyImageData}
          alt="flow1"
          style={{ height: "100%" }}
        />
      ),
      desc: "パソコンまたはスマートフォンからお申込みいただけます。お申し込み後に詳細をご案内いたします。",
    },
    {
      step: "02",
      name: "体験レッスン当日",
      image: (
        <GatsbyImage
          className="c-card-flow__image"
          image={data.flow_2.childImageSharp.gatsbyImageData}
          alt="flow2"
          style={{ height: "100%" }}
        />
      ),
      desc: "開始時刻にフロントに10分前にお越しください。更衣室もあるので着替えも可能です。動きやすい服装、運動靴をご用意下さい。クラブ等はレンタル可能です。",
    },
    {
      step: "03",
      name: "インストラクターと面談、レッスン",
      image: (
        <GatsbyImage
          className="c-card-flow__image"
          image={data.flow_3.childImageSharp.gatsbyImageData}
          alt="flow3"
          style={{ height: "100%" }}
        />
      ),
      desc: "事前にゴルフ経験等についてお伺いした後、50分のレッスンを行います。レッスン後、インストラクターからお客様に合ったプログラムをご案内いたします。",
    },
  ]

  return (
    <section className="l-flow">
      <div className="l-flow__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">体験レッスンの流れ</h2>
        </div>
        <div className="p-cards p-cards-flow--col3">
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
                    <p className="c-card-flow__text">{flow.desc}</p>
                  </div>
                  {flow.step === "03" ? "" : arrow}
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
