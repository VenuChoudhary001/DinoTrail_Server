import express from 'express'
import cors from 'cors'
import http from 'http'
import dotenv from 'dotenv'
import Socket from './socket.js'
const app=express();

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors({ origin: "*" }));
dotenv.config();
const server=http.createServer(app);


const arr=[];
const PORT=process.env.PORT || 5000
Socket(server,arr);
app.get('/',(req,res)=>{
  res.status(200).send("WELCOME TO PREHISTORIC HACKATHON")
})
app.get('/locations',(req,res)=>{
  res.status(200).json(arr)
})
server.listen(PORT, () => {
  console.log("SERVER IS RUNNIGN ON PORT 5000");
});


