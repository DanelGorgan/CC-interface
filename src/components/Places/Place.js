import React from 'react';

import Button from "@material-ui/core/Button";

import '../../styles/css/Course.css'
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { getStats } from "../../actions/Map";
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let dataPoints = []

class Place extends React.Component {

    componentWillMount() {
        this.props.getStats(this.props.location.state.id)
    }

    render() {
        // const placesId = this.props.match.params.placesId;
        const place = this.props.location.state;
        let link = `https://www.google.com/maps/embed/v1/place?q=${place.name}&key=AIzaSyAbBGJtRp255cAdDqpCMd0JBAJbINn0kRs`;
        console.log(this.props.link)
        if(this.props.link === null)
            return null;

        // console.log(this.props.link.rez)

        dataPoints = []
        this.props.link.rez.map(function (item, index) {
            let elemDict = {}
            elemDict["label"] = item[0]
            elemDict["y"] = item[1]
            dataPoints.push(elemDict)
        });

        return (
            <div className='course panel'>
                <div className="course__title">{place.name}</div>

                <div className="course__meta">
                    <div className="course__meta--universityYear">
                        <span
                            className="course__meta--bold">Adress</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {place.address}
                    </div>
                    <div className="course__meta--studentYear">
                        <span
                            className="course__meta--bold">Descriere</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {place.description}
                    </div>
                    <div className="course__meta--semester">
                        <span className="course__meta--bold">Contact</span>&nbsp;&nbsp;&nbsp;
                    <ul>
                            <li className="list__contact"><span
                                className="place__li--bold">Telefon:</span> {place.contact.phone.toString()}</li>
                            <li className="list__contact"><span
                                className="place__li--bold">Email:</span> {place.contact.email.toString()}</li>
                        </ul>
                    </div>
                    <div className="course__meta--semester">
                        <span className="course__meta--bold">Location:</span>&nbsp;&nbsp;&nbsp;
                        <iframe width="600"
                            height="450"
                            style={{ border: "0" }}
                            src={link}
                            allowFullScreen>a</iframe>
                    </div>

                    <RangeBarChart></RangeBarChart>

                </div>

                {
                    place.ownerId === localStorage.getItem('userId') ?
                    <Link to={{
                        pathname: `/places/${place.id}/update`,
                        state: this.props.location.state
                    }}>
                        <Button
                            className="course__submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{ marginTop: "30px", backgroundColor: '#0075ff' }}> Editeaza
                            </Button>
                            </Link>
                        :
                        <Link to={{
                            pathname: `/places/${place.id}/form`,
                            state: this.props.location.state
                        }}>
                            <Button
                                className="course__submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                style={{ marginTop: "30px", backgroundColor: '#0075ff' }}> Rezerva
                            </Button>
                        </Link>
                }
            </div>
        )
    }
}

class RangeBarChart extends React.Component {
    render() {
    const options = {
        animationEnabled: true,
        title:{
            text: "Rezervari",
            fontFamily: "helvetica"
        },

        axisX: {
            title: "Ora",
            titleFontSize: 20
        },

        axisY: {
            title: "Procent ocupare %",
            titleFontSize: 20
        },
        data: [{
            type: "column",
            yValueFormatString: "#,### Reservations",
            dataPoints: dataPoints
        }]
    }
    return (
    <div>
        <h1>React Range Bar Chart</h1>
        <CanvasJSChart options = {options}
            /*onRef = {ref => this.chart = ref}*/
        />
        { /*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
}
}

const mapStateToProps = state => ({
    link: state.link.link
});

export default connect(mapStateToProps, { getStats })(Place);
