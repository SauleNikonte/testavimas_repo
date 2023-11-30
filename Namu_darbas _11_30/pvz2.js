let loginName = "Petras";
let password = '123321';

function login() {
    //HTML elemento priskyrimas kintamajam
    let prsisijungimoVardoIvestis = document.querySelector ("#prisijungimoVardas");
    let prsisijungimoSlaptazodzioIvestis = document.querySelector ("#prisijungimoSlaptazodis");

    //reikšmės iš input elementų
    let prisijungimoVardas = prsisijungimoVardoIvestis.value;
    let prisijungimoSlaptazodis = prsisijungimoSlaptazodzioIvestis.value;

    //patikrinimas
    if 
    ( loginName === prisijungimoVardas && password === prisijungimoSlaptazodis )
     { console.log ("Prisijungimas Sėkmingas");}
    else
    { console.log ("prisijungimo duomenys neteisingi")}

}
/* /[0-9]/ - tikrina ar stringe yra skaiciu
regex.test(text) - Tikrina ar tekstas atitinka regex validacija
/[a-z]/.test(text) - tikrina ar tekste egzistuoja mazosios raide */