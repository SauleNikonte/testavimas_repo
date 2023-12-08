function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1.Sukurkite masyvą iš 20 elementų:
// a) Kurių reikšmės: 0, 1, 2 …, 18 ,19;
let masyvas = [];
    for (let i = 0; i < 20; i++) {
        masyvas.push(i);
      }
      
      console.log(masyvas);
// b) Kurių reikšmės: 1,2 3, … ,19, 20
let masyvas2 = [];
    for (let i = 1; i <= 20; i++) {
        masyvas2.push(i);
      }
      
      console.log(masyvas2);
// c) Kurių reikšmės: 19, 18 … 2, 1, 0
let masyvas3 = [];
for(let i = 1; i < 20; i++) {
masyvas3.push(i);
}
masyvas3.sort(function(a, b) {
    return b - a;
  });
console.log(masyvas3);
//d) Kurių reikšmės: 20, 21, 22…. 38, 39..
let masyvas4 = [];
    for (let i = 20; i < 40; i++) {
        masyvas4.push(i);
      }
      
      console.log(masyvas4);
//e) Kurių reikšmės: 49, 48, 47…. 31, 30
let masyvas5 = [];
    for (let i = 30; i < 50; i++) {
        masyvas5.push(i);
      }
      masyvas5.sort().reverse();
      console.log(masyvas5);
//f)Su atsitiktinėmis reikšmėmis nuo 0 iki 10
//1
let masyvas6 = [];
for (let i = 0; i < 20; i++) {
let reiksme = Math.floor(Math.random() * 11);
  masyvas6.push(reiksme);
}
console.log(masyvas6);
//2
function generateArrayOfRandomNumbers(min = 5, max, countOfElements) {
	let masyvas7 = [];
	for (let i = 0; i < countOfElements; i++) {
		masyvas7.push(rand(min, max));
	}
	return masyvas7;
}
let masyvas7 = generateArrayOfRandomNumbers(0, 10, 20);
console.log(masyvas7);

//2.Pasinaudokite join funkcija ir atspausdinkite vieno iš ankščiau sukurtų masyvų reikšmes tokia tvarka (pvz masyvas a) 0 -> 1 -> 2…. -> 18 -> 19;
let masyvas8 = [];
for (let i = 0; i < 20; i++) {
  masyvas8.push(i);
}
let eilute = masyvas8.join(" -> ");
console.log(eilute);

//3.iš f masyvo ištrinkite elementus kurie:
//a)Yra lyginiai;
let masyvas9 = [];
for (let i = 0; i < 20; i++) {
  let reiksme = Math.floor(Math.random() * 11);
  masyvas9.push(reiksme);
}
let masyvas10 = masyvas9.filter(function(element) {
  return element % 2 !== 0;
});
console.log(masyvas9);
console.log(masyvas10);

//2023 12 05 funkcija
function getNextElement(array, index) {
	if (array.length - 1 === index) return array[0];
	else return array[index + 1];
}
let arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);
//b)Nelyginiai;
let masyvas11 = [];
for (let i = 0; i < 20; i++) {
  let reiksme = Math.floor(Math.random() * 11);
  masyvas11.push(reiksme);
}
let masyvas12 = masyvas11.filter(function(element) {
  return element % 2 === 0;
});
console.log(masyvas11);
console.log(masyvas12);


arr = generateArrayOfRandomNumbers(0, 10, 20);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 !== 0) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);
//c)Dalinasi iš 3;
let masyvas13 = [];
for (let i = 0; i < 20; i++) {
  let reiksme = Math.floor(Math.random() * 11);
  masyvas13.push(reiksme);
}
let masyvas14 = masyvas13.filter(function(elementas) {
  return elementas % 3 !== 0;
});
console.log(masyvas13);
console.log(masyvas14); 

arr = generateArrayOfRandomNumbers(0, 10, 20);
generateArrayOfRandomNumbers();
console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 3 === 0) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//d)Yra lygūs savo indeksui;
/*let masyvas15 = [];
for (let i = 0; i < 20; i++) {
  let reiksme = Math.floor(Math.random() * 11);
  masyvas15.push(reiksme);
}
*/
arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (i === arr[i]) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//e)Yra mažesni nei 5 arba didesni nei 8;
arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] < 5 || arr[i] > 8) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//f)Yra  nuo 2 iki 5;
arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] >= 2 && arr[i] <= 5) {
		arr.splice(i, 1);
		i--;
	}
}

console.log(arr);
//g)kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	let nextElement = getNextElement(arr, i);
	if (arr[i] + nextElement >= 10) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);
//h)kurių suma su sekančiu elementu masyve yra lyginė
arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	let nextElement = getNextElement(arr, i);
	if ((arr[i] + nextElement) % 2 === 0) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//Po kiekvienos filtracijos naujai sugeneruokite masyvą f

//4.Sukurkite atsitiktinio stringo iš 15 lotyniškų mažųjų raidžių generavimo algoritmą. Pasinaudokite String.fromCharCode(skaicius) funkcija, kad sugeneruoti atsitiktinę raidę. 
function generateRandomLetter() {
    const randomNumber = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(randomNumber);
  }
  console.log(generateRandomLetter());

//senas
let stringas = "";
for (let i = 0; i < 15; i++) {
  let skaicius = Math.floor(Math.random() * 26) + 97;
  let raide = String.fromCharCode(skaicius);
  stringas += raide;
}
console.log(stringas);
//5.Sukurti masyvą iš 100 atsitiktinių skaičių. Prieš pridėdami elementą prie masyvo patikrinkite  ar skaičius yra nuo 40 iki 60. Jei taip, jo nepridėkite prie masyvo. Galiausiai masyvas turi turėti 100 elementų
function generateArrayOfRandomNumbers() {
    let masyvas15 = [];
    while (masyvas15.length < 100) {
      const randomNumber = Math.floor(Math.random() * 61);
      if (randomNumber >= 40 && randomNumber <= 60) {
        continue;
      }
      masyvas15.push(randomNumber);
    }
    return masyvas15;
  }
  console.log(generateArrayOfRandomNumbers());

//6.Pasinaudojant document.write() funkcija išveskite lyginius 5 uždavinio masyvo skaičius su spalva - žalia, o nelyginius su spalva - raudona;
//https://www.w3schools.com/jsref/met_doc_write.asp
let masyvas16 = generateArrayOfRandomNumbers();
document.write("<p>");
for (let i = 0; i < masyvas16.length; i++) {
  if (masyvas16[i] % 2 === 0) {
    document.write("<span style='color:green'>" + masyvas16[i] + "</span> ");
  } else {
    document.write("<span style='color:red'>" + masyvas16[i] + "</span> ");
  }
}
document.write("</p>");
//7.Sugeneruokite 80 atsitiktinių skaičių nuo 8 iki 32. Apskaičiuokite visų šių skaičių vidurkį.
function generateArrayOfRandomNumbers() {
    let masyvas17 = [];
    while (masyvas17.length < 80) {
      const randomNumber = Math.floor(Math.random() * 25) + 8;
      masyvas17.push(randomNumber);
    }
    return masyvas17;
  }
  function calculateAverage(masyvas17) {
    const sum = masyvas17.reduce((a, b) => a + b, 0);
    return sum / masyvas17.length;
  }
  const randomArray = generateArrayOfRandomNumbers();
  const average = calculateAverage(randomArray);
  
  console.log(randomArray);
  console.log(average);
