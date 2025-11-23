import "./lists.css";
function Returingwheather(prop){
    return(
      <div className='wheather-output'>
        <div className='paragraph1' > <span style={{marginTop: 5}}>{`${prop.datehours +":" + prop.dateminutes +" "+ prop.ampm}`}</span>  <span style={{marginTop: 5}}>{`${prop.temp}`}°C</span> <span className="icon0" style={{backgroundImage: `url("https://openweathermap.org/img/wn/${prop.icon}@4x.png")`}}></span></div>
        <div className='paragraphs'>
        <p> <span className="icon1"></span>  <span>Feels like</span>  <span>{`${prop.feelsLike}`}°C</span></p>
        <p> <span className="icon2"></span> <span>Wind </span><span>{`${prop.wind}`}km/h</span></p>
        <p><span className="icon3"></span><span>Humidity</span><span>{`${prop.humid}`}</span> </p>
        <p><span className="icon4"></span> <span>Cloud cover</span><span>{`${prop.cloud}`}%</span></p>
        <p><span className="icon5"></span><span>Pressure</span> <span>{`${prop.pressure}`}Pa</span></p>
        </div>
       </div>
    )
  }
export default Returingwheather