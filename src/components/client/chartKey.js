import React from 'react';

const ChartKey = (props) => {

  const renderContent = () => {
    if (props.location === "client") {
      return <p>Show Game Analysis</p>
    } else {
      return <p>Back to Game Stats</p>
    }
  }

  return(
    <div className="page-key" onClick={props.showCharts}>
      {renderContent()}
    </div>
  )
}
export default ChartKey;
