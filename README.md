# IPL-STATS

Just a fandom website to display IPL Trivia!

  -  Dashboard (General)
  -  Team Wise
  - Season Wise (***in progress***)

Note : 
- The `Season` section is under construction. Hence `/season/{year}` won't display much, but you are welcome to visit!. 
- Also you might find some *lorem-ipsum*. That's just to sort out UI and demonstrate different functionalities.
### Tech

ipl-stats uses a number of open source projects to work properly:

* [Gatsby] - Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps!
* [Material UI] - React UI Library
* [react-chartjs-2] - React wrapper for Chart.js (https://www.chartjs.org/)
* [react-virtualized] - React components for efficiently rendering large lists and tabular data. 

> Why Gatsby?
- I was very intrigued by all the points you mentioned in the Bonus Section. And i just recently heard from a friend how easy & sexy Gatsby is! Also Gatsby is pretty good at handling most of the things by itself. So I started learning and implementing it...!

> Why Material UI ?
- I have been using Material UI a lot for almost all the projects that we do. I love Material UI, especially because i know how it works ;). But yeah, it had a lot to offer, (Responsive Grid, Skeleton, Navbars. Icons, Themes, Typography, Palletes) and much more!

> Why chart.js?
- To be very honest, I have some experience using it for my B.Tech Project.Also D3.js seems pretty configurable and harsh! I wanted something that gives me everything packed inside a box!

> Why react-virtualized?
- It provides a cool way to handle large data. Helps improve performance. The basic idea here is just render the rows that are currently visible to users. eg. If there are 200 rows user will just see [1-10] rows as per dimensions hence all others are not rendered. on scoll [10-20] are rendered and so on back & forth!!
### Bonus Points
- [x] Offline Support
- [x] PWA
- [x] Mobile Responsive
- [x] Loading Time Optimization (how?)
- [ ] Create using Vue.js    

> Offline Support, How?
- gatsby provides a plugin     [gatsby-plugin-offline](https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/#gatsby-plugin-offline) which handles the service-worker internally. Pretty Neat!
- The below code just mentions  the pages that needs to be cached in `gatsby-config.js` 
```
 `gatsby-transformer-csv`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/team/*`, '/season/*'],
      },
    },
```
> Progressive Web App, Really?
- Yes.The app passed all the lighthouse tests which checks it it's PWA.
    - The app is responsive, mobile-friendly.
    - Loads super fast.
    - Includes a Web App Manifest.
    - Implements a service worker. (under the hood!)
- This is the code from `gatsby-config.js` which allows you to pass all the parameters for your manifest. 
```
 {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ipl-stats`,
        short_name: `ipl-stats`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        },
      },
```
> Mobile Responsive, How?
- I have used Material UI Grid for the Project Layout. There is this cool thing with Material UI that it provides breakpoints. See [Grid with Breakpoints](https://material-ui.com/components/grid/#grid-with-breakpoints)

> Optimization and drawbacks of Gatsby!
- It's all true that Gatsby is superfast. The biggest catch is for *static-pages*. 
- What's the ideal path?
    - SSR instead of CSR.
    - Use anything but Gatsby, 'sorry' :)

> But you have choosen the weapon of Gatsby, what now?
- The major performance improvments are devoted to two concepts or libararies.
    - [react-lazyload](https://www.npmjs.com/package/react-lazyload) Load the complements when they are in `view-port`
    - [Code Splitting](https://reactjs.org/docs/code-splitting.html) `React.lazy()` and `Suspense`. Put code into different Bundles and call them when needed.
- The above mentioned libraries are H E R O 💪.
- Using *Code Splitting*, I was able to call the chart Components dynamically. Those components are called only when they are visible in viewport because we wrapped lazy loading into the `react-lazyload`.
```
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
```
- As seen above, the `Suspense` is wrapped up with `LazyLoad` compoenent. Hence when the compoenent is visible in `view-port` the request to `bundle.js` is made!
- Also with suspense i was able to add some cool modern Facebook [Skeleton Animation](https://material-ui.com/components/skeleton/#wave-example) 🤘

> So you are a performance Hero?
- I hate to break it to you, the answer is N O.😓.. For that you have to understand how Gatsby works and how i have managed to get the data.

> Teach me Master!
- Gatsby interally uses `graphql` queries to fetch almost every data. 
- I used [gatsby-transformer-csv](https://www.gatsbyjs.com/plugins/gatsby-transformer-csv/) to read the CSV file.
- To query from CSV you have to write queries. Something like this,
```
  query($team: String!) {
    matchesWonPerYear: allMatchesCsv(filter: { winner: { eq: $team } }) {
      group(field: season) {
        fieldValue
        totalCount
      }
    }
}
```
- This queries are written in `pages` and not in `components` hence you can have multiple queries in a single page. You can't have multiple queries in components and hence the problem. Also you can't have variables `$team` in our case. You can't have that in components. **so you have to fetch all the data all at once when the page loads** ## ***THIS IS A MAJOR DRAWBACK***😨 
[[Issue]](https://github.com/gatsbyjs/gatsby/issues/10482)
- the variable comes from creating routes dynamically and that is only available in `pages` query.
```
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
```
- Here you pass the data and the template it's associated with. Also the parameter. In our case `season`.
- If you have read all of these, you are an amazing human being. Thank you.🙌
### Plugins

ipl-stats is currently extended with the following Gatsby plugins.
| Plugin | Usage |
| ------ | ------ |
| gatsby-plugin-manifest | Adding Manifest for PWA |
| gatsby-plugin-material-ui | Support for Material UI Library |
| gatsby-plugin-offline | Offline Support |
| gatsby-plugin-react-helmet | Adding MetaData to website (SEO) |
| gatsby-source-filesystem | Reading files and data |
| gatsby-transformer-csv | Reading the CSV |
- Every Plugin makes sense!

### Images
![image-1](https://ibb.co/wCPxcBJ)
![image-2](https://ibb.co/ry47XR7)
![image3](https://ibb.co/WWgfV4W)
![image4](https://ibb.co/PMFXc6s)

### Run Locally
Start the project:
```sh
$ gatsby develop
```

Build Project:
```sh
$ gatsby build
```

Start (Prod) Project:
```sh
$ gatsby serve
```

License
----



MIT




   [Gatsby]: <https://www.gatsbyjs.com/>
   [Material UI]: <https://material-ui.com/>
   [react-chartjs-2]: <https://github.com/jerairrest/react-chartjs-2>
   [react-virtualized]: <https://github.com/bvaughn/react-virtualized>
   

   