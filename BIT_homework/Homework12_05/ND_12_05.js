function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//1 Nupieškite kvadratą iš “*”, kurio kraštines sudaro n=10 “*” simbolių. Pasinaudokite ciklais. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.

let i ="";
for (let i = 0; i < 100; i++){
    eile = "* ";
    if ((i + 1) % 10 === 0)
    eile +='<br>';
document.write(eile);
}

//2 Prieš tai nupieštam kvadratui nupieškite raudonas istrižaines.
//pabaigti
let index ="";
for (let i = 0; i < 100; i++){
    eile = "* ";
    if ((i + 1) % 10 === 0)
    eile +='<br>';
}
eile = index;
let zvaigzde = "*";
nauja = eile.replaceAll((zvaigzde +1), `<red>${zvaigzde}<red>`)
document.write(nauja);


//3 Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
//a.              Iškritus herbui;
//b.              Tris kartus iškritus herbui;
//c.              Tris kartus iš eilės iškritus herbui;

let skaicius = "S", herbas = "H";
let metimuSkaicius = 0;
let moneta = rand(0, 1);
if (moneta === 0) console.log ("H");
else console.log("S");

while (moneta === 1) {
    moneta = rand(0, 1);
    if (metimuSkaicius === 0) console.log("H");
    else console.log("S");

document.write(`${metimuSkaicius} iškrito - ${skaicius}`);

}
document.write(`${metimuSkaicius} iškrito - ${herbas}`);

/*
//b
let he = (sk = 0);
while (true){
    let rand = random(0, 1);
    
    if (rand === 0) {
        he++;
    }
    else {
        sk++;
    }
    document.write( `Po ${metimas} iškrito -  herbas ${he} kartus, skaičius ${sk} kartus`);
}*/

//c

/* Užduotis stipruoliams:
Sukurti algoritmą, kuris sugeneruoja n=10 rombą iš “*” simbolių html dokumente. Kiekviena iš panaudotų žvaigždučių turi savo spalvą. (no google or ChatGPT)
*/