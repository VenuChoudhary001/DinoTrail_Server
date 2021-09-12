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

Socket(server,arr);

app.get('/locations',(req,res)=>{
  res.json(arr)
})
server.listen(5000, () => {
  console.log("SERVER IS RUNNIGN ON PORT 5000");
});


