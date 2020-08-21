import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles } from '@material-ui/core/styles'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import {
  MatchesPlayedEachYear,
  MostPlayerOfTheMatches,
  WinByMaxRuns,
  MatchesWonPerTeam,
  MatchesPerVenue,
} from '../components/charts'
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

  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={12} lg={6}>
            Matches Played each year
            <MatchesPlayedEachYear data={props.data.matchesPerYear.group} />
          </Grid>
          <Grid item sm={12} lg={6}>
            Most Player of the matches
            <MostPlayerOfTheMatches
              data={props.data.mostPlayerOfTheMatch.group}
            />
          </Grid>
          <Grid item sm={12} lg={6}>
            Win by Maximum Runs
            <WinByMaxRuns
              run={props.data.highestWinByRun.nodes[0].win_by_runs}
              winner={props.data.highestWinByRun.nodes[0].winner}
              season={props.data.highestWinByRun.nodes[0].season}
            />
          </Grid>
          <Grid item sm={12} lg={6}>
            Matches Per Venue
            <MatchesPerVenue data={props.data.matchesPerVenue.group} />
          </Grid>
          <Grid item sm={12}>
            Matches Won Per Team
            <MatchesWonPerTeam data={props.data.matchesWonPerTeam.group} />
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
