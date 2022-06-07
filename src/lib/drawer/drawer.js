import React, { useState, useEffect } from 'react';
import './drawer.css';
import Country from '../components/country/country.js';


function Drawer({setSelected}){
const [countries, setCountries] = useState([]);

useEffect(() =>{
  getCountries()
}, [])

const getCountries = async () => {
  await fetch('https://disease.sh/v3/covid-19/countries')
  .then((results) => results.json())
  .then((data)=>{
    const countries = data.map((Country) =>(
      {
        name: Country.country,
        flag:Country.countryInfo.flag,
        cases: Country.cases,
      }
    ))
    setCountries(countries);
    console.log(countries);
  })

 
}
 
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
