import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import { arrayToObject } from '../../../utils'
import { getRandomColor } from '../../../utils'

function MatchesPerVenue(props) {
  let matchesPerVenue = arrayToObject(props.data)
  return (
    <HorizontalBar
      id="rumal"
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
export default MatchesPerVenue
