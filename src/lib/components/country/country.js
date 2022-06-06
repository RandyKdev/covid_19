import React, { Component } from 'react';
import './country.css';

class Country extends Component {
  render() {
    return (
        <div className="drawer-country" onClick={()=>this.props.setSelect({name: this.props.name, flag: this.props.src, number: this.props.number})}>
            <img src={this.props.src}  alt="icon" className="drawer-country-img"/>
        <p className="drawer-country-name">{this.props.name}</p>
        <p className="drawer-country-case">{this.props.number}</p>
    </div>
    );
  }
}

export default Country;
