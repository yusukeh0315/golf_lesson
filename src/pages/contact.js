import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SubView from "../components/subview"
import QuestionAndAnswer from "../components/qa"
import HeadingIcon from "../components/heading_icon"

import { graphql } from "gatsby"

const Contact = ({ data, location }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [disabled, setDisabled] = useState(true)

  const inputNameHandler = e => {
    console.log(e.target.value)
    setName(e.target.value)
    checkInput()
  }

  const inputEmailHandler = e => {
    setEmail(e.target.value)
    checkInput()
  }

  const inputMessageHandler = e => {
    setMessage(e.target.value)
    checkInput()
  }

  const checkInput = () => {
    if (name !== "" && email !== "" && message !== "") {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  return (
    <Layout page="contact">
      <Seo
        pagetitle="Contact"
        pagedesc="お問い合わせ"
        pagepath={location.pathname}
      />
      <SubView data={data} title="お問い合わせ" />

      <section className="l-contact">
        <div className="l-contact__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title js_typing">
              <HeadingIcon type="green" />
              お問い合わせフォーム
            </h2>
          </div>

          <div className="p-contact__lead-wrapper">
            <p className="p-contact__lead">
              ご質問・ご要望などございましたら、以下お問い合わせフォームよりお気軽にご連絡ください。
            </p>
          </div>

          <div className="p-contact__main">
            <form
              className="p-contact__form"
              name="contact"
              id="form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div className="p-contact__item">
                <label className="p-contact__label" htmlFor="name">
                  氏名<span className="c-require-label">必須</span>
                </label>
                <input
                  className="p-contact__input"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="氏名"
                  value={name}
                  onChange={inputNameHandler}
                />
              </div>
              <div className="p-contact__item">
                <label className="p-contact__label" htmlFor="email">
                  メールアドレス<span className="c-require-label">必須</span>
                </label>
                <input
                  className="p-contact__input"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="メールアドレス"
                  value={email}
                  onChange={inputEmailHandler}
                />
              </div>
              <div className="p-contact__item">
                <label className="p-contact__label" htmlFor="message">
                  お問い合わせ内容<span className="c-require-label">必須</span>
                </label>
                <textarea
                  className="p-contact__message"
                  id="message"
                  name="message"
                  placeholder="お問い合わせ内容"
                  defaultValue={""}
                  value={message}
                  onChange={inputMessageHandler}
                />
              </div>
              <input
                className={`c-submit-button ${
                  disabled ? "c-submit-button--disabled" : ""
                }`}
                disabled={disabled}
                type="submit"
              />
            </form>
          </div>
        </div>
        <QuestionAndAnswer />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    firstview: file(relativePath: { eq: "firstview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    firstview_1: file(relativePath: { eq: "firstview_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    firstview_2: file(relativePath: { eq: "firstview_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg: file(relativePath: { eq: "topbg.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg_1: file(relativePath: { eq: "topbg_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg_2: file(relativePath: { eq: "topbg_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg_3: file(relativePath: { eq: "topbg_3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    topbg_4: file(relativePath: { eq: "topbg_4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    contactview: file(relativePath: { eq: "contactview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    facilityview: file(relativePath: { eq: "facilityview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    priceview: file(relativePath: { eq: "priceview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    instructorview: file(relativePath: { eq: "instructorview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    entrance_image: file(relativePath: { eq: "entrance_image.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default Contact
