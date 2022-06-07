import React from 'react';
import './drawer.css';
import Country from '../components/country/country.js';


function Drawer({setSelected, countries}){


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
        deaths: Country.deaths,
        todayCases: Country.todayCases,
        recovered:Country.recovered,
        todayRecovered:Country.todayRecovered,
        active:Country.active,
        critical:Country.critical
      }
    )
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
              <Country key={countries.indexOf(country)} src={country.flag} 
              name={country.name}
               number={country.cases} 
               setSelect={setSelected}  
               todayCase={country.todayCases}
              recovered ={country.recovered}
              todayRecovered={country.todayRecovered}
              active={country.active}
              critical={country.critical}
              cases={country.cases}
              deaths={country.deaths}
              />
            )
          })
        }
       </div>
      </div>
    );
  }


export default Drawer;
