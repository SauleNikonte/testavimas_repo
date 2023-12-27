function countAverage (...pazymiai){
let sum = 0;

for(let pazymys of pazymiai) {
    sum+=pazymys;
}
console.log(sum);

let average = sum / pazymiai.length;
return average;
}
console.log(countAverage(4, 7, 9, 10));

// justino uzd.
//1. tikrinti ar masyve yra daugiau nei 6  elementai
// jei taip i6kviesti funkcija k
const arr = [ 4, 7, 8 , 9, 11, 12];
if (arr.length > 6) {
countAverageSpecial(arr, divideAllElementsByTwo);
}
else {

    countAverageSpecial(arr, multiplyAllElementsByTwo);
}
function divideAllElementsByTwo(array){
for( let index in array){
    array[index]/=2;
}
return array;
}
function multiplyAllElementsByTwo(array){
    for( let index in array){
        array[index]*=2;
    }
    return array;
    }

function countAverageSpecial(array, callback){
if(typeof array !== "object")
return 0;
const resultArray = callback(array);
console.log(resultArray);
let sum = 0;
for (let value of resultArray){
    sum += value;
}
let average  = sum / array.lenght;
return average;
}