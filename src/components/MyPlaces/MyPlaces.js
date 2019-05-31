import React from 'react';

import Button from "@material-ui/core/Button";

import PlaceTile from './PlaceTile'

import { connect } from "react-redux";

import { getPlaces } from '../../actions/Places'

import { searchPlaces } from "../../actions/Search";

import { Link } from "react-router-dom";

import '../../styles/css/Courses.css'

class MyPlaces extends React.Component {


    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.getPlaces();
    }

    render() {
        if (this.props.places.length === 0 || this.props.places === "success"){
            return null;
        }

        return (
            <div className='courses-page'>
                {this.props.places.map((place, i) => {
                    if (place.ownerId === localStorage.getItem('userId')) {
                        return <PlaceTile key={i} place={place} />
                    }
                })}
                <Link to={{
                    pathname: `/my-places/create/form`,
                    state: this.props.place
                }}>
                    <Button
                        className="place_add"
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ marginTop: "30px", backgroundColor: '#0075ff' }}> +
                </Button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    places: state.places.places
});

export default connect(mapStateToProps, { getPlaces })(MyPlaces);
