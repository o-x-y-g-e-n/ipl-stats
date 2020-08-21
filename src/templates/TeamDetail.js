import React from 'react'
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {
  TopPlayersOfMatch,
  MatchesWonAndLost,
  TossWonAndLost,
} from '../components/charts'
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
  let table = props.data.table1.nodes.concat(props.data.table2.nodes)

  return (
    <Layout>
      <h1 className={classes.title}>{team}</h1>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            Top Players of all seasons
            <TopPlayersOfMatch data={props.data.playersOfTheMatch.nodes} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            Matches Won & Lost over years
            <MatchesWonAndLost
              win={props.data.winsPerSeason.group}
              loss1={props.data.matchesLosPerTeam1.group}
              loss2={props.data.matchesLosPerTeam2.group}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            Toss Won & Lost over years
            <TossWonAndLost
              win={props.data.tossWinPerSeason.group}
              loss1={props.data.tossLossPerSeason1.group}
              loss2={props.data.tossLossPerSeason2.group}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ flex: 1 }}>
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
