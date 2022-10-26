import React from "react"

const Address = () => {
  const addressPostNum = "〒105-0004"
  const addressInfo = "東京都港区新橋1-7-11近鉄銀座中央通りビル地下1階"
  const telNumber = "090-6484-5501"
  const businessDays = [
    {
      inquiryTime: "10:00 - 22:00",
      businessHours: "365日 24時間営業",
    },
    // {
    //   dayOfWeek: "土曜日、日曜日、祝日",
    //   timeZone: "10:00～21:00",
    // },
  ]

  return (
    <>
      <address className="p-access__address">
        {addressPostNum} <br />
        {addressInfo}
      </address>
      <tel className="p-access__tel">{telNumber}</tel>

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
        お問い合わせ時間内であっても、レッスン等で出られない時間がございますのでご了承下さい。
      </p>
    </>
  )
}

export default Address
