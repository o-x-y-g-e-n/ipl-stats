import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
const TeamsList = (props) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query MyQuery2 {
      allMatchesCsv {
        distinct(field: team1)
      }
    }
  `)
  return (
    <div>
      <div className={`${classes.toolbar} ${classes.title}`}>
        <Typography variant="h6">{props.title}</Typography>
      </div>
      <List>
        {data.allMatchesCsv.distinct.map((text, index) => (
          <Link to={`/team/${text}`}>
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )
}

export default TeamsList
