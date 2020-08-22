import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Doughnut } from 'react-chartjs-2'
import { getUnqiuePlayersOfMatch } from '../../../utils'

function TopPlayersOfMatch(props) {
  let { playersOfMatch, playersOfMatchColor } = getUnqiuePlayersOfMatch(
    props.data
  )
  const matches = useMediaQuery('(min-width:1000px)')

  return (
    <Doughnut
      options={{
        responsive: true,
        // maintainAspectRatio: false,
        legend: {
          display: matches ? true : false,
        },
      }}
      data={{
        labels: Object.keys(playersOfMatch),
        datasets: [
          {
            backgroundColor: playersOfMatchColor,
            data: Object.values(playersOfMatch),
          },
        ],
      }}
    />
  )
}
export default TopPlayersOfMatch
