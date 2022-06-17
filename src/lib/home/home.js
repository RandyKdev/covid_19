import React, { useState, useEffect } from 'react';
import Drawer from '../drawer/drawer';
import Login from '../login/login';
import Main  from '../main section/main';
import './home.css';

function Home(){
  const [selected, setSelected] = useState({});
  const [countries, setCountries] = useState([]);
  const [stats, setStats] = useState({});
  const [displayLogin, setDisplayLogin] = useState(false);

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
    ))
    // countries.unshift(  {
    //   name: null,
    //   flag:null,
    //   cases: null,
    //   deaths: null,
    //   todayCases: null,
    //   recovered:null,
    //   todayRecovered:null,
    //   active:null,
    //   critical:null,
    // })
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
 
 if(displayLogin) {
  // return <div>hey</div>
  return (
    <Login route={setDisplayLogin} />
  );
 }
    return (
      <div className="home">
          <Drawer countries={countries} setSelected={setSelected}/>
          <Main stats={stats} route={setDisplayLogin} countries={countries} selected={selected}/>
      </div>
    );
 
}

export default Home;
