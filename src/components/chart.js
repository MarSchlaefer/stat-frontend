import React from 'react';
import {Bar} from 'react-chartjs-2';
import ChartKey from './client/chartKey'

const Chart = (props) => {

  const team1 = props.gameDetails[0].teams.find(team => team.id === 1)
  const team2 = props.gameDetails[0].teams.find(team => team.id === 2)
  const team1Players = team1.players.sort((a, b) => a.id - b.id).map(player => player.name)
  const team1TP = team1.players.map(player => player.tp)
  const team1FG = team1.players.map(player => player.fgm)
  const team1YG = team1.players.map(player => player.ygm)
  const team2Players = team2.players.sort((a, b) => a.id - b.id).map(player => player.name)
  const team2TP = team2.players.map(player => player.tp)
  const team2FG = team2.players.map(player => player.fgm)
  const team2YG = team2.players.map(player => player.ygm)

  const possiblePlays = ["3p", "2p", "RB", "TO", "STL"]
  const team1TotalYG = team1.ygm
  const team1TotalFG = team1.fgm
  const team1TotalRB = team1.reb
  const team1TotalTO = team1.to
  const team1TotalSTL = team1.stl
  const team2TotalYG = team2.ygm
  const team2TotalFG = team2.fgm
  const team2TotalRB = team2.reb
  const team2TotalTO = team2.to
  const team2TotalSTL = team2.stl

  // const findTotals = () => {
  //   return possiblePlays.map(play => {
  //     if (play === "3p") {
  //       return [team1.ygm, team2.ygm]
  //     } else if (play === "2p") {
  //       return [team1.fgm, team2.fgm]
  //     } else if (play === "RB") {
  //       return [team1.reb, team2.reb]
  //     } else if (play === "TO") {
  //       return [team1.to, team2.to]
  //     } else if (play === "STL") {
  //       return [team1.stl, team2.stl]
  //     }
  //   })
  // }

  const dataTeam1 = {
    labels: team1Players,
    datasets: [
      {
        label: 'Total Points',
        fill: false,
        lineTension: 0.1,
        backgroundColor: `#0262B2`,
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: team1TP
      },
      {
        label: 'Total Field Goals',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#2490EB',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: team1FG
      },
      {
        label: 'Total 3-Pointers',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: team1YG
      }
    ]
  };

  const dataTeam2 = {
    labels: team2Players,
    datasets: [
      {
        label: 'Total Points',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#0262B2',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: team2TP
      },
      {
        label: 'Total Field Goals',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#2490EB',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: team2FG
      },
      {
        label: 'Total 3-Pointers',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: team2YG
      }
    ]
  };

  const teamData = {
    labels: possiblePlays,
    datasets: [
      {
        label: team1.name,
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#0262B2',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [team1TotalYG, team1TotalFG, team1TotalRB, team1TotalTO, team1TotalSTL]
      },
      {
        label: team2.name,
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#2490EB',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [team2TotalYG, team2TotalFG, team2TotalRB, team2TotalTO, team2TotalSTL]
      }
    ]
  };

  return(
    <div className="charts-container">
      <ChartKey
        showCharts={props.showCharts}
        location = "chart"
        />
      <div className="charts">
        <Bar
          data={ teamData }
          options={{
            responsive: true,
            title:{
              display: true,
              text: `Play Breakdown by Team`,
              fontSize: 25
            },
            legend:{
              display: true,
              position: 'right'
            }
          }}
          />
        <br/>
        <br/>
        <br/>
        <Bar
          data={ dataTeam1 }
          options={{
            responsive: true,
            title:{
              display: true,
              text: `${team1.name}'s Top Performers`,
              fontSize: 25
            },
            legend:{
              display: true,
              position: 'right'
            }
          }}
          />
        <br/>
        <br/>
        <br/>
        <Bar
          data={ dataTeam2 }
          options={{
            title:{
              display: true,
              text: `${team2.name}'s Top Performers`,
              fontSize: 25
            },
            legend:{
              display: true,
              position: 'right'
            }
          }}
          />
      </div>
    </div>
  )
} //end of chaft

export default Chart;
