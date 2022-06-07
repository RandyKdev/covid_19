import React, { useState, useEffect } from 'react';
import Drawer from '../drawer/drawer';
import Main  from '../main section/main';
import './home.css';

function Home(){
  const [selected, setSelected] = useState({});
  const [countries, setCountries] = useState([]);
  const [stats, setStats] = useState({});

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

const getStats = async () => {
  await fetch('https://disease.sh/v3/covid-19/all')
  .then((results) => results.json())
  .then((data)=>{
    setStats(data);
    console.log(data);
  });
}

useEffect(() =>{
  getCountries();
  getStats();
}, [])
 
 
    return (
      <div className="home">
          <Drawer countries={countries} setSelected={setSelected}/>
          <Main stats={stats} countries={countries} selected={selected}/>
      </div>
    );
 
}

export default Home;
