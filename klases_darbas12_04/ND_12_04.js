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

//2
let kint1 = rand(-10, 10),
	kint2 = rand(-10, 10),
	kint3 = rand(-10, 10);

console.log(kint1, kint2, kint3);

let count = new Array(3).fill(0);

//ka cia irasyti?
if (kint[0] > 0) count[0]++;
else if (kint[0] < 0) count[1]++;
else count[2]++;

if (kint[1] > 0) count[0]++;
else if (kint[1] < 0) count[1]++;
else count[2]++;

if (kint[2] > 0) count[0]++;
else if (kint[2] < 0) count[1]++;
else count[2]++;

let minus = `<green>${count[0]}<green>`, nulis = `<red>${count[2]}<red>`, plius = `<blue>${count[1]}<blue>`;

document.write(count[0], count[1], count[2])

console.log(`Skaičių 0 - ${count[0]}\t 1 - ${count[1]}\t 2 - ${count[2]}`);

/*pvz
let n = 100;
let simbolis = `<black>*<black>`, redSimbolis = `<red>*<red>`;
for (let indeksas = 0; indeksas < n; indeksas++) {
    let eilute = ""+redSimbolis+redSimbolis+simbolis;
    eilute +="<br>"
    document.write(eilute);
}

*/

