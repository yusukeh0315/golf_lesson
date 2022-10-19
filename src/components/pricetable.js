import { Link } from "gatsby"
import React from "react"
import HeadingIcon from "./heading_icon"

const PriceTable = () => {
  return (
    <>
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

          <div className="p-section__title-wrapper">
            <h3 className="p-section__title-h3 p-section__title-h3--single-row-title">
              体験レッスン
            </h3>
          </div>

          <div className="p-price-table__wrapper">
            <table className="p-price-table__table">
              <tbody className="p-price-table__tbody">
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--single-row-th p-price-table__td--mobile-th">
                    体験レッスン（税込）
                  </td>
                  <td className="p-price-table__td p-price-table__td--single-row-td p-price-table__td--mobile-price">
                    2,200円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-section__title-wrapper">
            <h3 className="p-section__title-h3">
              レッスン会員 ～レッスンも受けたい！練習もしたい！という方～
            </h3>
            <p className="p-body__text-h3">
              セミパーソナル25分のレッスン月4回+レンジ使い放題のプランです。
            </p>
          </div>

          <div className="p-price-table__wrapper">
            <table className="p-price-table__table">
              <thead className="p-price-table__thead">
                <tr className="p-price-table__tr">
                  <th className="p-price-table__th">会員区分</th>
                  <th className="p-price-table__th">利用可能時間</th>
                  <th className="p-price-table__th">月会費（税込）</th>
                  <th className="p-price-table__th">
                    50分／1回 打席料（税込）
                  </th>
                </tr>
              </thead>
              <tbody className="p-price-table__tbody">
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--mobile-th">
                    全日レッスン会員
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-time">
                    全日
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-price-month">
                    25,300円
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-desc">
                    550円
                  </td>
                </tr>
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--mobile-th">
                    デイレッスン会員
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-time">
                    平日10時～17時
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-price-month">
                    19,800円
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-desc">
                    550円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-section__title-wrapper">
            <h3 className="p-section__title-h3">
              レンジ会員 ～自分のペースでじっくりと練習したい方～
            </h3>
            <p className="p-body__text-h3">レンジ使い放題のプランです。</p>
          </div>
          <div className="p-price-table__wrapper">
            <table className="p-price-table__table">
              <thead className="p-price-table__thead">
                <tr className="p-price-table__tr">
                  <th className="p-price-table__th">会員区分</th>
                  <th className="p-price-table__th">利用可能時間</th>
                  <th className="p-price-table__th">月会費（税込）</th>
                  <th className="p-price-table__th">
                    50分／1回 打席料（税込）
                  </th>
                </tr>
              </thead>
              <tbody className="p-price-table__tbody">
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--mobile-th">
                    全日レンジ会員
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-time">
                    全日
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-price-month">
                    17,600円
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-desc">
                    550円
                  </td>
                </tr>
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--mobile-th">
                    デイレンジ会員
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-time">
                    平日10時～17時
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-price-month">
                    12,100円
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-desc">
                    550円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-section__title-wrapper">
            <h3 className="p-section__title-h3 p-section__title-h3--single-row-title">
              追加レッスンチケット
            </h3>
          </div>
          <div className="p-price-table__wrapper">
            <table className="p-price-table__table">
              <tbody className="p-price-table__tbody">
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--single-row-th p-price-table__td--mobile-th">
                    25分追加レッスンチケット（税込）
                  </td>
                  <td className="p-price-table__td p-price-table__td--single-row-td p-price-table__td--mobile-price">
                    3,300円
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-body__wrapper">
              <p className="p-body__text">
                ※マンツーマンレッスンも対応可能ですので、お気軽にご相談・お問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="l-subsection">
        <div className="l-subsection__inner">
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
        </div>
      </section>
      <section className="l-subsection">
        <div className="l-subsection__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title">
              <HeadingIcon type="tree" />
              インストラクター予定表
            </h2>
          </div>
          <div className="p-body__wrapper">
            <p className="p-body__text">
              <Link to={`#`}>
                <button className="c-schedule_button">
                  インストラクター予定表はこちら
                </button>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default PriceTable
