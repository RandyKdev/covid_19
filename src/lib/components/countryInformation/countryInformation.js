import React from "react";
import './countryInformation.css'

function CountryInformation({country}){
    return(
            <div className='container'>
               {country.cases}
            </div>
    );
}
export default CountryInformation;