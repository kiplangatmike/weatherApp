import { React, useEffect,  useState } from "react";
import axios from "axios";
import Info from "./Info";

const Main = (props) => {
  const [searchCity, setSearchCity] = useState("");
  const [updated, setUpdated] = useState(searchCity);
  const searchHandler = (event) => {
    
    setSearchCity(event.target.value);
  };
  const handleChange = (e) => {e.preventDefault();
    setUpdated(searchCity);
    
  };

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  console.log(API_KEY);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log(lat);
      });

      const appid = "7515938d095ad2233a00696b4cc1e41d";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${appid}`;
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    };
    fetchData();
  }, [lat, long]);

  return (
    <section>
      <div>
        <h2>React Weather App</h2>
        <p>{props.weatherData.main.temp}</p>
        {/* <icon></icon> */}
        <h3>find weather of your city</h3>
        <form>
          <input
            placeholder="city name"
            label="Input"
            onChange={searchHandler}
            value={searchCity}
          />
          <button onClick={handleChange}>Search</button>
          <h2>Message: {searchCity}</h2>

          <h2>Updated: {updated}</h2>
        </form>
      </div>
    </section>
  );
};

export default Main;
