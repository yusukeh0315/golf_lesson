import React from "react"
import HeadingIcon from "./heading_icon"

const QuestionAndAnswer = () => {
  const qaBeginner = [
    {
      question:
        "はじめてでクラブも握った事がありませんが、体験レッスンを受けても良いですか？",
      answer:
        "もちろんご安心ください。誰もが最初はクラブを握ったことがない初心者です。一から丁寧にレクチャーするのでご安心ください。",
    },
    {
      question: "年齢制限はありますか？",
      answer:
        "年齢制限はございません。最年少の方は小学校1年生から、最年長82歳の方まで、皆様楽しく通っておられます。",
    },
    {
      question:
        "どのような服装が良いですか？また必要な持参しないといけないものはありますか？",
      answer:
        "更衣室を完備しておりますので、動きやすい格好をご準備ください。クラブ、シューズは無料レンタルがございますので手ぶらでお越しください。シューズレンタルの方は靴下があると安心です。グローブのご用意もありますが、昨今の感染症対策で気になる方はご持参ください。",
    },
    {
      question: "ゴルフの道具、何も持ってないですが大丈夫ですか？",
      answer:
        "クラブ、シューズは無料レンタルがございますので手ぶらでお越しください。シューズレンタルの方は靴下があると安心です。グローブはご準備はございますが昨今の感染症対策で気になる方はご持参ください。",
    },
  ]

  const qaFacility = [
    {
      question: "駐車場はありますか？",
      answer:
        "専用駐車場はございませんが、近隣にコインパーキングがございますのでご利用ください。",
    },
    {
      question: "更衣室、シャワーはありますか？",
      answer: "更衣室がございます。シャワーはございませんのでご容赦ください。",
    },
    {
      question: "自分のクラブを持参しても良いですか？",
      answer:
        "もちろんOKです。苦手なクラブなどありましたらお悩みをお聞かせください。",
    },
    {
      question: "クラブは預けられますか？",
      answer:
        "数に限りがございますが、有料のロッカーを準備しております。詳しくはお問合せください",
    },
  ]

  const qaLesson = [
    {
      question: "セミパーソナルレッスンとは何ですか？",
      answer:
        "1レッスン2名様まで（お客様2名に対して1名のコーチ）の超少人数制グループレッスンです。1名様あたりのレッスン時間は25分となっており3～4名のグループレッスンよりコーチからのティーチング時間も多く且つパーソナルよりもお手軽価格となる、良いとこどりのレッスンスタイルです。",
    },
    {
      question:
        "コースデビューまでにどのくらい期間、レッスンの回数がかかりますか？",
      answer:
        "過去のスポーツ経験などにより個人差はございます。ご自身の目標をお聞かせください。そこに向け、最短でコースデビューできるよう全力でサポートいたします。",
    },
  ]

  const qaSystem = [
    {
      question: "入会時に必要なものはありますか？",
      answer:
        "特にございません。まずはお気軽に体験レッスンに、お申込み頂き是非お越しください。",
    },
    {
      question: "退会はどうするのですか？",
      answer:
        "退会の際は、月末締めとなりますので、退会希望月の20日までにご来店いただきお手続きをお願いいたします。",
    },
    {
      question: "休会制度はありますか？",
      answer:
        "しばらくの間、来店できない時には、休会制度を設けておりますのでご安心ください。",
    },
    {
      question: "支払い方法はクレジットカードでも大丈夫ですか？",
      answer: "当店では、クレジットカード決済のみとさせていただいております。",
    },
    {
      question: "レッスンの予約はどうすればいいですか？",
      answer:
        "ご入会ののち、パソコンのブラウザやスマートフォンのアプリからご希望のお時間にご予約いただく形となります。ご不明な点がございましたらお気軽にお問い合わせください。",
    },
    {
      question: "キャンセルしたい時はどうすれば良いのでしょうか？",
      answer:
        "ご入会ののち、パソコンのブラウザやスマートフォンのアプリからご希望のお時間にご予約いただく形となります。ご不明な点がございましたらお気軽にお問い合わせください。",
    },
    {
      question: "キャンセルしたい時はどうすれば良いのでしょうか？",
      answer:
        "キャンセルは○○時間前までにお自身で、ブラウザやアプリで行っていただく形になっております。",
    },
  ]

  return (
    <section className="l-subsection">
      <div className="l-subsection__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">
            <HeadingIcon type="green" />
            良くある質問
          </h2>
        </div>
        <div className="p-section__title-wrapper">
          <h3 className="p-section__title-h3">これからゴルフを始めたい方</h3>
        </div>
        <div className="p-qa__wrapper">
          {qaBeginner.map(questionAndAnswer => {
            return (
              <>
                <div className="p-qa__body">
                  <p className="p-qa__question">
                    <span className="p-qa__underline">
                      Q {questionAndAnswer.question}
                    </span>
                  </p>
                  <p className="p-qa__answer">A {questionAndAnswer.answer}</p>
                </div>
              </>
            )
          })}
        </div>

        <div className="p-section__title-wrapper">
          <h3 className="p-section__title-h3">ご入会・ご予約に関して</h3>
        </div>
        <div className="p-qa__wrapper">
          {qaSystem.map(questionAndAnswer => {
            return (
              <>
                <div className="p-qa__body">
                  <p className="p-qa__question">
                    <span className="p-qa__underline">
                      Q {questionAndAnswer.question}
                    </span>
                  </p>
                  <p className="p-qa__answer">A {questionAndAnswer.answer}</p>
                </div>
              </>
            )
          })}
        </div>

        <div className="p-section__title-wrapper">
          <h3 className="p-section__title-h3">設備に関して</h3>
        </div>
        <div className="p-qa__wrapper">
          {qaFacility.map(questionAndAnswer => {
            return (
              <>
                <div className="p-qa__body">
                  <p className="p-qa__question">
                    <span className="p-qa__underline">
                      Q {questionAndAnswer.question}
                    </span>
                  </p>
                  <p className="p-qa__answer">A {questionAndAnswer.answer}</p>
                </div>
              </>
            )
          })}
        </div>

        <div className="p-section__title-wrapper">
          <h3 className="p-section__title-h3">レッスンスに関して</h3>
        </div>
        <div className="p-qa__wrapper">
          {qaLesson.map(questionAndAnswer => {
            return (
              <>
                <div className="p-qa__body">
                  <p className="p-qa__question">
                    <span className="p-qa__underline">
                      Q {questionAndAnswer.question}
                    </span>
                  </p>
                  <p className="p-qa__answer">A {questionAndAnswer.answer}</p>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default QuestionAndAnswer
