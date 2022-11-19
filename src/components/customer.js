import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Customer = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsCustomer(sort: { fields: customer_id, order: ASC }) {
        edges {
          node {
            attribute
            content
            customer_id
          }
        }
      }
    }
  `)
  return (
    <section className="l-customer">
      <div className="l-customer__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">お客様の声</h2>
        </div>
        <div className="p-cards p-cards--col2">
          {data.allMicrocmsCustomer.edges.map(({ node }) => {
            const texts = node.content.split(/(\n)/).map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.match(/\n/) ? <br /> : item}
                </React.Fragment>
              )
            })
            return (
              <>
                <div className="p-cards__item">
                  <div className="c-card-customers">
                    <div className="c-card-customers__body">
                      <p className="c-card-customers__attribute">
                        {node.attribute}
                      </p>
                      <p className="c-card-customers__text">{texts}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Customer
