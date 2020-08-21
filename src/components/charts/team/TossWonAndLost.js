import React from 'react'
import { Bar } from 'react-chartjs-2'
import { arrayToObject } from '../../../utils'

export const TossWonAndLost = (props) => {
  let tossWinPerSeason = arrayToObject(props.win)
  let tossLossPerSeason1 = arrayToObject(props.loss1)
  let tossLossPerSeason2 = arrayToObject(props.loss2)
  Object.keys(tossLossPerSeason1).forEach((val) => {
    if (tossLossPerSeason2.hasOwnProperty(val)) {
      tossLossPerSeason1[val] =
        tossLossPerSeason1[val] + tossLossPerSeason2[val]
    }
  })
  return (
    <Bar
      options={{
        responsive: true,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      }}
      data={{
        labels: Object.keys(tossWinPerSeason),
        datasets: [
          {
            label: 'Toss Won Per Season',
            backgroundColor: 'rgba(46, 44, 211,0.7)',
            data: Object.values(tossWinPerSeason),
          },
          {
            label: 'Toss Lost Per Season',
            backgroundColor: 'rgba(215, 44, 44, 0.7)',
            data: Object.values(tossLossPerSeason1),
          },
        ],
      }}
    />
  )
}
