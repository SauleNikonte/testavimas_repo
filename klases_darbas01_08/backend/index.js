
// // modulio importavimas
// const sum = require("./math-module");
// const atimti = require("./minus-module");



// console.log(sum(4, 5));
// console.log(atimti(5, 4));


const http = require("http");

const server = http.createServer((req, res) => {
if (req.url ==="/"){
    res.write('Tai yra mano atsakymas');
    res.end()
}
if (req.url ==="/check"){
    res.write('Tai yra mano atsakymas');
    res.end()
}
});
server.listen(3000);
console.log("server is starded on port 3000");  