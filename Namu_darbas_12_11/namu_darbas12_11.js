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
for (let i = 0; i < stringsArray.length; i++) {
    if (stringsArray[i][0] === 'A' && stringsArray[i][stringsArray[i].length - 1] === 'A') {
        console.log(`2. Stringas ${stringsArray[i]} yra ${i} pozicijoje`);
    }
    else console.log(`2.Nėra`);
  }
//3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
const XMKArray = stringsArray.filter(stri => ['X', 'M', 'K'].includes(stri[0]));
console.log("3.",XMKArray);

//nesigavo
//4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
/*const filteredArray = XMKArray.filter(str => str[0] === str[str.length - 1] && str.length > 2 && str[1] === str[str.length - 2]);
console.log(filteredArray);*/
const filteredArray = stringsArray.filter(stri => {
    return stri[1] === stri[2];
  });
  console.log("4. Reikšmės, kurių viduriniai du simboliai yra vienodi:", filteredArray);

//5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti didėjančia tvarka.
//abu didejancia :D
if (filteredArray < 3 ){
filteredArray.sort((a, b) => {
    return a - b;
});

console.log("5.didejancia", filteredArray);
}
else (filteredArray.sort((b, a) => {
    return b - a;
})
);
 console.log("5.mazejancia",filteredArray);
 
/*
 const filteredValues = filteredArray

let sortedFilteredValues;
if (filteredValues.length < 3) {
  sortedFilteredValues = filteredValues.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
} else {
  sortedFilteredValues = filteredValues.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
}
console.log(sortedFilteredValues);
*/
//6. Kiekvienai string'ų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
/*const addRandomLetter = (arr) => {
  return arr.map((str) => {
    const randomCharCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    const randomLetter = String.fromCharCode(randomCharCode);
    return str + randomLetter;
  });
};
const newArrayWithRandomLetter = addRandomLetter(stringsArray);
console.log("Masyvas su pridėtomis atsitiktinėmis raidėmis gale:", newArrayWithRandomLetter);
*/
const addRandomLetter = (arri) => {
    return arri.map((sortedFilteredValues) => {
      const randomCharCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
      const randomLetter = String.fromCharCode(randomCharCode);
      return sortedFilteredValues + randomLetter;
    });
  };
  const newArrayWithRandomLetter = addRandomLetter(stringsArray);
  console.log("6. Masyvas su pridėtomis atsitiktinėmis raidėmis gale:", newArrayWithRandomLetter);
//7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abecelę didėjančia tvarka

/*newArrayWithRandomLetter.sort((a, b) => {
    return a - b;
});
console.log("išrikiuotas masyvas:", newArrayWithRandomLetter)
*/

newArrayWithRandomLetter.sort();
const sortedArray = newArrayWithRandomLetter.split().sort().join();
console.log("7. ABC rikiavimas", newArrayWithRandomLetter.sort());



//XMAS užduotis
//8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Generuokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS;

const generateRandomStringXMAS = () => {
    const word = 'XMAS';
    const resultArray = [];
  
    const generateRandomCharCode = () => Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    const generateRandomLetter = () => String.fromCharCode(generateRandomCharCode());
  
    while (true) {
      let randomString = '';
      for (let i = 0; i < 4; i++) {
        randomString += generateRandomLetter();
      }
      resultArray.push(randomString);
  
      if (resultArray.includes(word)) {
        break;
      }
    }
  
    return resultArray;
  };
 /* const filterUniqueValues = (array) => {
    return Array.from(new Set(array));
  };
  
  const generatedArray = generateRandomStringXMAS();
  const uniqueValues = filterUniqueValues(generatedArray);
  
  console.log("8.",uniqueValues);
  /*let uniqueValues = new Set(resultArray);
  let  uniqueValuesArray = Array.from(uniqueValues);

  console.log(" 8. Unikalios:", uniqueValuesArray)
 */
  const newArrayUntilXMAS = generateRandomStringXMAS();
  //console.log("8.", newArrayUntilXMAS);
  



//9. Išrikiuokite masyvą priešinga nei abecelės tvarka
newArrayUntilXMAS.sort();
const reversedArray = newArrayUntilXMAS.slice().sort().reverse();
//console.log("9. ZYX:", reversedArray);

//10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'
const indexOfXMAS = newArrayUntilXMAS.indexOf('XMAS');
console.log("10. 'XMAS' pozicija:", indexOfXMAS);
