import React from "react"
import HeadingIcon from "./heading_icon"

const QuestionAndAnswer = () => {
  const questionAndAnswers = [
    {
      question: "駐車場はありますか？",
      answer: "駐車場はございません。周辺にコインパーキングをご利用ください。",
    },
    {
      question: "更衣室、シャワーはありますか？",
      answer: "シャワールームはありませんが、更衣室はあります。",
    },
    {
      question:
        "どのような服装が良いですか？また必要な持参しないといけないものはありますか？",
      answer: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    {
      question: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX？",
      answer: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
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

        <div className="p-qa__wrapper">
          {questionAndAnswers.map(questionAndAnswer => {
            return (
              <>
                <div className="p-qa__body">
                  <p className="p-qa__question">
                    Q {questionAndAnswer.question}
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
