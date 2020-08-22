import React from 'react'
import { Bar } from 'react-chartjs-2'
import { arrayToObject } from '../../../utils'
import { getRandomColor } from '../../../utils'

function MatchesWonPerTeam  (props) {
  let matchesWon = arrayToObject(props.data)
  return (
    <Bar
      options={{
        responsive: true,
      }}
      data={{
        labels: Object.keys(matchesWon),
        datasets: [
          {
            label: 'Matches Won By Team',
            data: Object.values(matchesWon),
            backgroundColor: getRandomColor(Object.keys(matchesWon).length),
          },
        ],
      }}
    />
  )
}
export default MatchesWonPerTeam;