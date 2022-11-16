import React from "react"

const Customer = ({ data }) => {
  return (
    <section className="l-customer">
      <div className="l-customer__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">お客様の声</h2>
        </div>
        <div className="p-cards p-cards--col2">
          {data.allMicrocmsCustomer.edges.map(({ node }) => {
            return (
              <>
                <div className="p-cards__item">
                  <div className="c-card-customers">
                    {/* <figure className="c-card-customers__logo-wrapper">
                      <img
                        className="c-card-customers__logo"
                        src={node.image.url}
                        alt=""
                      />
                    </figure> */}
                    <div className="c-card-customers__body">
                      <p className="c-card-customers__attribute">
                        {node.attribute}
                      </p>
                      <p className="c-card-customers__text">{node.content}</p>
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
