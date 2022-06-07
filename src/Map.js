import React, {useState} from "react";
import "./App.css";
import { 
        ComposableMap,
        Geographies,
        Geography,
        Marker,
        Annotation,
        ZoomableGroup
 } from "react-simple-maps";
 import ReactTooltip from "react-tooltip";

 const markers= [
   {
     markerOffset: -15,
     name: "Sau Paulo",
     coordinates: [-58.3816, -34.6037],
   },
   {
    markerOffset: -15,
    name: "Melbourne",
    coordinates: [144.963058, -37.813629],
  },
  {
    markerOffset: 25,
    name: "San Francisco",
    coordinates: [-122.419418, 37.774929],
  },
  {
    markerOffset: 25,
    name: "Dhaka",
    coordinates: [90.412521, 23.810331],
  },
 ];

 const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

 function Map(){
   const [content, setcontent] = useState("");

   return (
     <div 
     className="Map" 
     style={{
       width: "100%",
       height: "100%",
       display: "flex",
       flexDirection: "column",
       justifyContent: "center",
       alignItems: "center",
       background: "cornsilk",
            }}
       >

       <h1>
         Covid-19 Map signatures
       </h1>
      
       <ReactTooltip>{content}</ReactTooltip>
        <div style={{width: "1400px", borderStyle: "double"}}>
        <ComposableMap data-tip="">
          <ZoomableGroup zoom={1}>
            {" "}
          <Geographies geography={geoUrl}>
          {({geographies}) => 
        geographies.map((geo) => (
            <Geography
             key={geo.rsmKey} 
             geography={geo} 
             onMouseEnter={() => {
             const { NAME } = geo.properties;
             setcontent(`${NAME}`);
             }} 
             onMouseLeave={() => {
               setcontent(" ");
             }}
             style={{
               hover: {
                 fill: "#F53",
                 outline: "none",
               }
             }}
             />
            ))
        }          
        </Geographies>
        {
          markers.map(({name,coordinates, markerOffset}) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={10} fill = "#F00" stroke="#fff" strokeWidth={2}/>
              <text textAnchor=" middle" y={markerOffset} style={{fontFamily: "system-ui", fill: "#5D5A6D"}}>
                {name}

              </text>
            </Marker>
          ))
        }
        <Annotation subject={[2.3522, 48.8566]} 
        dx={-90}
        dy={-30}
        
          connectorProps={{
            stroke: "#FF5933",
            strokeWidth:3,
            strokeLinecap: "round",

          }}
          >
            <text 
            x="-8"
            textAnchor="end"
            alignmentBaseline="middle"
            fill="#F53"
            >
              {"Paris"}
            </text>
        </Annotation>
        </ZoomableGroup>
        </ComposableMap>
       </div>
     </div>
   )
 }



export default Map;
