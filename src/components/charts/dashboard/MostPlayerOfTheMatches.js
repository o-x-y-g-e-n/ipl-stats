import React from 'react'
import { Polar } from 'react-chartjs-2'
import { arrayToObject } from '../../../utils'
import { getRandomColor } from '../../../utils'
function MostPlayerOfTheMatches(props) {
  let mostPlayerOfMatch = props.data
    .sort((elem1, elem2) => elem2.totalCount - elem1.totalCount)
    .slice(0, 5)
  mostPlayerOfMatch = arrayToObject(mostPlayerOfMatch)
  return (
    <Polar
      type="polarArea"
      data={{
        labels: Object.keys(mostPlayerOfMatch),
        datasets: [
          {
            label: 'Top Players of the Match',
            data: Object.values(mostPlayerOfMatch),
            backgroundColor: getRandomColor(5),
          },
        ],
      }}
      options={{
        responsive: true,
      }}
    />
  )
}
export default MostPlayerOfTheMatches
