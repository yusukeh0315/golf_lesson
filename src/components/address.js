import React from "react"

const Address = () => {
  const addressPostNum = "〒105-0004"
  const addressInfo = "東京都港区新橋1-7-11近鉄銀座中央通りビルⅡ地下1階"
  const telNumber1 = "03-6773-7770"
  const telNumber2 = "090-6484-5501"
  const businessDays = [
    {
      inquiryTime: "10:00 - 22:00",
      businessHours: "365日 24時間営業",
    },
  ]

  return (
    <>
      <address className="p-access__address">
        {addressPostNum} <br />
        {addressInfo}
      </address>
      <tel className="p-access__tel">
        <a href={`tel:${telNumber1}`}>{telNumber1}</a>
      </tel>
      <p className="p-access__tel-note">
        繋がらない場合には、下記の番号にお問い合わせください。
      </p>
      <tel className="p-access__tel">
        <a href={`tel:${telNumber2}`}>{telNumber2}</a>
      </tel>

      <table className="p-access__table">
        <tbody className="p-access__tbody">
          {businessDays.map(businessDay => {
            return (
              <>
                <tr className="p-access__tr">
                  <td className="p-access__td">お問い合わせ時間</td>
                  <td className="p-access__td">{businessDay.inquiryTime}</td>
                </tr>

                <tr className="p-access__tr">
                  <td className="p-access__td">スタジオ営業時間</td>
                  <td className="p-access__td">{businessDay.businessHours}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
      <p className="p-access__note">
        お問い合わせ時間内であっても、レッスン等で出られない時間がございますのでご了承ください。
      </p>
    </>
  )
}

export default Address
