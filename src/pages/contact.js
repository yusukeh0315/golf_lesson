import React, { useState } from "react"
import HeadingIcon from "../components/heading_icon"
import Layout from "../components/layout"
import QuestionAndAnswer from "../components/qa"
import Seo from "../components/seo"
import SubView from "../components/subview"

import { graphql } from "gatsby"
import { useForm } from "react-hook-form"

const Contact = ({ data, location }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [disabled, setDisabled] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <Layout page="contact">
      <Seo
        pagetitle="お問い合わせ"
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
            <p className="p-body__text">
              ご質問・ご要望などございましたら、以下お問い合わせフォームよりお気軽にご連絡ください。
            </p>
          </div>

          <div className="p-contact__main">
            <form
              className="p-contact__form"
              name="contact"
              id="form"
              method="POST"
              action="https://ssgform.com/s/Zuju97p82Cil"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div style={{ display: "none" }}>
                <input type="text" name="trap" />
              </div>
              <div className="p-contact__item">
                <label className="p-contact__label" htmlFor="name">
                  氏名<span className="c-require-label">必須</span>
                </label>
                <input
                  className="p-contact__input"
                  id="name"
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <div className="c-error-message">
                    氏名を入力してください。
                  </div>
                )}
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
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <div className="c-error-message">
                    メールアドレスを入力してください。
                  </div>
                )}
              </div>
              <div className="p-contact__item">
                <label className="p-contact__label" htmlFor="message">
                  お問い合わせ内容<span className="c-require-label">必須</span>
                </label>
                <textarea
                  className="p-contact__message"
                  id="message"
                  name="message"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <div className="c-error-message">
                    お問い合わせ内容を入力してください。
                  </div>
                )}
              </div>
              <input
                type="submit"
                className="c-submit-button"
                // className={`c-submit-button ${
                //   disabled ? "c-submit-button--disabled" : ""
                // }`}
                // disabled={disabled}
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
    contactview: file(relativePath: { eq: "contactview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default Contact
