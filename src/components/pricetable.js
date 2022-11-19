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

          <div className="p-section__title-wrapper">
            <h3 className="p-section__title-h3 p-section__title-h3--single-row-title">
              入会金
            </h3>
            <p className="p-body__text-h3  p-body__text-h3--pc">
              先着55名様5,500円キャンペーン中
            </p>
          </div>

          <div className="p-price-table__wrapper">
            <table className="p-price-table__table">
              <tbody className="p-price-table__tbody">
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--single-row-th p-price-table__td--mobile-th">
                    入会金（税込）
                  </td>
                  <p className="p-body__text-h3 p-body__text-h3--sp">
                    先着55名様5,500円キャンペーン中
                  </p>

                  <td className="p-price-table__td p-price-table__td--single-row-td p-price-table__td--mobile-price">
                    22,000円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-section__title-wrapper">
            <h3 className="p-section__title-h3 p-section__title-h3--single-row-title">
              システム登録料
            </h3>
          </div>

          <div className="p-price-table__wrapper">
            <table className="p-price-table__table">
              <tbody className="p-price-table__tbody">
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--single-row-th p-price-table__td--mobile-th">
                    システム登録料（税込）
                  </td>
                  <td className="p-price-table__td p-price-table__td--single-row-td p-price-table__td--mobile-price">
                    6,600円
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-price-table__annotation-wrapper">
              <span className="p-price-table__annotation">
                ※システムの関係上、入会金とシステム登録料を合算させて頂きますことご了承ください。
              </span>
            </div>
          </div>

          <div className="p-section__title-wrapper">
            <h3 className="p-section__title-h3 p-section__title-h3--single-row-title">
              体験レッスン
            </h3>
            <p className="p-body__text-h3 p-body__text-h3--pc">
              体験レッスンの流れはトップページをご覧ください。お気軽にお申し込みください。
            </p>
          </div>

          <div className="p-price-table__wrapper">
            <table className="p-price-table__table">
              <tbody className="p-price-table__tbody">
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--single-row-th p-price-table__td--mobile-th">
                    体験レッスン（税込）
                  </td>
                  <p className="p-body__text-h3 p-body__text-h3--sp">
                    体験レッスンの流れはトップページをご覧ください。お気軽にお申し込みください。
                  </p>
                  <td className="p-price-table__td p-price-table__td--single-row-td p-price-table__td--mobile-price">
                    2,200円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-section__title-wrapper">
            <h3 className="p-section__title-h3">レンジ会員</h3>
            <p className="p-body__text-h3">
              自分のペースでじっくりと練習したい方向けのレンジ使い放題のプランです。
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
                    全日会員
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-time">
                    全日
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-price-month">
                    15,400円
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-desc">
                    550円
                  </td>
                </tr>
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--mobile-th">
                    デイ会員
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
            <h3 className="p-section__title-h3">スクール会員</h3>
            <p className="p-body__text-h3">
              自分のペースでじっくりと練習しながらレッスンも受けたい方向けのプランです。お客様最大で2名様にコーチ1名の超少人数グループレッスンです。月4回レッスンを受けられます。
            </p>
          </div>

          <div className="p-price-table__wrapper">
            <table className="p-price-table__table">
              <thead className="p-price-table__thead">
                <tr className="p-price-table__tr">
                  <th className="p-price-table__th">会員区分</th>
                  <th className="p-price-table__th">利用可能時間</th>
                  <th className="p-price-table__th">月会費</th>
                  <th className="p-price-table__th">スクール会費</th>
                  <th className="p-price-table__th">50分／1回 打席料</th>
                  <th className="p-price-table__th">合計（税込）</th>
                </tr>
              </thead>
              <tbody className="p-price-table__tbody">
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--mobile-th">
                    全日会員
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-time">
                    全日
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-price-month">
                    15,400円
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-price-school">
                    11,000円
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-desc">
                    0円
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-total">
                    26,400円
                  </td>
                </tr>
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--mobile-th">
                    デイ会員
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-time">
                    平日10時～17時
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-price-month">
                    12,100円
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-price-school">
                    11,000円
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-desc">
                    0円
                  </td>
                  <td className="p-price-table__td p-price-table__td--mobile-total">
                    23,100円
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-price-table__annotation-wrapper">
              <span className="p-price-table__annotation">
                ※スクール以外でのレンジ利用は別途打席料として550円（税込）／回頂戴いたします。
              </span>
            </div>
          </div>

          {/* <div className="p-section__title-wrapper">
            <h3 className="p-section__title-h3 p-section__title-h3--single-row-title">
              レッスンチケット
            </h3>
          </div>
          <div className="p-price-table__wrapper">
            <table className="p-price-table__table">
              <tbody className="p-price-table__tbody">
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--single-row-th p-price-table__td--mobile-th">
                    レッスンチケット（税込）
                  </td>
                  <td className="p-price-table__td p-price-table__td--single-row-td p-price-table__td--mobile-price">
                    4,400円
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <div className="p-section__title-wrapper">
            <h3 className="p-section__title-h3">その他</h3>
            <p className="p-body__text-h3">
              VIPプランもございますので、お気軽にご相談、お問い合わせください。
            </p>
          </div>
        </div>
      </section>

      <section className="l-subsection">
        <div className="l-subsection__inner">
          <div className="p-section__title-wrapper">
            <h2 className="p-section__title">
              <HeadingIcon type="tree" />
              施設利用料金
            </h2>
          </div>

          <div className="p-price-table__wrapper">
            <table className="p-price-table__table">
              <tbody className="p-price-table__tbody">
                <tr className="p-price-table__tr">
                  <td className="p-price-table__td p-price-table__td--single-row-th p-price-table__td--mobile-th">
                    個人レンタルロッカー利用料月額（税込）
                  </td>
                  <td className="p-price-table__td p-price-table__td--single-row-td p-price-table__td--mobile-price">
                    5,500円
                  </td>
                </tr>
              </tbody>
            </table>
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
            <ul className="p-body__list">
              <li className="p-body__item">
                男性用ゴルフクラブ（スチール、カーボン）
              </li>
              <li className="p-body__item">女性用ゴルフクラブ（カーボン）</li>
              <li className="p-body__item">スパイク</li>
              <li className="p-body__item">
                グローブ（感染症対策の観点でご持参いただけますと安心です）
              </li>
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
              <Link to={`https://cocolea.riber.jp/`}>
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
