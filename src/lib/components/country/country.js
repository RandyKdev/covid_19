import React, { Component } from 'react';
import './country.css';
import numeral from "numeral";

class Country extends Component {
  render() {
    return (
        <div className="drawer-country" onClick={()=>
          this.props.setSelect({
          name: this.props.name,
           flag: this.props.src, 
           cases: this.props.cases,
          deaths: this.props.deaths,
          todayCases: this.props.todayCases,
          recovered:this.props.recovered,
          todayRecovered:this.props.todayRecovered,
          active:this.props.active,
          critical:this.props.critical})}>
            <img src={this.props.src}  alt="icon" className="drawer-country-img"/>
        <p className="drawer-country-name">{this.props.name}</p>
        <p className="drawer-country-case">{numeral(this.props.cases).format("0,0")}</p>
    </div>
    );
  }
}

export default Country;
