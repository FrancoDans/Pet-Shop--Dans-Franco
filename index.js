const express = require ("express")
const app = express()


const router = require("./Routes/index")
//Archivos estaticos
app.use(express.static(__dirname + "/public"));


const http = require("http")

const server = http.createServer(app)

//Socket
const { Server } = require("socket.io");
const io = new Server(server);

//routes

app.use("/api", router)


let msn =  [
  {
      producto: "leche",
      precio: 125,
      id:1,
  },
  {
      producto: "agua",
      precio: 80,
      id:2,
  },
  {
      producto: "arroz",
      precio: 70,
      id:3,
  },
  {
      producto: "gaseosa",
      precio: 200,
      id:4,
  },
  {
      producto: "fideos",
      precio: 100,
      id:5,
  }
]
//Coneccion Socket
io.on("connection", (socket) => {
  console.log("user connected")

  socket.emit("message_back", msn)
  
  socket.on("message_client", (data) =>{
      console.log(data);


 socket.on("dataMsn", (data) => {
        msn.push(data);
        console.log(msn);
        socket.emit("message_back", msn)
    
      });
    
  })
})









server.listen(3005, ()=>{
      console.log("Server ok!");
  })