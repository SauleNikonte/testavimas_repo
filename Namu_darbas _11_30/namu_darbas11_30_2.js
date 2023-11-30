unction rand(min,max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function categoryOneCalculation(skaicius)
let sk = rand(0, 99);
if (sk <= 10) {
    let rez = sk ** 2;
    console.log(`Skaicius: ${sk}\t Kategorija: 1, \t Rezultats: ${sk}`);
}
else if (sk < 20){
    console.log(`Skaicius: ${sk}\t Kategorija: 2, \t Rezultats: ${sk}`);
}
else if ( sk >= 20 && sk < 49 && sk % 2 === 0){
    let desimtys = +sk.toString()[0]; '2'
    let rez = sk - desimtys;
    console.log(`Skaicius: ${sk}\t Kategorija: 4, \t Rezultats: ${rez}`);
}
else if(sk >= 20 && sk < 49 && sk % 2 !== 0){
    let vienetai = sk % 10;
    let rez = (sk + vienetai )/ 2;
    console.log(`Skaicius: ${sk}\t Kategorija: 4, \t Rezultats: ${rez}`);
}
else if (sk >= 50 && sk % 3 === 0);{

   let a=rand(97,122),
   b=rand(97,122),
   c=rand(97,122), 
   d=rand(97,122);

    let stringas = String.fromCharCode(a) + String.fromCharCode(b) + String.fromCharCode(c) + String.fromCharCode(b);
    console.log(`Skaicius: ${sk}\t Kategorija: 5, \t Rezultats: ${stringas}`);
}
else (){
    console.log(`Skaicius: ${sk}\t nepriklauso nei vienai kategorijai`);
}
