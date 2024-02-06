
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function categoryOneCalculation(skaicius) {
    let rez = skaicius * 3;
    return rez;
}

function categoryTwoCalculation(skaicius) {
    let rez = skaicius ** 2;
    return rez;
}
function categoryFourthCalculation(skaicius) {
	let vienetai = skaicius % 10;
	let rez = (vienetai + skaicius) / 2;
	return rez;
}

/*Kategorija 1: 0 – 5. skaičius dauginamas iš 3*/

let sk = rand(0, 99);
if (sk <= 5){
    console.log (`Skaicius: ${sk}\t Kategorija: 1, \t Rezultatas: ${categoryOneCalculation(sk)}`);
}
/*Kategorija 2: 6 – 15. iš skaičiaus atsiima 4 ir rezultatas pakeliamas kvadratu*/

else if (sk < 20) {
    console.log(`Skaicius: ${sk}\t kategorija: 3, \t Rezultatas: ${sk}`);
}

/* Kategorija 3: 16 - 30 ir dalijasi iš 5. Prie skaičiaus pridedame 10 */

else if (sk >= 20 && sk < 49 && sk % 2 === 0) {
	let desimtys = +sk.toString()[0];
	let rez = sk - desimtys;
	console.log(`Skaicius: ${sk}\t Kategorija: 3, \t Rezultatas: ${rez}`);
}
/* Kategorija 4: 31 - 45 ir skaičius nelyginis. Skaičių atimame iš 100 */

else if (sk >= 20 && sk < 49 && sk % 2 !== 0) {
	console.log(`Skaicius: ${sk}\t Kategorija: 4, \t Rezultatas: ${categoryFourthCalculation(sk)}`);
}
/* Kategorija 5: 46 – 99 ir skaičiai pasibaigiantys 6 arba 7. Skaičių daliname iš 4 */

else if (sk >= 50 && sk % 3 === 0) {
	let a = rand(97, 122),
		b = rand(97, 122),
		c = rand(97, 122),
		d = rand(97, 122);
	let stringas =
		String.fromCharCode(a) +
		String.fromCharCode(b) +
		String.fromCharCode(c) +
		String.fromCharCode(b);
	console.log(`Skaicius: ${sk}\t Kategorija: 5, \t Rezultatas: ${stringas}`);
}


/* Rezultatas:
Iškritus bet kuriai sąlygai atspausdinti, kokią sąlygą skaičius atitiko
PVZ. sugeneruotas skaičius 28:
Skaičius - 28, Kategorija 3, operacijos rezultatas: 26

Antras variantas



Kategorija 1: 0 – 5. skaičius dauginamas iš 3
Kategorija 2: 6 – 15. iš skaičiaus atsiima 4 ir rezultatas pakeliamas kvadratu
Kategorija 3: 16 - 30 ir dalijasi iš 5. Prie skaičiaus pridedame 10
Kategorija 4: 31 - 45 ir skaičius nelyginis. Skaičių atimame iš 100
Kategorija 5: 46 – 99 ir skaičiai pasibaigiantys 6 arba 7. Skaičių daliname iš 4

*/