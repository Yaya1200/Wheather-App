import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [wheathervalue, setwheathervalue] = useState('');
  async function CheckWeather(){
     try{
       const result = await axios.post("http://localhost:4000/data", {city: wheathervalue})
       console.log(result.data);
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
  }

  return (
    <div>
      
      <div>
        <p className='wheather-title'>wheather app</p>
       <input name='wheather-data' onChange={WeatherInput} className='wheather-input' placeholder="please enter the city's name"/> 
       <button className='button-check' onClick={CheckWeather}> check</button>
       </div>
       <div className='wheather-output'>
        <p>11:00 pm     13.7 °C     icon</p>
       </div>

    </div>
  )
}

export default App
