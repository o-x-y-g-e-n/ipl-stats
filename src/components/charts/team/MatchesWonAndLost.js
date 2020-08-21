import React from 'react'
import { Bar } from 'react-chartjs-2'
import { arrayToObject } from '../../../utils'

export const MatchesWonAndLost = (props) => {
  let winsPerSeason = arrayToObject(props.win)
  console.log(props.data)
  let lossPerSeason1 = arrayToObject(props.loss1)
  let lossPerSeason2 = arrayToObject(props.loss2)
  Object.keys(lossPerSeason1).forEach((val) => {
    if (lossPerSeason2.hasOwnProperty(val)) {
      lossPerSeason1[val] = lossPerSeason1[val] + lossPerSeason2[val]
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
        labels: Object.keys(winsPerSeason),
        datasets: [
          {
            label: 'Won Per Season',
            backgroundColor: 'rgba(46, 44, 211,0.7)',
            data: Object.values(winsPerSeason),
          },
          {
            label: 'Lost Per Season',
            backgroundColor: 'rgba(215, 44, 44, 0.7)',
            data: Object.values(lossPerSeason1),
          },
        ],
      }}
    />
  )
}