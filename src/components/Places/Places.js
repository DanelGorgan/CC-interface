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
        this.props.searchPlaces(document.getElementById('select').value, document.getElementById('location').value);
    }

    render() {
        if (!this.props.places) {
            return null;
        }

        return (
            <div className='courses-page'>
                <div className='search'>
                    <select id='select' class="browser-default custom-select">
                        <option value="restaurant">restaurant</option>
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
