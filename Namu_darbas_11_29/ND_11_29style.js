function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//6
/*let tekstas = 'Once upon a time in Hollywood';
tekstas = tekstas.replace(/o/gi, "*")
console.log (tekstas);*/
let tekstas = 'Once upon a time in hollywood';
let naujas = tekstas.toLowerCase();
let zvaigzde = '*';
naujas2 = naujas.replaceAll('o', zvaigzde);
console.log (naujas2);

//7
let a = rand(0,2), b = rand(0,2), c = rand(0,2), d = rand(0,2);
console.log(a, b, c, d);

if(a > 1){
    console.log (2);}
if(a < 1){
    console.log (0);}
else{
    console.log (1);}

if(b > 1){
    console.log (2);}
if(b < 1){
    console.log (0);}
else{
    console.log (1);}

if(c > 1){
    console.log (2);}
if(c < 1){
    console.log (0);}
else{
    console.log (1);}

if(d > 1){
    console.log (2);}
if(d < 1){
    console.log (0);}
else{
    console.log (1);}

//8
let x = Math.random() * 4; 
console.log(x);
let y = Math.random() * 4;
console.log(y);

if (x > y) {
  result = x / y;
} else if (y > x) {
  result = y / x;
} else {
  result = lygu;
}
console.log("Result: " + result.toFixed(2));

//9
let pirmas = rand(0,25), antras = rand(0,25), trecias = rand(0,25);
console.log(pirmas, antras, trecias);

if (pirmas < trecias && pirmas > antras){
    console.log(pirmas)
}
else if(pirmas > trecias && pirmas < antras){
    console.log(pirmas)
}
else if(antras > pirmas && antras > trecias){
    console.log(antras)
}
else if(antras > pirmas && antras < trecias){
    console.log(antras)
}
else {
    console.log(trecias)
}

//10 
let raide = rand(97,120);
console.log(String.fromCharCode(raide))
let raide1 = rand(97,120);
console.log(String.fromCharCode(raide1))
let raide2 = rand(97,120);
console.log(String.fromCharCode(raide2))

let rezultatas = raide + raide1 + raide2;
console.log(rezultatas);

/*let randomLetters = "";
for (let i = 0; i < 3; i++) {
  let skaicius = Math.floor(Math.random() * 26) + 97;
  let raide = String.fromCharCode(skaicius);
  randomLetters += raide;
}
console.log(randomLetters);*/

let trysraides = "";
for (let i = 0; i < 3; i++) {
  let skaicius = Math.floor(Math.random() * 26) + 97;
  let raide = String.fromCharCode(skaicius);
  trysraides += raide;
}
console.log(trysraides);