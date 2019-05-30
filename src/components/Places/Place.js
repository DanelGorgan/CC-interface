import React from 'react';

import Button from "@material-ui/core/Button";

import '../../styles/css/Course.css'
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {getLink} from "../../actions/Map";

class Place extends React.Component {

    componentWillMount() {
        this.props.getLink()
    }

    render() {
        // const placesId = this.props.match.params.placesId;
        const place = this.props.location.state;
        let link = `https://www.google.com/maps/embed/v1/place?q=${place.name}&key=AIzaSyAbBGJtRp255cAdDqpCMd0JBAJbINn0kRs`;
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
                                style={{border: "0"}}
                                src={link}
                                allowFullScreen>a</iframe>
                    </div>

                </div>
                <Link to={{
                    pathname: `/places/${place.id}/form`,
                    state: this.props.place
                }}>
                    <Button
                        className="course__submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{marginTop: "30px", backgroundColor: '#0075ff'}}> Rezerva
                    </Button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    link: state.link.link
});

export default connect(mapStateToProps, {getLink})(Place);
