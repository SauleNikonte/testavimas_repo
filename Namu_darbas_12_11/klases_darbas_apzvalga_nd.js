//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
//Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
//Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
//Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
//Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.
//Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.


function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const generateArrayOfStrings = ( Length) => {
const arr = [];
for(let i = 0; i < Length; i++){
    let atsitiktineRaide = String.fromCharCode(rand(65,68));
    arr.push(atsitiktineRaide);
}
return arr;
};
//1uzd
const charactersArray = generateArrayOfStrings(200);
console.log(generateArrayOfStrings(200));

//2 uzd

charactersArray.sort();
console.log(charactersArray);

//3uzd.

const arr1 = generateArrayOfStrings(200),
arr2 = generateArrayOfStrings(200),
arr3 = generateArrayOfStrings(200),
sumArray = [],
uniqueValues = [],
superUniqueValues = [];

for(let index in arr1) {
sumArray[index] = arr1[index] + arr2[index] + arr3[index];
}
console.log(sumArray)

for (const value of sumArray) {
    if(!uniqueValues.includes(value)) {
        uniqueValues.push(value);
    }
}
 console.log(uniqueValues);

 let superUniqueCombinations = 0;
 for( let value of sumArray) {
    let countOfThisCombination = 0;
    for (let value2 of sumArray){
        if( value === value2) {
            countOfThisCombination++;
        }
    }
    if(countOfThisCombination === 1){
superUniqueValues.push(value);
 }
 }
 console.log(superUniqueValues);
 console.log("is viso unikaliu reiksmiu: " + superUniqueValues.length);

 //4 uzd
 function generateUniqueArray(length, min, max){
    const arr = [];
    while (arr.length < length) {
        let randomNumber = rand(min,max);
        if (!arr.includes(randomNumber)) arr.push(randomNumber);
    }
    return arr;
 }

 const array1 = generateUniqueArray(100, 100 ,999,),
  array2 = generateUniqueArray(100, 100 ,999,);


console.log(`masyvas 1:`);
console.log(array1);
console.log(`masyvas 2:`);
console.log(array2);


/*while(array1.length < 100){
    let randomNumber = rand(100, 999);
 if(!array1.includes(randomNumber)) array1.push(randomNumber);
 
}
while(array2.length < 100){
    let randomNumber = rand(100, 999);
 if(!array2.includes(randomNumber)) array2.push(randomNumber);
 
}
*/
//5 uzd 

const fifthArray = [];
for ( let index in arr1)
{
    if(arr1[index] !== arr2[index])
    {
fifthArray.push(arr1[index]);
    }
}
console.log(fifthArray)

// 6 uzd.
const newArray = [];
for(let value of array1){
    if(array2.includes(value)){
newArray.push(value);
    }
}


//7

const newArray2 = [];
for(let index of array1)
{
    newArray2[index] = array2[index];
    i++;
}
console.log(newArray2);