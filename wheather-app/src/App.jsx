import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [wheathervalue, setwheathervalue] = useState('');
  try{
  async()=>{
       const result = await axios.get("/data")
       console.log(result.data);
  }}
  catch(error){
    console.error("error", error);
  }
  function CheckWeather(){

  }
  function WeatherInput(e){
    let valueOfInput = e.target.value;
    setwheathervalue(valueOfInput);
    console.log(wheathervalue);
  }

  return (
    <div>
      
      <div>
        <p className='wheather-title'>wheather app</p>
       <input name='wheather-data' onChange={WeatherInput} className='wheather-input' placeholder="please enter the city's name"/> 
       <button className='button-check'> check</button>
       
       </div>

    </div>
  )
}

export default App
