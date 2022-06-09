import React from 'react';
import CountryInformation from '../components/countryInformation/countryInformation';
import Green from '../../images/green-arrow.svg'
import Red from '../../images/red-arrow.svg'
import './index.css';
import numeral from "numeral";
import Map from '../components/map/Map';

function Main({selected, countries, stats}){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
     
 <main>

    <header>
        <div className="top-nav">
       
              {selected.flag == null? <div className='country'></div> :  
                <div className='country'>
                <img className="country-img" src={selected.flag} alt="" />
                <p className="header-country-name thick-blue-text">{selected.name}</p>
                </div>
                 }
        
           {/* <div className="btns">
               <a href="" className="btn btn-1">Sign in</a>
                <a href="" className="btn btn-2">Sign up</a>
            </div> */}
            
        </div>
    </header>

    <div className="middle-section">
        <div className="large-col col">
            <p className="large-col-title thick-blue-text">Covid-19 Vaccination</p>
            <div className="large-col-stats">
                <div className="large-col-stat left">
                    <p className="value">{numeral(stats['population']).format("0,0")}</p>
                    <p className="stat-name thick-blue-text">Total Pollution</p>
                </div>
                <div className="large-col-stat right">
                    <p className="value">{numeral(stats['critical']).format("0,0")}</p>
                    <p className="stat-name thick-blue-text">Critical Cases</p>
                </div>
            </div>
        </div>
        <div className="large-col col">
            <p className="large-col-title thick-blue-text">SARS-CoV-2(COVID-19) On {date}</p>
            <div className="large-col-stats">
                <div className="large-col-stat left">
                    <p className="value">{numeral(stats['tests']).format("0,0")}</p>
                    <p className="stat-name thick-blue-text">Total Samples Tested</p>
                </div>
                <div className="large-col-stat right">
                    <p className="value">{numeral(stats['affectedCountries']).format("0,0")}</p>
                    <p className="stat-name thick-blue-text">Affected Countries</p>
                </div>
            </div>
        </div>
        <div className="small-col col">
            <div className="s-col-top">
                <p className="s-col-top-val-red">{numeral(stats['todayCases']).format("0,0")}</p>
                <img className="s-col-img" src={Red} alt="" />
            </div>
            <p className="value">{numeral(stats['cases']).format("0,0")}</p>
            <p className="stat-name thick-blue-text">Total Cases</p>
        </div>
        <div className="small-col col">
            <div className="s-col-top">
                <p className="s-col-top-val-green">{numeral(stats['todayRecovered']).format("0,0")}</p>
                <img className="s-col-img" src={Green} alt="" />
            </div>
            <p className="value">{numeral(stats['recovered']).format("0,0")}</p>
            <p className="stat-name thick-blue-text">Discharged(61.77%)</p>
        </div>
        <div className="small-col col">
            <div className="s-col-top">
                <p className="s-col-top-val-red">{numeral(stats['todayDeaths']).format("0,0")}</p>
                <img className="s-col-img" src={Red} alt="" />
            </div>
            <p className="value">{numeral(stats['deaths']).format("0,0")}</p>
            <p className="stat-name thick-blue-text">Deaths(1.10%)</p>
        </div>
    </div>
    
    {selected.flag == null ? <div className="map-section">
        <Map countries={countries} />
    </div> : <div className="map-section"><CountryInformation selected={selected} /></div>}
    

</main>
    );

}

export default Main;