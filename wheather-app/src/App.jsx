import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [wheathervalue, setwheathervalue] = useState('');
  try{
  async()=>{
       const result = await axios.post("/data", wheathervalue)
       console.log(result.data);
  }}
  catch(error){
    console.error("error", error);
  }
  function CheckWeather(){
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

    </div>
  )
}

export default App
