import React, {useState, useEffect} from "react";
import Switch from "./Switch";
import Header_Current from "./Header_Current";
import weather_pics from '../images/weather_pics.png';

const API_KEY = process.env.REACT_APP_api_key;

const Form = (props) => {

  const [hourWeather, setHourWeather] = useState([]); 
  const [dailyWeather, setDailyWeather] = useState([]);
  
  const [hourTemps, setHourTemps] = useState([]);
  const [dayTemps, setDayTemps] = useState([]);

  const [hourFinals, setHourFinals] = useState([]);
  const [dayFinals, setDayFinals] = useState([]);
  
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentMain, setCurrentMain] = useState("");

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [zipCode, setZipCode] = useState("");
  const [submit, setSubmit] = useState(false);
  
  useEffect(() => {
    if(submit){
    
    const URL1 = new URL("https://api.openweathermap.org/data/2.5/weather");

    URL1.searchParams.append("appid", API_KEY);
    URL1.searchParams.append("zip", zipCode);
    URL1.searchParams.append("units", "imperial");
     
    fetch(URL1)
    .then((resp) => {
      return resp.json();
    })
    .then((res) => {
      if(res.cod === 200){
      setLatitude(res.coord.lat);
      setLongitude(res.coord.lon);
      }
    });
  }}, [submit]);

  useEffect(() => {
    const URL0 = new URL("https://api.openweathermap.org/data/2.5/onecall");

    URL0.searchParams.append("lat", latitude);
    URL0.searchParams.append("lon", longitude);
    URL0.searchParams.append("exclude", "minutely");
    URL0.searchParams.append("appid", API_KEY);
    URL0.searchParams.append("units", "imperial"); 

    fetch(URL0)
    .then((resp) => {
      return resp.json();
    })
    .then((obj) => {
      console.log(obj);
        console.log(obj);
        setCurrentTemp(obj.current.temp);
        setCurrentMain(obj.current.weather[0].main);
        setHourWeather(obj.hourly);
        setDailyWeather(obj.daily);
    });
  }, [longitude, latitude]);

  useEffect(() => {
    setHourTemps(hourWeather.map(h => h.temp));
    setHourFinals(hourWeather.map(h => h.weather[0].main));
  }, [hourWeather]);

  useEffect(() => {
    setDayTemps(dailyWeather.map(d => d.temp.day));
    setDayFinals(dailyWeather.map(d => d.weather[0].main));
  }, [dailyWeather]);

  const onSubmit = (e) => {
    e.preventDefault();  
    setSubmit(true);
  }

  return (
    <div style={{ textAlign: "center", color:"mediumorchid" }}>
      {!submit && (
      <div className = "Form">
        <form onSubmit={onSubmit}>
          <h1>Enter your zipcode to view the weather!</h1>
          <p>Enter zip code and press return/enter:</p>
          <input
            className="zip"
            value={zipCode || ""}
            type="text"
            name="zip"
            id="zip"
            onChange={(event) => {
              const { value } = event.target;
              setZipCode(value);
            }}
          />
        </form>
        <img src={weather_pics} alt="Weather"/>
      </div>)}
      <div> 
        {submit && (
          <div className="Current">
            <Header_Current temp={currentTemp} weather={currentMain}/>
          </div>
        )}
      </div>
      <div> 
        {submit && (
          <div className = "Switch" >
          <Switch hourTemps={hourTemps} hourMains={hourFinals} dayTemps={dayTemps} dayMains={dayFinals}/>
          </div>
        )}
      </div>
      </div>
  );
}

export default Form;