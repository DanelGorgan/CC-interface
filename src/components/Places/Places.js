import React from 'react';

import PlaceTile from './PlaceTile'

import Button from "@material-ui/core/Button";

import {connect} from "react-redux";

import {getPlaces} from '../../actions/Places'

import {searchPlaces, recommendPlaces} from "../../actions/Search";

import '../../styles/css/Courses.css'
import {Link} from "react-router-dom";

class Places extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                reservations: this.props.reservations,
                rooms: this.props.rooms
            });

        }
    }

    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.getPlaces();
    }

    search = () => {
        const type = document.getElementById('select').value;
        const name = document.getElementById('location').value
        if (name === '') {
            this.props.getPlaces();
            return;
        }
        this.props.searchPlaces(type, name);
        this.props.recommendPlaces(type, name);
    }

    render() {
        if (this.props.places.length === 0) {
            return (
                <div className='courses-page'>
                    <div className='search'>
                        <select id='select' className="browser-default custom-select">
                            <option value="restaurant">restaurant</option>
                            <option value="club">club</option>
                            <option value="office">office</option>
                        </select>
                        <input type="text" name="name" id="location"/>
                        <button className="btn btn-primary btn-sm" onClick={this.search}>Cauta</button>
                        <p> Nu s-a gasit nimic </p>
                    </div>
                </div>
            )
        }

        return (
            <div className='courses-page'>
                <div className='search'>
                    <select id='select' className="browser-default custom-select">
                        <option value="restaurant">restaurant</option>
                        <option value="club">club</option>
                        <option value="office">office</option>
                    </select>
                    <input type="text" name="name" id="location"/>
                    <button className="btn btn-primary btn-sm" onClick={this.search}>Cauta</button>
                </div>
                {this.props.places.map((place, i) => <PlaceTile key={i} place={place}/>)}
                {this.props.recommend ? <h2>Userii au mai cautat si: </h2> : null}
                {this.props.recommend ? this.props.recommend.rec.map((place) =>
                    <Link to={{
                    pathname: `/places/${place.id}`,
                    state: place
                    }}>{place.name}</Link>) : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    places: state.places.places,
    recommend: state.recommend.recommend
});

export default connect(mapStateToProps, {getPlaces, searchPlaces, recommendPlaces})(Places);
