import React from 'react'
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {
  getUnqiuePlayersOfMatch,
  getRandomColor,
  arrayToObject,
} from '../utils'
import { Bar, Doughnut } from 'react-chartjs-2'
import TeamTable from '../components/TeamTable'
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
const TeamDetail = (props) => {
  const classes = useStyles()
  const { team } = props.pageContext

  // Players and Players of Match
  let { playersOfMatch, playersOfMatchColor } = getUnqiuePlayersOfMatch(
    props.data.playersOfTheMatch.nodes
  )
  // Wins and Losses by season
  let winsPerSeason = arrayToObject(props.data.winsPerSeason.group)
  console.log(props.data)
  let lossPerSeason1 = arrayToObject(props.data.matchesLosPerTeam1.group)
  let lossPerSeason2 = arrayToObject(props.data.matchesLosPerTeam2.group)
  Object.keys(lossPerSeason1).forEach((val) => {
    if (lossPerSeason2.hasOwnProperty(val)) {
      lossPerSeason1[val] = lossPerSeason1[val] + lossPerSeason2[val]
    }
  })

  //   toss win and loss
  let tossWinPerSeason = arrayToObject(props.data.tossWinPerSeason.group)
  let tossLossPerSeason1 = arrayToObject(props.data.tossLossPerSeason1.group)
  let tossLossPerSeason2 = arrayToObject(props.data.tossLossPerSeason2.group)
  Object.keys(tossLossPerSeason1).forEach((val) => {
    if (tossLossPerSeason2.hasOwnProperty(val)) {
      tossLossPerSeason1[val] =
        tossLossPerSeason1[val] + tossLossPerSeason2[val]
    }
  })
  let table = props.data.table1.nodes.concat(props.data.table2.nodes)
  return (
    <Layout>
      <h1 className={classes.title}>{team}</h1>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={12} lg={12}>
            Top Players of all seasons
            <Doughnut
              options={{
                responsive: true,
                // maintainAspectRatio: true,
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
          </Grid>
          <Grid item sm={12} lg={6}>
            Matches Won & Lost over years
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
          </Grid>
          <Grid item sm={12} lg={6}>
            Toss Won & Lost over years
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
          </Grid>
          <Grid item sm={12} lg={12} style={{ flex: 1 }}>
            <TeamTable data={table} />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default TeamDetail
export const pageQuery = graphql`
  query($team: String!) {
    matchesWonPerYear: allMatchesCsv(filter: { winner: { eq: $team } }) {
      group(field: season) {
        fieldValue
        totalCount
      }
    }
    playersOfTheMatch: allMatchesCsv(
      filter: { result: { eq: "normal" }, winner: { eq: $team } }
    ) {
      nodes {
        player_of_match
        season
      }
    }
    winsPerSeason: allMatchesCsv(
      filter: { winner: { eq: "Chennai Super Kings" } }
    ) {
      group(field: season) {
        fieldValue
        totalCount
      }
    }
    matchesLosPerTeam1: allMatchesCsv(
      filter: {
        winner: { ne: $team }
        team1: { eq: $team }
        team2: { ne: $team }
      }
    ) {
      group(field: season) {
        fieldValue
        totalCount
      }
    }
    matchesLosPerTeam2: allMatchesCsv(
      filter: {
        winner: { ne: $team }
        team1: { ne: $team }
        team2: { eq: $team }
      }
    ) {
      group(field: season) {
        fieldValue
        totalCount
      }
    }
    tossWinPerSeason: allMatchesCsv(filter: { toss_winner: { eq: $team } }) {
      group(field: season) {
        fieldValue
        totalCount
      }
    }
    tossLossPerSeason1: allMatchesCsv(
      filter: {
        toss_winner: { ne: $team }
        team1: { ne: $team }
        team2: { eq: $team }
      }
    ) {
      group(field: season) {
        fieldValue
        totalCount
      }
    }
    tossLossPerSeason2: allMatchesCsv(
      filter: {
        toss_winner: { ne: $team }
        team1: { eq: $team }
        team2: { ne: $team }
      }
    ) {
      group(field: season) {
        fieldValue
        totalCount
      }
    }
    table1: allMatchesCsv(filter: { team1: { eq: $team } }) {
      nodes {
        city
        date
        dl_applied
        player_of_match
        result
        season
        team1
        team2
        toss_decision
        toss_winner
        venue
        win_by_runs
        win_by_wickets
        winner
      }
    }
    table2: allMatchesCsv(filter: { team2: { eq: $team } }) {
      nodes {
        city
        date
        dl_applied
        player_of_match
        result
        season
        team1
        team2
        toss_decision
        toss_winner
        venue
        win_by_runs
        win_by_wickets
        winner
      }
    }
  }
`
