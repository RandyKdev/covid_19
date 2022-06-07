import React from 'react';
import './drawer.css';
import Country from '../components/country/country.js';


function Drawer({setSelected, countries}){

    return (
      <div className="drawer">
       <h1 className="drawer-title">Covid 19</h1>
       <div className="drawer-comps">
        <h2 className="drawer-countries">Countries</h2>
        {
          countries.map((country) =>{
            return (
              <Country key={countries.indexOf(country)} src={country.flag} name={country.name} number={country.cases} setSelect={setSelected} />
            )
          })
        }
       </div>
      </div>
    );
  }


export default Drawer;
