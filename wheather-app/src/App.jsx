import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Returingwheather from './lists';

function App() {
  const [wheathervalue, setwheathervalue] = useState('');
  const [isclicked, setisclicked] = useState(false);
  const [storeddata, setstoreddata] = useState();
  const date = new Date()
  let datehours = date.getHours();
  let dateminutes = date.getMinutes();
  const ampm = datehours > 12 ? 'AM' : "PM"
  if(datehours > 12){
    datehours = datehours - 12
  }
  if(datehours < 10){
    datehours = `0${datehours}`
  }
  if(dateminutes <10){
    dateminutes = `0${dateminutes}`
  }
  async function CheckWeather(){
     try{
       const result = await axios.post("http://localhost:4000/data", {city: wheathervalue})
       setstoreddata(result.data);
       setisclicked(true);
  }
  catch(error){
    console.error("error", error);
    alert("The city's name not found, please correct it.")
  }
    console.log(wheathervalue);
  }
  function WeatherInput(e){
    let valueOfInput = (e.target.value).toLowerCase();
    setwheathervalue(valueOfInput);
  };

 

  return (
    <div>
      
      <div>
        <p className='wheather-title'>wheather app</p>
       <input name='wheather-data' onChange={WeatherInput} className='wheather-input' placeholder="please enter the city's name"/> 
       <button className='button-check' onClick={CheckWeather}> check</button>
       </div>
       {isclicked ? <Returingwheather
              datehours = {datehours}
              dateminutes = {datehours}
              ampm = {ampm}
              temp = {storeddata.main.temp}
              feelsLike = {storeddata.main.feels_like}
              wind = {storeddata.wind.speed}
              humid = {storeddata.main.humidity}
              cloud = {storeddata.clouds.all}
              pressure = {storeddata.main.pressure}
       /> : null
       
       }


    </div>
  )
}

export default App
