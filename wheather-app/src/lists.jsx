function Returingwheather(prop){
    return(
      <div className='wheather-output'>
        <div className='paragraph1'> <span>{`${prop.datehours +":" + prop.dateminutes +" "+ prop.ampm}`}</span>  <span>{`${prop.temp}`}°C</span> <span>icon</span></div>
        <div className='paragraphs'>
        <p> <span> icon</span>  <span>Feels like</span>  <span>{`${prop.feelsLike}`}°C</span></p>
        <p> <span>icon</span> <span>Wind </span><span>{`${prop.wind}`}km/h</span></p>
        <p><span>icon</span><span>Humidity</span><span>{`${prop.humid}`}</span> </p>
        <p><span>icon</span> <span>Cloud cover</span><span>{`${prop.cloud}`}%</span></p>
        <p><span>icon</span><span>Pressure</span> <span>{`${prop.pressure}`}Pa</span></p>
        </div>
       </div>
    )
  }
export default Returingwheather