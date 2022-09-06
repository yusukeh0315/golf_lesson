import React from "react"

const Address = () => {
  const addressPostNum = "〒XXX-XXX"
  const addressInfo = "東京都港区新橋XXX-XXX"
  const telNumber = "XXX-XXX-XXXX"
  const businessDays = [
    {
      dayOfWeek: "月曜日～金曜",
      timeZone: "12:00～20:00",
    },
    {
      dayOfWeek: "土曜日、日曜日、祝日",
      timeZone: "10:00～21:00",
    },
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
                  <td className="p-access__td">{businessDay.dayOfWeek}</td>
                  <td className="p-access__td">{businessDay.timeZone}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Address
