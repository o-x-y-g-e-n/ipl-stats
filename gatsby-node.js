const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query MyQuery {
      allMatchesCsv {
        distinct(field: season)
      }
    }
  `)
  const seasonTemplate = path.resolve(`src/templates/SeasonDetail.js`)
  queryResults.data.allMatchesCsv.distinct.forEach((node) => {
    createPage({
      path: `/season/${node}`,
      component: seasonTemplate,
      context: {
        // This time the entire product is passed down as context
        season: node,
      },
    })
  })

  const teamQueryResults = await graphql(`
    query MyQuery {
      allMatchesCsv {
        distinct(field: team1)
      }
    }
  `)
  const teamTemplate = path.resolve(`src/templates/TeamDetail.js`)
  teamQueryResults.data.allMatchesCsv.distinct.forEach((node) => {
    createPage({
      path: `/team/${node}`,
      component: teamTemplate,
      context: {
        // This time the entire product is passed down as context
        team: node,
      },
    })
  })
}
