import React from "react"
import HeadingIcon from "./heading_icon"

const PriceTable = () => {

  return (
    <section className="l-subsection">
      <div className="l-subsection__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">
            <HeadingIcon type="tree" />
            料金
          </h2>
        </div>
        <div className="p-body__wrapper">
          <p className="p-body__text">
            初めてこのスタジオに通うつもりで来た人に、手続きの流れを説明。初めての場合の3ステップ（予約⇒来店⇒レッスン）くらいの大枠でわかりやすい表現ができるようであれば、ここに掲載。また料金表のコースがいくつかあるのであれば、どのようなニーズに対して、どのコースが適切かを案内する説明を行う。
          </p>
        </div>
        <div className="p-price-table__wrapper">
          <table className="p-price-table__table">
            <thead className="p-price-table__thead">
              <tr className="p-price-table__tr">
                <th className="p-price-table__th">会員区分</th>
                <th className="p-price-table__th">料金</th>
                <th className="p-price-table__th">ご利用時間</th>
                <th className="p-price-table__th">内容</th>
              </tr>
            </thead>
            <tbody className="p-price-table__tbody">
              <tr className="p-price-table__tr">
                <td className="p-price-table__td p-price-table__td--mobile-th">
                  オールデイパスポート
                </td>
                <td className="p-price-table__td p-price-table__td--mobile-price">
                  5000円
                </td>
                <td className="p-price-table__td p-price-table__td--mobile-time">
                  すべてOK
                </td>
                <td className="p-price-table__td p-price-table__td--mobile-desc">
                  営業時間内いつでもOK
                </td>
              </tr>
              <tr className="p-price-table__tr">
                <td className="p-price-table__td p-price-table__td--mobile-th">
                  オールデイパスポート
                </td>
                <td className="p-price-table__td p-price-table__td--mobile-price">
                  5000円
                </td>
                <td className="p-price-table__td p-price-table__td--mobile-time">
                  すべてOK
                </td>
                <td className="p-price-table__td p-price-table__td--mobile-desc">
                  営業時間内いつでもOK
                </td>
              </tr>
              <tr className="p-price-table__tr">
                <td className="p-price-table__td p-price-table__td--mobile-th">
                  オールデイパスポート
                </td>
                <td className="p-price-table__td p-price-table__td--mobile-price">
                  5000円
                </td>
                <td className="p-price-table__td p-price-table__td--mobile-time">
                  すべてOK
                </td>
                <td className="p-price-table__td p-price-table__td--mobile-desc">
                  営業時間内いつでもOK
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">
            <HeadingIcon type="tree" />
            無料レンタル
          </h2>
        </div>
        <div className="p-body__wrapper">
          <p className="p-body__text">
            ご自分のクラブやシューズの持ち込みはもちろん可能です。お持ちでない方は、レンタルが可能ですので、レッスン前にお申し出ください。
          </p>
          <ul className="p-body__list">
            <li className="p-body__item">ゴルフクラブ</li>
            <li className="p-body__item">シューズ</li>
            <li className="p-body__item">グローブ</li>
          </ul>
        </div>

        <div className="p-section__title-wrapper">
          <h2 className="p-section__title">
            <HeadingIcon type="tree" />
            インストラクター予定表
          </h2>
        </div>
        <div className="p-body__wrapper">
          <p className="p-body__text">インストラクター予定表はこちら</p>
        </div>
      </div>
    </section>
  )
}

export default PriceTable
