
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
/* iš f masyvo ištrinkite elementus kurie:
Yra lyginiai;
Nelyginiai;
Dalinasi iš 3;
Yra lygūs savo indeksui;
Yra mažesni nei 5 arba didesni nei 8;
Yra  nuo 2 iki 5;
kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
kurių suma su sekančiu elementu masyve yra lyginė
	
Po kiekvienos filtracijos naujai sugeneruokite masyvą f */

let arr = [];

for (let i = 0; i < 20; i++){

    arr.push(rand(0, 10));
}

console.log(arr);

// a. lyginiai;
arr = [];

for (let i = 0; i < 20; i++){

    arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if(arr[i] %2 === 0) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
//b;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] %2 !== 0) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
//c ;
arr = [];

for (let i = 0; i < 20; i++){

    arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
//4;
arr = [];

for (let i = 0; i < 20; i++){

    arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
//5;

arr = [];

for (let i = 0; i < 20; i++){

    arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5 || arr[i] > 8) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
//6

arr = [];

for (let i = 0; i < 20; i++){

    arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 2 && arr[i] <= 5) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);

//7 kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
arr = [];

for (let i = 0; i < 20; i++) {

    arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
let nextElement;
    if (arr.length - 1 === i)
{
        nextElement = arr[0];
    }
    else {
        nextElement = arr[i + 1];
    }

    if (arr[i] + nextElement >= 10) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
//8 kurių suma su sekančiu elementu masyve yra lyginė
arr = [];

for (let i = 0; i < 20; i++) {

    arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
let nextElement;
    if (arr.length - 1 === i)
{
        nextElement = arr[0];
    }
    else {
        nextElement = arr[i + 1];
    }

    if ((arr[i] + nextElement) % 2 === 0) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);