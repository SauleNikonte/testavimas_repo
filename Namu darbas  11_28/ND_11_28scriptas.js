let vardass = "Hopkins";
let pavarde = "Philip Anthony";
//console.log(vardass.length);
//console.log(pavarde.length);
//console.log(vardass.length > pavarde.length);
if(vardass.length > pavarde.length){
    console.log (pavarde)
} else {console.log (vardass)}

let vardas = "Saule",
pavardee = "Nikonte",
gimimo_metai = 1987,
siu_metu_metai = 2023,
amzius = siu_metu_metai - gimimo_metai;
console.log(`Aš esu ${vardas} ${pavardee}. Man yra ${amzius} metai.`);

let name = "Saule";
let surname = "Nikonte ";
let inicialai = name[0] + surname[0];
console.log(`Jūsų inicialai yra ${inicialai}.`);

let aktoriaus_vardas = "Philip Anthony";
let aktoriaus_pavarde = "Hopkins";
let trumpinys = aktoriaus_vardas.slice(-3) + aktoriaus_pavarde.slice(-3);
console.log(trumpinys);
//arba aktoriaus_vardas[4 5 6] + aktoriaus_pavarde[4 5 6]



 let data = new Date (' 2023-11-28 ');
 let menuo = data.getMonth();
 console.log(menuo);

 let menesis = ["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"];
 let datos = new Date (' 2023-11-28 ');
 let pavadinimas = menesis[datos.getMonth()];
 console.log(pavadinimas);

 

