import React from 'react'
import SalesItem from './SalesItem'
import WebAnalyticsComponent from "./WebAnalyticsComponent"
import ScoreListComponent from "./ScoreListComponent"

const RightColumn = () => {
  return (
    <div>
      <SalesItem/>
      <WebAnalyticsComponent/>
      <ScoreListComponent/>

    </div>
  )
}

export default RightColumn