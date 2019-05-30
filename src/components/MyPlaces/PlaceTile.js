import React from 'react';

import { Link } from 'react-router-dom'

import '../../styles/css/CourseTile.css'

class PlaceTile extends React.Component {
  render() {
    return (
      <Link className='course-tile ems-panel panel panel-sm' to={{
        pathname: `/places/${this.props.place.id}`,
        state: this.props.place
      }}>
        <div className="course-tile__title">{this.props.place.name}</div>

        <div className="course-tile__meta">
          <div className="course-tile__meta--type">Type {this.props.place.type}</div>
          <div className="course-tile__meta--address">Adresa {this.props.place.address}</div>
        </div>
      </Link>
    )
  }
}

export default PlaceTile;
