function rand(min,max){
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}
/*let fibonacci = [0, 1];
for (let i = 2; i < 50; i++){
fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci);

*/
let fibonacci = [0, 1];
for (let i = 2; i < 50; i++){
fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
}
console.log(fibonacci);

/* let atsitiktiniaiSkaiciai = [];
for(let i = 0; i < 1000; i++){
let randomSkaicius = rand(0,10);
atsitiktiniaiSkaiciai[i] = randomSkaicius;
}
console.log(atsitiktiniaiSkaiciai);
*/

let atsitiktiniaiSkaiciai = [];
for(let i = 0; i < atsitiktiniaiSkaiciai.lenght; i++){
if (atsitiktiniaiSkaiciai[i] %2 !== 0);{

console.log(atsitiktiniaiSkaiciai[i]);}
}

console.log("Atsitiktiniu skaiciu masyvo ilgis = " + atsitiktiniaiSkaiciai.length);

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
    console.log (atsitiktiniaiSkaiciai);
}
console.log(atsitiktiniaiSkaiciai);

//
let countOfTwos = 0;

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
    if(atsitiktiniaiSkaiciai[i] === 2)countOfTwos++;
}
console.log("Skaiciu, su reiksme 2 masyve yra: "+ countOfTwos);

let countOfFives = 0;

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
    if(atsitiktiniaiSkaiciai[i] > 5)countOfFives++;
}
console.log("Skaiciu, su reiksme >5 masyve yra: "+ countOfFives);

let counter = 0;

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
    if(atsitiktiniaiSkaiciai[i] < 3 || atsitiktiniaiSkaiciai[i] > 7) counter++;
}
console.log("Skaiciu, su 3/7 masyve yra: " + counter);


let naujasMasyvas = [8, 7, 3, 46, 9, 7];
naujasMasyvas.push(1);
console.log(naujasMasyvas);
