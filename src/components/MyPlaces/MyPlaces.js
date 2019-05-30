import React from 'react';

import PlaceTile from './PlaceTile'

import {connect} from "react-redux";

import {getPlaces} from '../../actions/Places'

import {searchPlaces} from "../../actions/Search";

import '../../styles/css/Courses.css'

class MyPlaces extends React.Component {
    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.getPlaces();
    }

    render() {
        return (
            <div className='courses-page'>
                {this.props.places.map((place, i) => {
                    if (place.ownerId === localStorage.getItem('userId')) {
                       return <PlaceTile key={i} place={place}/>
                    }
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    places: state.places.places
});

export default connect(mapStateToProps, {getPlaces, searchPlaces})(MyPlaces);
