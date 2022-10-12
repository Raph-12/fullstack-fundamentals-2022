import express from "express"

const api = express();

api.get("/ping", (request, response) =>{
    response.send({message: "pong"});
});

api.get("/pong", (request, response) =>{
    response.send({message: "ping"});
});

api.listen(3000, () => {
    console.log("API IS WORKING");
});

//Para correr la api en CMD node .\src\index.js
//Browser http://localhost:3000/pong
//Para asegurar que funcione.