import React from 'react';
import weather_icon from './weather_icon.png';

const Header_Current = (props) => {

return (
    <div style={{ textAlign: "center", color: "darkblue" }}>
        <h1>Weather App</h1>
        <img src={weather_icon} alt="Weather"/>
        <h2>Temperature: {props.temp}</h2> 
        <h2>Forecast: {props.weather}</h2>
    </div>
);
}

export default Header_Current;