import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

function WinByMaxRuns(props) {
  return (
    <Card>
      <CardContent>
        <h3>{props.run}</h3>
        <div>
          <span style={{ fontStyle: 'italic' }}>{props.winner}</span> &nbsp;
          <span>{props.season}</span>
        </div>
      </CardContent>
    </Card>
  )
}
export default WinByMaxRuns
