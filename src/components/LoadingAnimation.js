import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

function LoadingAnimation() {
  return (
    <Skeleton animation="wave" variant="rect" width="100%">
      <div style={{ paddingTop: '57%' }} />
    </Skeleton>
  )
}

export default LoadingAnimation
