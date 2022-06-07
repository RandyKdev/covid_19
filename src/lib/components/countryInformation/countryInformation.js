import React from "react";
import './countryInformation.css'
import numeral from "numeral";

function CountryInformation({selected}){
    return(
            <div className='center-container'>
                <div className="container">
               <div className="top-row">
                   <div className="card">
                       <h3>Cases</h3>
                       <h4>{numeral(selected.cases).format("0,0")}</h4>
                   </div>
                   <div className="card">
                   <h3>Deaths</h3>
                   <h4>{numeral(selected.deaths).format("0,0")}</h4>
                   </div>
                   <div className="card">
                   <h3 className="recovery">Recovered</h3>
                   <h4 className="recovery">{numeral(selected.recovered).format("0,0")}</h4>
                   </div>
               </div>
               <div className="bottom-row">
                   <div className="card">
                   <h3  className="recovery" >Today Recovered</h3>
                   <h4 className="recovery">+{numeral(selected.todayRecovered).format("0,0")}</h4>
                   </div>
                   <div className="card">
                   <h3>Active</h3>
                   <h4>{numeral(selected.active).format("0,0")}</h4>
                   </div>
                   <div className="card">
                   <h3>Critical</h3>
                   <h4>{numeral(selected.critical).format("0,0")}</h4>
                   </div>
               </div>
               </div>
            </div>
    );
}
export default CountryInformation;