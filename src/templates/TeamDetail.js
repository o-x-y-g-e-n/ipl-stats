import React, { Suspense } from 'react'
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LazyLoad from 'react-lazyload'
import LoadingAnimation from '../components/LoadingAnimation'
const TopPlayersOfMatch = React.lazy(() =>
  import('../components/charts/team/TopPlayersOfMatch')
)
const MatchesWonAndLost = React.lazy(() =>
  import('../components/charts/team/MatchesWonAndLost')
)
const TossWonAndLost = React.lazy(() =>
  import('../components/charts/team/TossWonAndLost')
)

const TeamTable = React.lazy(() => import('../components/TeamTable'))

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
            <LazyLoad once={true}>
              <Suspense fallback={<LoadingAnimation />}>
                <TopPlayersOfMatch data={props.data.playersOfTheMatch.nodes} />
              </Suspense>
            </LazyLoad>
            <p>
              Vivamus a leo sollicitudin, eleifend dolor vel, tincidunt ipsum.
              Donec tempus elit egestas mollis maximus. Nunc eu odio a purus
              dignissim viverra. Sed orci nibh, consequat eget nibh vel,
              ultrices luctus ante. Vivamus vehicula odio eu est tincidunt
              venenatis. Cras facilisis at orci eu iaculis. Etiam malesuada
              mauris vestibulum porta fringilla. Aenean maximus felis nunc, ut
              mattis leo hendrerit et. Cras maximus nec velit vitae tincidunt.
              Aliquam a mauris libero. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque blandit vitae purus a imperdiet.
              Quisque et eros leo. Ut feugiat mattis luctus.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            Matches Won & Lost over years
            <LazyLoad once={true} placeholder={<div>Loading...</div>}>
              <Suspense fallback={<LoadingAnimation />}>
                <MatchesWonAndLost
                  win={props.data.winsPerSeason.group}
                  loss1={props.data.matchesLosPerTeam1.group}
                  loss2={props.data.matchesLosPerTeam2.group}
                />
              </Suspense>
            </LazyLoad>
            <p>
              Vivamus a leo sollicitudin, eleifend dolor vel, tincidunt ipsum.
              Donec tempus elit egestas mollis maximus. Nunc eu odio a purus
              dignissim viverra. Sed orci nibh, consequat eget nibh vel,
              ultrices luctus ante. Vivamus vehicula odio eu est tincidunt
              venenatis. Cras facilisis at orci eu iaculis. Etiam malesuada
              mauris vestibulum porta fringilla. Aenean maximus felis nunc, ut
              mattis leo hendrerit et. Cras maximus nec velit vitae tincidunt.
              Aliquam a mauris libero. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque blandit vitae purus a imperdiet.
              Quisque et eros leo. Ut feugiat mattis luctus.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            Toss Won & Lost over years
            <LazyLoad once={true} placeholder={<div>Loading...</div>}>
              <Suspense fallback={<LoadingAnimation />}>
                <TossWonAndLost
                  win={props.data.tossWinPerSeason.group}
                  loss1={props.data.tossLossPerSeason1.group}
                  loss2={props.data.tossLossPerSeason2.group}
                />
              </Suspense>
            </LazyLoad>
            <p>
              Vivamus a leo sollicitudin, eleifend dolor vel, tincidunt ipsum.
              Donec tempus elit egestas mollis maximus. Nunc eu odio a purus
              dignissim viverra. Sed orci nibh, consequat eget nibh vel,
              ultrices luctus ante. Vivamus vehicula odio eu est tincidunt
              venenatis. Cras facilisis at orci eu iaculis. Etiam malesuada
              mauris vestibulum porta fringilla. Aenean maximus felis nunc, ut
              mattis leo hendrerit et. Cras maximus nec velit vitae tincidunt.
              Aliquam a mauris libero. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque blandit vitae purus a imperdiet.
              Quisque et eros leo. Ut feugiat mattis luctus.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ flex: 1 }}>
            <LazyLoad once={true} placeholder={<div>Loading...</div>}>
              <Suspense fallback={<LoadingAnimation />}>
                <TeamTable data={table} />
              </Suspense>
            </LazyLoad>
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
