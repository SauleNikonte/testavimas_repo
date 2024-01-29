// console.log("hello world");

// // modulio importavimas
// const sum = require("./math-module").sum;
// // pavadiniamai importuojant gali būti pasirinktiniai
// const atimti = require("./math-module").subtract;

// console.log(sum(4, 5));
// console.log(atimti(5, 4));

// const http = require("http");

// const server = http.createServer((req, res) => {
// if (req.url ==="/" && req.method === "GET"){
//     req.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//     res.write('Tai yra mano atsakymas');
//     res.end()//atsakymas užbaigtas ir serveriui nereikia nieko daugiau tikrinti
// }
// if (req.url ==="/check"){
//     res.write('Tai yra mano atsakymas');
//     res.end()
// }
// });
// server.listen(3000);// paleidžiamas serveris ant port'o 3000
// console.log("server is starded on port 3000");


//gaunama express biblioteka is node_modules aplanko
const express = require('express');
//Gaunama cors biblioteka iš node_modules aplanko
const cors = require('cors');
//Sukuriamas express serveris
const  app = express();

let countOfVisitors = 0;
let todos = [
    {author:"Saulė", todo: "1. Nuvažiuoti į Ukmergę"},
    {author:"Saulė", todo: "2. Rasti Mandarininę antį (Aix galericulata)"},
    {author:"Saulė", todo: "3. Nufotografuoti Mandarininę antį (Aix galericulata)"},
];
//Naudojami CORS nustatymai, leidžiantys kreiptis į serverį
app.use(cors());

//nustatomas endpointas /, kuris leidžia kreipiantis į adresą http://localhost:3000/ gauti atsakymą "hello world"
app.get("/", (req, res) => {
    res.send("Hello world");
});

//req - objektas skirtas request'o informacijai nusakyti
app.get("/test",(req, res) => {
    
    res.send("serveris veikia");
});

//res - objektas, skirtas pateikti atsakymus iš serverio
app.get("/count",(req, res) => {
    countOfVisitors++;
    res.send("tiek kartu aplankytas sis serveris" + countOfVisitors);
});

//res.send() - metodas, leidžiantis išsiūsti atsakymą
app.get("/get-todos",(req, res) =>{
    res.send(JSON.stringify(todos));
});

//app.listen() - paleidžiamas serveris nurodant port'ą
app.listen(3000);
console.log("serveris pasileido portu 3000")