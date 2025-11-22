import express, { json } from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
const app = express();
app.use(express.bodyParser(json()));
const Port = 4000;
app.get("/", async (req,res)=>{
  const response = await axios("https://api.openweathermap.org/data/2.5/weather?q={london}&appid={bcb4c192840ca20ed738fdc77f57d9cf}");
  console.log(response.data);
}
)


app.listen(Port, ()=>{
 console.log(`Listening to port ${Port}`)
})