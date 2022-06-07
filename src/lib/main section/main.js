import React from 'react';
import CountryInformation from '../components/countryInformation/countryInformation';
import './index.css';
import Map from '../components/map/Map';

function Main({selected, countries, stats}){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
     
 <main>

    <header>
        <div className="top-nav">
            <div className="country">
                <img className="country-img" src={selected.flag} alt="" />
                <p className="header-country-name thick-blue-text">{selected.name}</p>
            </div>
            <div className="btns">
               <a href="" className="btn btn-1">Sign in</a>
                <a href="" className="btn btn-2">Sign up</a>
            </div>
        </div>
    </header>

    <div className="middle-section">
        <div className="large-col col">
            <p className="large-col-title thick-blue-text">Covid-19 Vaccination</p>
            <div className="large-col-stats">
                <div className="large-col-stat left">
                    <p className="value">{stats['population']}</p>
                    <p className="stat-name thick-blue-text">Total Pollution</p>
                </div>
                <div className="large-col-stat right">
                    <p className="value">{stats['critical']}</p>
                    <p className="stat-name thick-blue-text">Critical Cases</p>
                </div>
            </div>
        </div>
        <div className="large-col col">
            <p className="large-col-title thick-blue-text">SARS-CoV-2(COVID-19) On {date}</p>
            <div className="large-col-stats">
                <div className="large-col-stat left">
                    <p className="value">{stats['tests']}</p>
                    <p className="stat-name thick-blue-text">Total Samples Tested</p>
                </div>
                <div className="large-col-stat right">
                    <p className="value">{stats['affectedCountries']}</p>
                    <p className="stat-name thick-blue-text">Affected Countries</p>
                </div>
            </div>
        </div>
        <div className="small-col col">
            <div className="s-col-top">
                <p className="s-col-top-val-red">{stats['todayCases']}</p>
                <img className="s-col-img" src="./images/red-arrow.svg" alt="" />
            </div>
            <p className="value">{stats['cases']}</p>
            <p className="stat-name thick-blue-text">Total Cases</p>
        </div>
        <div className="small-col col">
            <div className="s-col-top">
                <p className="s-col-top-val-green">{stats['todayRecovered']}</p>
                <img className="s-col-img" src="./images/green-arrow.svg" alt="" />
            </div>
            <p className="value">{stats['recovered']}</p>
            <p className="stat-name thick-blue-text">Discharged(61.77%)</p>
        </div>
        <div className="small-col col">
            <div className="s-col-top">
                <p className="s-col-top-val-red">{stats['todayDeaths']}</p>
                <img className="s-col-img" src="./images/red-arrow.svg" alt="" />
            </div>
            <p className="value">{stats['deaths']}</p>
            <p className="stat-name thick-blue-text">Deaths(1.10%)</p>
        </div>
    </div>
    
    {selected.flag == null ? <div className="map-section">
        <Map countries={countries} />
    </div> : <CountryInformation country={selected} />}
    
</main>
    );

}

export default Main;