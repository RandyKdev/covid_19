import React, { Component } from 'react';
import './country.css';
import cmr from '../../../images/cmr.png';

class Country extends Component {
  render() {
    return (
        <div className="drawer-country">
            <img src={cmr} className="drawer-country-img"/>
        <p className="drawer-country-name">{this.props.name}</p>
        <p className="drawer-country-case">{this.props.number}</p>
    </div>
    );
  }
}

export default Country;
