import express, { json } from 'express';
import axios from 'axios';
const app = express();
app.use(express.json());
const Port = 4000;
const API_KEY = "bcb4c192840ca20ed738fdc77f57d9cf";

const API_LINK = "https://api.openweathermap.org/data/2.5/weather"

app.post("/data", async (req,res)=>{
  try{
    const city = req.body.city
  const response = await axios.get(API_LINK,{
    params:{
      q:city,
      appid: API_KEY,
      units:"metric"
    }
  });
  console.log(response.data);
  res.json(response.data);

}
  catch(error)
  {
    console.error("Error:", error.response?.data || error.message);
    res.status(error.response?.status || 500).send(error.response?.data || "Error fetching the weather");

  }
}
)


app.listen(Port, ()=>{
 console.log(`Listening to port ${Port}`)
})