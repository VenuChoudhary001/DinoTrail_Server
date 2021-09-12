import {Server} from 'socket.io'

export default (httpServer,arr)=>{
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  io.on("connection",socket=>{
      socket.on('recieve-location',pos=>{
          arr.push(pos)
          socket.broadcast.emit("send-location",pos);
      })
  })
  return {io,arr};
}