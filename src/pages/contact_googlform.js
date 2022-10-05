import { graphql } from "gatsby"
import React from "react"
import { useForm } from "react-hook-form"
import HeadingIcon from "../components/heading_icon"
import Layout from "../components/layout"
import QuestionAndAnswer from "../components/qa"
import Seo from "../components/seo"
import SubView from "../components/subview"

const Contact = ({ data, location }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    // const baseUrl = "https://ssgform.com/s/Zuju97p82Cil"
    const baseUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScpSxRaI0fQKOVBk3ndnCUAIAS2aE8bsT57Uf-WCiCP8DZqzw/formResponse"
    let params = {
      "entry.1016728782": data["name"],
      "entry.1198204212": data["email"],
      "entry.829966884": data["message"],
    }
    console.log(params)
    console.log(data)

    let formBody = []
    for (let property in params) {
      let encodedKey = encodeURIComponent(property)
      let encodedValue = encodeURIComponent(params[property])
      formBody.push(encodedKey + "=" + encodedValue)
    }
    formBody = formBody.join("&").replace(/%20/g, "+")

    let xhr = new XMLHttpRequest()
    xhr.open("POST", baseUrl)
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    xhr.send(formBody)

    // navigate(`/contact_done`)
  }

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
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="p-contact__item">
                <label className="p-contact__label" htmlFor="name">
                  氏名<span className="c-require-label">必須</span>
                </label>
                <input
                  className="p-contact__input"
                  id="name"
                  type="text"
                  name="entry.1016728782"
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
                  name="entry.1198204212"
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
                  name="entry.829966884"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <div className="c-error-message">
                    お問い合わせ内容を入力してください。
                  </div>
                )}
              </div>
              <input type="submit" className="c-submit-button" />
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
