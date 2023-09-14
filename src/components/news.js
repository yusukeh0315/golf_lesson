import React from "react"

const News = () => {
  return (
    <>
      <section className="l-news">
        <div className="l-news__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title">お知らせ</h2>
          </div>
          <div className="p-news__wrapper">
            <div className="p-news__content">
              <h3 className="p-news__title">
                <a
                  href="https://golf-joshibu.com/golfschool-ginza/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  銀座・有楽町・新橋のゴルフレッスンおすすめ15選
                </a>
              </h3>
              <p className="p-news__text">
                ゴルフ女子部の銀座・有楽町・新橋のゴルフレッスンおすすめ15選に紹介されました
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default News
