/*2023-12-11
Užduotys
1. Sukurti funkciją, kuri generuoja x kiekį atsitiktinių skaičiuo nuo min iki max reikšmės
3. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log()
2. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
4. Išrūšiuoti String'ų masyvą didėjančia tvarka;
5. Išrūšiuoti tą patį masyvą mažėjančia tvarka;
6. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200;
7. Išrūšiuoti masyvą didėjančia tvarka;
8. Išrūšiuoti masyvą mažėjančia tvarka;
9. Atrasti didžiausią bei mažiausią reikšmes skaičių masyve.
10. Apskaičiuoti visų skaičių vidurkį;


1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z
2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio string pozicija masyve bei šio elemento reikšmė;
3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti didėjančia tvarka.
6. Kiekvienai string'ų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abecelę didėjančia tvarka
8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Generuokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS;
9. Išrikiuokite masyvą priešinga nei abecelės tvarka
10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomNumbersArray = (length, min, max) => {
    const arr = [];
for(let i = 0; i < length; i++)
arr.push(rand(min, max));
return arr;
}

const generateString = (length) => {
    let str = '';
    for( let i = 0; i < length; i++){
        str += String.fromCharCode(rand(65,90));
    }
    return str;
}
const stringArray = [];
for(let i = 0; i < 100; i++) {
    stringArray.push(generateString(4))
}
console.log(stringArray);
//3
stringArray.sort();
console.log(stringArray);

//4
stringArray.sort().reverse();
console.log(stringArray);

//5
const numbersArray = generateRandomNumbersArray(100, -100, 200);
console.log(numbersArray);

//6
if(numbersArray.includes(68)){
    console.log(`68 egzistuoja numbersArray masyve`);
}
else {
    console.log(` 68 nera numbersArray masyve`);
}
//7
numbersArray.sort((num1, num2) => {
    return num1 - num2;
});
console.log(numbersArray);

 //8
 numbersArray.reverse();
 console.log(numbersArray);
//9
/*let max = -1000, min = 1000;
for(let value of numbersArray){
    if(value > max){
    max = value;}
    if(value < min ){
        min = value;
    }
    }
*/
/*
let min = Math.min(...numbersArray)
console.log(min);
let max = Math.max(...numbersArray)
console.log(max);
//10 10. Apskaičiuoti visų skaičių vidurkį;
let all = 0;
for (let i = 0; i < numbersArray.length; i++) {
    all += numbersArray[i]
}
let vidurkis = all / numbersArray.length;

console.log(vidurkis);

*/
//1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z.

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const generateRandomLettersArray = (length, min, max) => {
    const arri = [];
for(let i = 0; i < length; i++)
arri.push(rand(min, max));
return arr;
}

const generateLetterString = (length) => {
    let stri = '';
    for( let i = 0; i < length; i++){
        stri += String.fromCharCode(rand(65,90));
    }
    return stri;
}
const stringsArray = [];
for(let i = 0; i < 100; i++) {
    stringsArray.push(generateLetterString(4))
}
console.log(stringsArray);

//2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio string pozicija masyve bei šio elemento reikšmė;
/*for (let i = 0; i < generateLetterString.length; i++) {
    const currentString = generateLetterString[i];
    if (currentString === 'A' && currentString.length - 1 === 'A') {
      console.log(`String "${currentString}" at index ${i} starts and ends with 'A'.`);
    }
    console.log(`String "${currentString}" at index ${i} starts and ends with 'A'.`);
  }
*/
for (let i = 0; i < stringsArray.length; i++) {
    if (stringsArray[i][0] === 'A' && stringsArray[i][stringsArray[i].length - 1] === 'A') {
        console.log(`Stringas ${stringsArray[i]} yra ${i} pozicijoje`);
    }
    else console.log(`Nėra`);
  }

//3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
const filteredArray = stringsArray.filter(str => ['X', 'M', 'K'].includes(str[0]));
console.log(filteredArray);
//4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
//5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti didėjančia tvarka.
//6. Kiekvienai string'ų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
//7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abecelę didėjančia tvarka
//8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Generuokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS;
//9. Išrikiuokite masyvą priešinga nei abecelės tvarka
//10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'