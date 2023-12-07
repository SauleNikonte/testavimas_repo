/*Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.*/

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

let numbers = [];
let biggerThan150 = 0;
for (let i = 0; i < 300; i++) {
    //numbers.push(rand(0, 300));
    let randomNumber = rand (0, 300);
    if(randomNumber > 150) biggerThan150++;

if (randomNumber > 275) 
document.write(`<red>${randomNumber}</red> `);
else {

document.write(`<black>${randomNumber}</black> `);
}
}
console.log(`Didesniu sk nei 150 yra: ${biggerThan150}`);