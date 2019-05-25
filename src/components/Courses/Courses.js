import React      from 'react';

import PlaceTile from './CourseTile'

import { connect } from "react-redux";

import { getPlaces } from '../../actions/Places'

import '../../styles/css/Courses.css'

class Places extends React.Component {
  componentWillMount() {
    // This method runs when the component is first added to the page
    this.props.getPlaces();
  }

  render() {
      console.log(this.props.places)
    if (!this.props.places) {
      return null;
    }

      return (
        <div className='courses-page'>
          {this.props.places.map((place, i) => <PlaceTile key={i} place={place} />)}
        </div>
      )
  }
}

const mapStateToProps = state => ({
  places: state.places.places
});

export default connect(mapStateToProps, { getPlaces })(Places);
