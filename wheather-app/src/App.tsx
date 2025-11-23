import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Returingwheather from "./lists";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  weather: [{
    icon: string;
  }];
}

function App() {
  const [wheathervalue, setwheathervalue] = useState<string>("");
  const [isclicked, setisclicked] = useState<boolean>(false);
  const [storeddata, setstoreddata] = useState<WeatherData | null>(null);

  const date = new Date();
  let datehours: number = date.getHours();
  let dateminutes: number = date.getMinutes();
  const ampm = datehours >= 12 ? "PM" : "AM";

  if (datehours > 12) datehours -= 12;


  const datehoursstr = datehours < 10 ? `0${datehours}` : `${datehours}`;
  const dateminutesstr = dateminutes < 10 ? `0${dateminutes}` : `${dateminutes}`;

  async function CheckWeather() {
    try {
      const result = await axios.post("http://localhost:4000/data", {
        city: wheathervalue,
      });
      setstoreddata(result.data);
      setisclicked(true);
    } catch (error) {
      console.error("error", error);
      alert("The city's name not found, please correct it.");
    }
  }

  function WeatherInput(e: React.ChangeEvent<HTMLInputElement>) {
    setwheathervalue(e.target.value.toLowerCase());
  }

  return (
    <div>
      <div>
        <p className="wheather-title">Weather App</p>
        <input
          name="wheather-data"
          onChange={WeatherInput}
          className="wheather-input"
          placeholder="Please enter the city's name"
        />
        <button className="button-check" onClick={CheckWeather}>
          Check
        </button>
      </div>

      {isclicked && storeddata ? (
        <Returingwheather
          datehours={datehoursstr}
          dateminutes={dateminutesstr}
          ampm={ampm}
          temp={storeddata.main.temp}
          feelsLike={storeddata.main.feels_like}
          wind={storeddata.wind.speed}
          humid={storeddata.main.humidity}
          cloud={storeddata.clouds.all}
          pressure={storeddata.main.pressure}
          icon={storeddata.weather[0].icon}
        />
      ) : null}
    </div>
  );
}

export default App;
