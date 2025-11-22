import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  try{
  async()=>{
       const result = await axios.get("/data")
       console.log(result.data);
  }}
  catch(error){
    console.error("error", error);
  }

  return (
    <div>
      
      <div>
        <p className='wheather-title'>wheather app</p>
       <input className='wheather-input' placeholder="please enter the city's name"/> 
       
       </div>

    </div>
  )
}

export default App
