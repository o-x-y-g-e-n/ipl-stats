import React from 'react'
import { Line } from 'react-chartjs-2'
import { arrayToObject } from '../../../utils'

export const MatchesPlayedEachYear = (props) => {
  let matchesPerYear = arrayToObject(props.data)
  return (
    <Line
      type="line"
      data={{
        labels: Object.keys(matchesPerYear),
        datasets: [
          {
            label: 'Matches Per Year',
            data: Object.values(matchesPerYear),
            fill: false,
            borderColor: '#5F7DF5',
            borderWidth: 1,
            backgroundColor: '#2196f3',
          },
        ],
      }}
      options={{
        responsive: true,
        title: 'Matches Per Year',
      }}
    />
  )
}
