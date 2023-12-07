function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//2023-12-07
//Darbas su masyvais
//1 Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.


const arr = Array.from({length: 200}, () => {
  const symbols = ['A', 'B', 'C', 'D'];
  return symbols[Math.floor(Math.random() * symbols.length)];
});

console.log(arr);

const count = {};

for (let i = 0; i < arr.length; i++) {
  if (count[arr[i]]) {
    count[arr[i]]++;
  } else {
    count[arr[i]] = 1;
  }
}

console.log(count);

//2 Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.

const arri = Array.from({length: 200}, () => {
  const symbols = ['A', 'B', 'C', 'D'];
  return symbols[Math.floor(Math.random() * symbols.length)];
});
arri.sort();

console.log(arri);

//3 Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
const array1 = Array.from({ length: 200 }, () => ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]);
const array2 = Array.from({ length: 200 }, () => ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]);
const array3 = Array.from({ length: 200 }, () => ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]);
console.log (array1, array2, array3)
const combinedArray = [];
for (let i = 0; i < array1.length; i++) {
  const sum = array1[i] + array2[i] + array3[i];
  combinedArray.push(sum);
}
console.log(combinedArray);

const uniqueValues = new Set(combinedArray);
const uniqueValuesCount = uniqueValues.size;

const uniqueCombinations = new Set(combinedArray);
//combinedArray.forEach(value => {
//uniqueCombinations.add(value);
//});
const uniqueCombinationsCount = uniqueCombinations.size;
//abu vienodi ?
console.log(uniqueValues);
console.log(uniqueCombinations);
console.log(`Unikalių reikšmių skaičius: ${uniqueValuesCount}`);
console.log(`Unikalių kombinacijų skaičius: ${uniqueCombinationsCount}`);


//4 Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
const generateArrayOfRandomNumbers = (min = 10, max, length = 10) => {
	let arr = [];
	for (let i = 0; i < length; i++) arr.push(rand(min, max));
	return arr;
};
const arr1 = generateArrayOfRandomNumbers(100, 1000, 100);
console.log(arr1);
function removeDuplicates(arr1) {
  let unique = arr1.reduce(function (acc, curr) {
      if (!acc.includes(curr))
          acc.push(curr);
      return acc;
  }, []);
  return unique;
}
console.log(removeDuplicates(arr1));
// acc - array kuris kaipia unique reiksmes is pagrindinio array. Curr - pagrindinio Array esama reikšme (value).
const arr2 = generateArrayOfRandomNumbers(100, 1000, 100);
console.log(arr2);
function removeDuplicates(arr2) {
  let unique = arr2.reduce(function (acc, curr) {
      if (!acc.includes(curr))
          acc.push(curr);
      return acc;
  }, []);
  return unique;
}
console.log(removeDuplicates(arr2));

//5 Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.
//negaliu daryt nes nesutvarkyta 3 užduotis.
//6 Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.

function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const commonElements = [...set1].filter(elem => set2.has(elem));

  return commonElements;
}
const commonElementsArray = findCommonElements(arr1, arr2);
console.log(commonElementsArray);
//7 Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.
// mappedArray - paprastas array kuris talpina išfiltruotas reiksmes.
//value yra kiekvienas elementas iš arr1, o index yra jo atitinkamas indeksas šiame masyve.(objekte): Per kiekvieną forEach iteraciją funkcija priskiria naują porą objekte mappedArray. Kiekvienos iteracijos metu value yra naudojamas kaip raktas naujame objekte mappedArray, o arr2[index] yra priskiriama kaip šio raktų objekto reikšmė.
function createMappedArray(arr1, arr2) {
  const mappedArray = {};

  arr1.forEach((value, index) => {
    mappedArray[value] = arr2[index];
  });

  return mappedArray;
}

const mappedArray = createMappedArray(arr1, arr2);
console.log(mappedArray);