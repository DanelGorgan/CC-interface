import React from 'react';
import _ from 'lodash';

import { connect } from "react-redux";
import { getTopLocations } from '../../actions/Statistics'
import Paper            from "../core/Paper";
import InputDropdown from '../core/InputDropdown'
//import Chart from '../Chart'

import '../../styles/css/Statistics.css'
import CanvasJSReact from '../../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
let dataPoints = []

class Statistics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: 'real',
      exam: Exams[0]
    };

  }

  componentWillMount() {
    // This method runs when the component is first added to the page
    this.props.getTopLocations();
  }

  onTabClick = (chart) => {
    this.setState({
      chart
    })
  }

  onChange = (value, field) => {
    this.state[field] = value

    this.setState(this.state)
  }

  render() {
    console.log(this.props.topLocations)
    if( this.props.topLocations && this.props.topLocations.length === 0)
      return null
    
      return (
        <Paper className='statistics'>
          <div className='statistics__header-wrapper'>
            <div className='ems__header statistics__header'>

            </div>
          </div>

          {(() => {
            switch(this.state.chart) {
              case 'real':
                /*return <Chart gradesNo={gradesNo} currentStudent={this.props.students[15]} data={this.props.students}/>;*/
              case 'gauss':
                /*return <Chart gaussGradesNo={gaussGradesNo} currentStudent={this.props.students[15]} data={gaussGrades}/>;*/
              default:
                return null;
            }
          })()}
          <RangeBarChart locations={this.props.topLocations}></RangeBarChart>
        </Paper>
      )
  }
}

const gaussCurve = {
  A: 0.10,
  B: 0.17,
  C: 0.28,
  D: 0.25,
  E: 0.18,
}

const Exams = ['.Net', 'Introducere in Programare', 'Ingineria Programarii']
const mapStateToProps = state => ({
  topLocations: state.topLocations.topLocations
});

class RangeBarChart extends React.Component {
  render() {
  dataPoints = []
  this.props.locations.map(function(item, index) {
    let elemDict = {}
    elemDict["y"] = item[1]
    elemDict["label"] = item[0]
    dataPoints.push(elemDict)

  });

  const options = {
      animationEnabled: true,
      title:{
          text: "Statistics",
          fontFamily: "helvetica"
      },

      axisX: {
          title: "Local",
          titleFontSize: 20
      },

      axisY: {
          title: "Searches",
          titleFontSize: 20
      },
      data: [{
          type: "bar",
          yValueFormatString: "#,### Reservations",   
          dataPoints: dataPoints
      }]
  }
  return (
  <div>
      <CanvasJSChart options = {options} 
          /*onRef = {ref => this.chart = ref}*/
      />
      { /*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
  </div>
  );
}
}

export default connect(mapStateToProps, { getTopLocations })(Statistics);
