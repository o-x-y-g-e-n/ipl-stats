import React from 'react'
import Layout from '../components/layout'
const SeasonDetail = ({ pageContext }) => {
  const { season } = pageContext
  console.log(pageContext)
  return (
    <Layout>
      <h1>{'You rock'}</h1>
    </Layout>
  )
}

export default SeasonDetail
