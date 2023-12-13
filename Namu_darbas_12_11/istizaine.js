function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//1 Nupieškite kvadratą iš “*”, kurio kraštines sudaro n=10 “*” simbolių. Pasinaudokite ciklais. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.
/*
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

*/
let n = 10;
for(let i = 0; i < n; i++){
    for(let ii = 0; ii < n; ii++){
        if(i === ii ||  i + ii + 1 === n)
        document.write('<span style="color: red">*</span>')
    else document.write('<span>*</span>')
    }
    document.write("<br>");
}

