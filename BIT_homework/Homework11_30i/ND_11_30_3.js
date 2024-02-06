function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//2 Automobiliai (? su rand?)
let s0 = [rand(0, 260)];
let v1 = [rand(0, 260)];
let v2 = [rand(0, 260)];
let t = [rand(0, 260)];
let s = s0 + v1 * t - v2 * t;
console.log(`Atstumas tarp automobilių po " + ${t} + " valandų yra " + ${s} + " km.`);

if (v2 > v1) {
  if (s <= 0) {
    console.log(`Aplenkė`);
  } else {
    console.log(`Pasivys`);
  }
} else if (v2 == v1) {
  if (s == s0) {
    console.log(`Atstumas tarp automobilių nesikeičia`);
  } else {
    console.log(`Pasivijo`);
  }
} else {
  console.log(`Niekada nepavys`);
}

//3 temperaturos
let temp = [rand(-10, 10), rand(-10, 10), rand(-10, 10)];
console.log(temp);
//console.log(temp[1]);
let count = new Array(3).fill(0);
//let kintamasis = [2, 4, 8, 9, 10].fill("stringai");
//console.log(kintamasis);

if (temp[0] > 0) count[0]++;
else if (temp[0] < 0) count[1]++;
else count[1]++;

if (temp[1] > 0) count[0]++;
else if (temp[1] < 0) count[1]++;
else count[1]++;


if (temp[2] > 0) count[0]++;
else if (temp[2] < 0) count[1]++;
else count[1]++;

console.log(`Rezultatas: teigiama ${count[0]}dienų, neigiama ${count[1]} dienų.`);