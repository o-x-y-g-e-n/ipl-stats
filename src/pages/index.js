import React, { Suspense } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { makeStyles } from '@material-ui/core/styles'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import LazyLoad from 'react-lazyload'
import LoadingAnimation from '../components/LoadingAnimation'
const MatchesPlayedEachYear = React.lazy(() =>
  import('../components/charts/dashboard/MatchesPlayedEachYear')
)
const MostPlayerOfTheMatches = React.lazy(() =>
  import('../components/charts/dashboard/MostPlayerOfTheMatches')
)
const WinByMaxRuns = React.lazy(() =>
  import('../components/charts/dashboard/WinByMaxRuns')
)
const MatchesWonPerTeam = React.lazy(() =>
  import('../components/charts/dashboard/MatchesWonPerTeam')
)
const MatchesPerVenue = React.lazy(() =>
  import('../components/charts/dashboard/MatchesPerVenue')
)

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
        <Grid container alignItems="center" spacing={2}>
          <Grid item sm={12} lg={6}>
            Matches Played each year
            <Suspense fallback={<LoadingAnimation />}>
              <MatchesPlayedEachYear data={props.data.matchesPerYear.group} />
            </Suspense>
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
          <Grid item sm={12} lg={6}>
            Most Player of the matches
            <LazyLoad
              once={true}
              placeholder={<div>Loading...</div>}
              offset={-100}
            >
              <Suspense fallback={<LoadingAnimation />}>
                <MostPlayerOfTheMatches
                  data={props.data.mostPlayerOfTheMatch.group}
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
          <Grid align="center" item sm={12} lg={12}>
            Win by Maximum Runs
            <LazyLoad
              once={true}
              placeholder={<div>Loading...</div>}
              preventLoading={true}
              offset={-100}
            >
              <Suspense fallback={<LoadingAnimation />}>
                <WinByMaxRuns
                  run={props.data.highestWinByRun.nodes[0].win_by_runs}
                  winner={props.data.highestWinByRun.nodes[0].winner}
                  season={props.data.highestWinByRun.nodes[0].season}
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
          <Grid item sm={12} lg={12}>
            Matches Per Venue
            <LazyLoad once={true} placeholder={<div>Loading...</div>}>
              <Suspense fallback={<LoadingAnimation />}>
                <MatchesPerVenue data={props.data.matchesPerVenue.group} />
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
          <Grid item sm={12}>
            Matches Won Per Team
            <LazyLoad once={true} placeholder={<div>Loading...</div>}>
              <Suspense fallback={<LoadingAnimation />}>
                <MatchesWonPerTeam data={props.data.matchesWonPerTeam.group} />
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
