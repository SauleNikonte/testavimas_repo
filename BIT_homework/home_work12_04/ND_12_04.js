function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//a
for (let indeksas = 0; indeksas < 400; indeksas++) {
    document.write("* ")
};
/*for (let i = 0; i < 400; i++) {
    let star = "*";
  document.write(star);
};
*/

// b
let i ="";
for (let i = 0; i < 400; i++){
    eile = "* ";
    if ((i + 1) % 50 === 0)
    eile +='<br>';
document.write(eile);
}

/*for ( let i = 0; i < 10; i++){
    let row = "* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *"
row += "<br>";
document.write(row)
}
*/

//1
let numb = rand(0, 6);
document.querySelector("#rez").innerText = `Atsakymas: ${numb}`;

//2 Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni.

let number = "";

for (i = 0; i < 3; i++) {
 number = Math.floor(Math.random() * 21) - 10;
 if (number < 0) document.write(`<green>${number}<green>`)
 if (number === 0) document.write(`<red>${number}<red>`)
 if (number > 0) document.write(`<blue>${number}<blue>`)
}

//3 Sukurkite kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.

let text = [
    `An American in Paris”,
    “Breakfast at Tiffany's”,
    “2001: A Space Odyssey”,
    “It's a Wonderful Life.`,
];

    for (let i = 0; i < text.length; i++) {
        let tekstas = text[i].replace(/[aeiouy]/gi, "");
        console.log(tekstas);
    }

//4 Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.
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

 //5 Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytųsi ekrane.
//nesigauna! ir prisitaiko  stilius / spalva.
/*let rezultatas = "";
for (let i = 0; i < 3000; i++){
    if ((i + 1) % 77 === 0){
        rezultatas += i;
        
        document.write(`${rezultatas} ,`);
    }
}
*/
/*
for (let i = 1; i <= 3000; i++) {
    if (i % 77 === 0) {
      console.log(i);
    }
document.write(i);

  }
*/

let result = "";
for (let i = 1; i <= 3000; i++) {
  if (i % 77 === 0) {
    result += i + ",";
  }
}
document.write(result.slice(0, -1));


 //6 Duotas vardų masyvas, kuriame visi vardai prasideda mažąja raide. Reikia sukurti algoritmą, kuris visus vardus konvertuoja į iš didžiosios raidės prasidedančius vardus:
let namesArray = [
	'alice', 'bob', 'charlie', 'david', 'emily',
	'frank', 'grace', 'harry', 'isabella', 'jack',
	'kate', 'liam', 'molly', 'nathan', 'olivia',
	'peter', 'quinn', 'rachel', 'steve', 'tina'
];

for ( let i = 0; i < namesArray.length; i++){
let letter = namesArray[i].charAt(0).toUpperCase() + namesArray[i].slice(1);
if (i == namesArray.length -1) {
    document.write(letter)
}
else { document.write(letter + ", ");

}
}



/*pvz
let n = 100;
let simbolis = `<black>*<black>`, redSimbolis = `<red>*<red>`;
for (let indeksas = 0; indeksas < n; indeksas++) {
    let eilute = ""+redSimbolis+redSimbolis+simbolis;
    eilute +="<br>"
    document.write(eilute);
}

*/

