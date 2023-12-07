function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateArrayOfRandomNumbers(mn, max, length)
{
let arr = [];
for (let i = 0; i < length; i++) {
    arr.push(rand(0, 100));
}
return arr;
}
const arr = generateArrayOfRandomNumbers(0, 10, 100);
console.log(arr);

const arr4 = generateArrayOfRandomNumbers2(1, 99, 20);
console.log(arr4);
let sum = 0;
for ( let i = 0; i < arr4.length; i++){
    sum += arr4[i];
}
let average = sum / arr4.length;
console.log(average);
//for of ciklas
const arr5 = generateArrayOfRandomNumbers2(1, 1000, 23);
console.log(arr5);
sum = 0;
for (let value of arr5){
    sum += value;
}
average = sum / arr5.length;
console.log(average);

// for in ciklas

const arr6 = generateArrayOfRandomNumbers2(1, 1000, 30);
sum = 0;
console.log(arr6);

for (let index in arr6){
    sum += arr6[index];
}
average = sum / arr6.length;
console.log(average);

const masyvas = [6, 2, 9, 5, 12];
let filteredValues = masyvas.filter((num) =>{
return num % 2 === 0;
});
console.log(filteredValues);