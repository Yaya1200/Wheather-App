function Returingwheather(prop){
    return(
      <div className='wheather-output'>
        <div className='paragraph1'> {`${prop.datehours +":" + prop.dateminutes +" "+ prop.ampm}`}  {`${prop.temp}`}°C icon</div>
        <div className='paragraphs'>
        <p> icon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Feels like &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {`${prop.feelsLike}`}°C</p>
        <p> icon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Wind &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {`${prop.wind}`}km/h</p>
        <p>icon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  humidity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {`${prop.humid}`}</p>
        <p>icon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  cloud cover &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {`${prop.cloud}`}%</p>
        <p> icon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  pressure &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {`${prop.pressure}`}Pa</p>
        </div>
       </div>
    )
  }
export default Returingwheather