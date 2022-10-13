import express from "express"

const api = express(); // Se usa para crear la libreria y se usa para el resultado de valor de retorno de express lo cual es una funcion

// api.get("/ping", (request, response) =>{
//     response.send({message: "pong"});
// });

// api.get("/pong", (request, response) =>{
//     response.send({message: "ping"});
// });

//To make the delay
api.get("/delay/:time", (request, response) =>{
    const {time} = request.params;
    setTimeout(() =>{
        response.send({Message: "A response"})
    }, time)
})

api.listen(3000, () => {
    console.log("API IS WORKING");
});

//Para correr la api en CMD node .\src\index.js
//Browser http://localhost:3000/pong
//Para asegurar que funcione.