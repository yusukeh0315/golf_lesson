import React from "react"
import HeadingIcon from "./heading_icon"

const QuestionAndAnswer = () => {
  const questionAndAnswers = [
    {
      question: "質問",
      answer: "答え",
    },
    {
      question: "質問",
      answer: "答え",
    },
    {
      question: "質問",
      answer: "答え",
    },
    // {
    //   question: "駐車場はありますか？",
    //   answer: "駐車場はございません。周辺にコインパーキングをご利用ください。",
    // },
    // {
    //   question: "更衣室、シャワーはありますか？",
    //   answer: "シャワールームはありませんが、更衣室はあります。",
    // },
    // {
    //   question:
    //     "どのような服装が良いですか？また必要な持参しないといけないものはありますか？",
    //   answer: "動きやすい服装でお越しください。その他は無料でレンタルいたします。",
    // },
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
