import {Server} from 'socket.io'

export default (httpServer,arr)=>{
  const io = new Server(httpServer, {
    cors: {
      origin: `http://localhost:3000`,
      methods: ["GET", "POST"],
    },
  });
  io.on("connection",socket=>{
      socket.on('recieve-location',pos=>{
          arr.push(pos)
          socket.broadcast.emit("send-location",pos);
      })
      socket.on('log-out',(pos)=>{
        let newArr=arr.filter(({latitude,longitude})=>(latitude!==pos.latitude && longitude!==pos.longitude))
        arr=[];
        arr=newArr;
        socket.broadcast.emit("active",arr);
        socket.disconnect();
      })
  })
  return {io,arr};
}