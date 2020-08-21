import React, { useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles } from '@material-ui/core/styles'
import { graphql } from 'gatsby'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Pie, HorizontalBar, Line, Polar, Bar } from 'react-chartjs-2'
import { getRandomColor } from '../utils'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))
const IndexPage = (props) => {
  const classes = useStyles()
  let matchesPerYear = props.data.matchesPerYear.group
  let matchesPerYearLabels = []
  let matchesPerYearValues = []
  matchesPerYear.forEach((data) => {
    matchesPerYearLabels.push(data.fieldValue)
    matchesPerYearValues.push(data.totalCount)
  })

  let mostPlayerOfMatch = props.data.mostPlayerOfTheMatch.group
    .sort((elem1, elem2) => elem2.totalCount - elem1.totalCount)
    .slice(0, 5)
  let mostPlayerOfMatchLabels = []
  let mostPlayerOfMatchValues = []
  mostPlayerOfMatch.forEach((data) => {
    mostPlayerOfMatchLabels.push(data.fieldValue)
    mostPlayerOfMatchValues.push(data.totalCount)
  })

  let matchesPerVenueLabels = []
  let matchesPerVenueData = []
  let matchesPerVenueColor = []
  props.data.matchesPerVenue.group.forEach((data) => {
    matchesPerVenueLabels.push(data.fieldValue)
    matchesPerVenueData.push(data.totalCount)
    matchesPerVenueColor.push(getRandomColor())
  })

  let matchesWonPerTeamLabels = []
  let matchesWonPerTeamData = []
  let matchesWonPerTeamDataColor = []
  props.data.matchesWonPerTeam.group.forEach((data) => {
    if (data.fieldValue) {
      matchesWonPerTeamLabels.push(data.fieldValue)
      matchesWonPerTeamData.push(data.totalCount)
      matchesWonPerTeamDataColor.push(getRandomColor())
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={12} lg={6}>
            Matches Played each year
            <Line
              type="line"
              data={{
                labels: matchesPerYearLabels,
                datasets: [
                  {
                    label: 'Matches Per Year',
                    data: matchesPerYearValues,
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
          </Grid>
          <Grid item sm={12} lg={6}>
            Most Player of the matches
            <Polar
              type="polarArea"
              data={{
                labels: mostPlayerOfMatchLabels,
                datasets: [
                  {
                    label: 'Top Players of the Match',
                    data: mostPlayerOfMatchValues,
                    backgroundColor: getRandomColor(5),
                  },
                ],
              }}
              options={{
                responsive: true,
              }}
            />
          </Grid>
          <Grid item sm={12} lg={6}>
            Win by Maximum Runs
            <Card>
              <CardContent>
                <h3>{props.data.highestWinByRun.nodes[0].win_by_runs}</h3>
                <div>
                  <span style={{ fontStyle: 'italic' }}>
                    {props.data.highestWinByRun.nodes[0].winner}
                  </span>{' '}
                  &nbsp;
                  <span>{props.data.highestWinByRun.nodes[0].season}</span>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} lg={6}>
            Matches Per Venue
            <HorizontalBar
              data={{
                labels: matchesPerVenueLabels,
                datasets: [
                  {
                    label: 'Matches Per Venue',
                    backgroundColor: getRandomColor(
                      matchesPerVenueLabels.length
                    ),
                    data: matchesPerVenueData,
                  },
                ],
              }}
              options={{
                responsive: true,
              }}
            />
          </Grid>
          <Grid item sm={12}>
            Matches Won Per Team
            <Bar
              options={{
                responsive: true,
              }}
              data={{
                labels: matchesWonPerTeamLabels,
                datasets: [
                  {
                    label: 'Matches Won By Team',
                    data: matchesWonPerTeamData,
                    backgroundColor: getRandomColor(
                      matchesPerVenueLabels.length
                    ),
                  },
                ],
              }}
            />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query {
    matchesPerYear: allMatchesCsv {
      group(field: season) {
        fieldValue
        totalCount
      }
    }
    mostPlayerOfTheMatch: allMatchesCsv {
      group(field: player_of_match) {
        fieldValue
        totalCount
      }
    }

    highestWinByRun: allMatchesCsv(
      sort: { fields: win_by_runs, order: DESC }
      limit: 1
    ) {
      nodes {
        winner
        win_by_runs
        season
      }
    }
    matchesPerVenue: allMatchesCsv {
      group(field: venue) {
        fieldValue
        totalCount
      }
    }
    matchesWonPerTeam: allMatchesCsv {
      group(field: winner) {
        totalCount
        fieldValue
      }
    }
  }
`
