import React from 'react'

const SeasonDetail = ({pageContext}) => {
  const {season} = pageContext;
  console.log(pageContext)
  return <h1>{"You rock"}</h1>
}

export default SeasonDetail
