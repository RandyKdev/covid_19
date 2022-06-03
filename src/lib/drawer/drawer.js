import React, { Component } from 'react';
import './drawer.css';
import Country from '../components/country/country.js';

class Drawer extends Component {
  render() {
    return (
      <div className="drawer">
       <h1 className="drawer-title">Covid 19</h1>
       <div className="drawer-comps">
        <h2 className="drawer-countries">Countries</h2>
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
        <Country name={'Cameroon'} number='234532' />
       </div>
      </div>
    );
  }
}

export default Drawer;
