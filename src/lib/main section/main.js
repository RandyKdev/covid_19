import React, { Component } from 'react';

import './index.css';

function Main({selected}){
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
                    <p className="value">15,71,98,207</p>
                    <p className="stat-name thick-blue-text">Total Vaccinated</p>
                </div>
                <div className="large-col-stat right">
                    <p className="value">12,10,347</p>
                    <p className="stat-name thick-blue-text">Vaccinated Day Before</p>
                </div>
            </div>
        </div>
        <div className="large-col col">
            <p className="large-col-title thick-blue-text">SARS-CoV-2(COVID-19) On MAY 02,2021</p>
            <div className="large-col-stats">
                <div className="large-col-stat left">
                    <p className="value">29,16,47,037</p>
                    <p className="stat-name thick-blue-text">Total Samples Tested</p>
                </div>
                <div className="large-col-stat right">
                    <p className="value">15,04,698</p>
                    <p className="stat-name thick-blue-text">Samples Tested</p>
                </div>
            </div>
        </div>
        <div className="small-col col">
            <div className="s-col-top">
                <p className="s-col-top-val-red">3,68,147</p>
                <img className="s-col-img" src="./images/red-arrow.svg" alt="" />
            </div>
            <p className="value">1,99,25,604</p>
            <p className="stat-name thick-blue-text">Total Cases</p>
        </div>
        <div className="small-col col">
            <div className="s-col-top">
                <p className="s-col-top-val-green">300,732</p>
                <img className="s-col-img" src="./images/green-arrow.svg" alt="" />
            </div>
            <p className="value">1,62,93,003</p>
            <p className="stat-name thick-blue-text">Discharged(61.77%)</p>
        </div>
        <div className="small-col col">
            <div className="s-col-top">
                <p className="s-col-top-val-red">3,417</p>
                <img className="s-col-img" src="./images/red-arrow.svg" alt="" />
            </div>
            <p className="value">2,18,959</p>
            <p className="stat-name thick-blue-text">Deaths(1.10%)</p>
        </div>
    </div>

    <div className="map-section">
   
    </div>
</main>
    );

}

export default Main;