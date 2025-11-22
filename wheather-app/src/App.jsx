import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const date = new Date()
  const datehours = date.getHours();
  const dataminutes = date.getMinutes();
  if(datehours > 12){
    datehours
  }
  const ampm = datehours > 12 ? 'am' : "pm"
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
        <div className='paragraph1'> {`${datehours +" " + dataminutes +" "+ ampm}`}  13.7 °C icon</div>
        <div className='paragraphs'>
        <p> icon Feels like  12.7%</p>
        <p> icon Wind  14.5km/h</p>
        <p>icon humidity 24</p>
        <p>icon cloud cover 0%</p>
        <p> icon pressure 13.2</p>
        </div>
       </div>

    </div>
  )
}

export default App
