import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import { arrayToObject } from '../../../utils'
import { getRandomColor } from '../../../utils'
export const MatchesPerVenue = (props) => {
  let matchesPerVenue = arrayToObject(props.data)
  return (
    <HorizontalBar
      data={{
        labels: Object.keys(matchesPerVenue),
        datasets: [
          {
            label: 'Matches Per Venue',
            backgroundColor: getRandomColor(
              Object.keys(matchesPerVenue).length
            ),
            data: Object.values(matchesPerVenue),
          },
        ],
      }}
      options={{
        responsive: true,
      }}
    />
  )
}
