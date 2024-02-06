
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function categoryOneCalculation(skaicius) {
    let rez = skaicius * 3;
    return rez;
}

function categoryTwoCalculation(skaicius) {
    let rez = (skaicius - 4) ** 2;
    return rez;
}

function categoryThreeCalculation(skaicius) {
    
    let rez = sk + 10 ;
    return rez;
}

function categoryFourthCalculation(skaicius) {
	
    let rez = 100 - sk ;
	
	return rez;
}

function categoryFiveCalculation(skaicius) {

}
/*Kategorija 1: 0 – 5. skaičius dauginamas iš 3*/

let sk = rand(0, 99);

if (sk <= 5){
    console.log (`Skaicius: ${sk}\t Kategorija: 1, \t Rezultatas: ${categoryOneCalculation(sk)}`);
}
/*Kategorija 2: 6 – 15. iš skaičiaus atsiima 4 ir rezultatas pakeliamas kvadratu*/

else if (sk >= 6 && sk <= 15) { 
    console.log(`Skaicius: ${sk}\t kategorija: 2, \t Rezultatas: ${categoryTwoCalculation(sk)}`);
}

/* Kategorija 3: 16 - 30 ir dalijasi iš 5. Prie skaičiaus pridedame 10 */

else if (sk >= 16 && sk <= 30 && sk % 5 === 0) {
	console.log(`Skaicius: ${sk}\t Kategorija: 3, \t Rezultatas: ${categoryThreeCalculation(sk)}`);
}
/* Kategorija 4: 31 - 45 ir skaičius nelyginis. Skaičių atimame iš 100 */

else if (sk >= 31 && sk < 45 && sk % 2 !== 0 ) {
    let rez = 100 - sk;
	console.log(`Skaicius: ${sk}\t Kategorija: 4, \t Rezultatas: ${rez}`);
}
/* Kategorija 5: 46 – 99 ir skaičiai pasibaigiantys 6 arba 7. Skaičių daliname iš 4 */

else if (sk >= 36 && sk <= 99 && (sk % 10 === 6 || sk % 10 === 7)) {
    let galutinis = sk / 4;

	console.log(`Skaicius: ${sk}\t Kategorija: 5, \t Rezultatas: ${galutinis}`);
}

else
    { console.log (` Skaicius: ${sk}\t nepatenka į kategoriją`)}
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