import express, { json } from 'express';
import axios from 'axios';
const app = express();
app.use(express.json());
const Port = 4000;
const API_KEY = "bcb4c192840ca20ed738fdc77f57d9cf";
const city = "london";
const API_LINK = "https://api.openweathermap.org/data/2.5/weather"

app.get("/", async (req,res)=>{
  try{
  const response = await axios(API_LINK,{
    params:{
      q:city,
      appid: API_KEY,
      units:"metric"
    }
  });
  console.log(response.data);
  res.json(response);

}
  catch(error)
  {
    console.err("Error", err);
  }
}
)


app.listen(Port, ()=>{
 console.log(`Listening to port ${Port}`)
})