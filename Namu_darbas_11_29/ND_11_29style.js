function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//6 Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

/*let tekstas = 'Once upon a time in Hollywood';
tekstas = tekstas.replace(/o/gi, "*")
console.log (tekstas);*/
let tekstas = 'Once upon a time in hollywood';
let naujas = tekstas.toLowerCase();
let zvaigzde = '*';
naujas2 = naujas.replaceAll('o', zvaigzde);
console.log (naujas2);

//7 Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 

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

//8 Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

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

//9 Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.

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

//10  Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis: 3 simboliai.

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

// 7 ir 10 pagal dėstytojo pvz.

let kint1 = rand(0, 2), kint2 = rand(0, 2), kint3 = rand( 0, 2), kint4 = rand( 0, 2);

let count0 = 0, count1 = 0, count2 = 0;

console.log(kint1, kint2, kint3, kint4);

if (kint1 === 0) count0++;
else if (kint1 === 1) count1++;
else count2++;

if (kint2 === 0) count0++;
else if (kint2 === 1) count1++;
else count2++;

if (kint3 === 0) count0++;
else if (kint3 === 1) count1++;
else count2++;

if (kint4 === 0) count0++;
else if (kint4 === 1) count1++;
else count2++;

console.log (`skaičių 0 - ${count0}\t 1 - ${count1}\t 2 - ${count2}`)

//10. ??

console.log( 
    String.fromCharCode(rand(97, 122)) + 
    String.fromCharCode(rand(97, 122)) + 
    String.fromCharCode(rand(97, 122)) );

function rand(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
//11

let text = "The planet {{planet}} is the third planet from the {{star}}. {{planet}} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, {{planet}} formed over {{age}} ago. {{planet}}'s gravity interacts with other objects in space, especially the {{star}} and the {{satellite}}, {{planet}}'s only natural satellite.";

let planet = "earth";
let star = "Sun";
let age = "4.54 billion years";
let satellite = "moon";

text = text.replace(/{{planet}}/g, planet);
text = text.replace(/{{star}}/g, star);
text = text.replace(/{{age}}/g, age);
text = text.replace(/{{satellite}}/g, satellite);

console.log(text);

//12
function rand() {
    return Math.random();
  }
  function random(min, max) {
    let number = min + rand() * (max - min);
    return Number(number.toFixed(2));
  }
  console.log(random(0, 20));