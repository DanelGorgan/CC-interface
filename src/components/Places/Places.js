import React from 'react';

import PlaceTile from './PlaceTile'

import { connect } from "react-redux";

import { getPlaces } from '../../actions/Places'

import { searchPlaces } from "../../actions/Search";

import '../../styles/css/Courses.css'

class Places extends React.Component {
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
                        <input type="text" name="name" id="location" />
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
                    <input type="text" name="name" id="location" />
                    <button className="btn btn-primary btn-sm" onClick={this.search}>Cauta</button>
                </div>
                {this.props.places.map((place, i) => <PlaceTile key={i} place={place} />)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    places: state.places.places
});

export default connect(mapStateToProps, { getPlaces, searchPlaces })(Places);
