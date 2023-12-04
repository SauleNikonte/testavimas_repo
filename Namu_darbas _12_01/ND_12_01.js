//Sukuriame HTML elementus
let input1 = document.createElement("input"); // pirmas įvesties laukas
let input2 = document.createElement("input"); // antras įvesties laukas
let select = document.createElement("select"); // pasirinkimo elementas
let button = document.createElement("button"); // mygtukas
let output = document.createElement("p"); // išvesties elementas

// Nustatome HTML elementų atributus ir turinį
input1.type = "number"; // nurodome, kad įvestis turi būti skaičius
input2.type = "number"; // nurodome, kad įvestis turi būti skaičius
button.textContent = "Apskaičiuoti"; // nurodome, kas bus parašyta ant mygtuko
output.textContent = "Rezultatas: "; // nurodome, kas bus parašyta prieš rezultatą */

// Sukuriame masyvą su galimais matematiniais veiksmais
let operations = ["+", "-", "*", "/", "xy"];

// Sukuriame ciklą, kuris prideda kiekvieną veiksmą prie <select> elemento kaip <option> elementą
for (let i = 0; i < operations.length; i++) {
  let option = document.createElement("option"); // sukuriamas <option> elementas
  option.value = operations[i]; // nustatomas <option> elemento reikšmė
  option.textContent = operations[i]; // nustatomas <option> elemento turinys
  select.appendChild(option); // pridedamas <option> elementas prie <select> elemento
}

// Sukuriame funkciją, kuri apskaičiuoja rezultatą pagal vartotojo įvestį ir pasirinkimą
function calculate() {
  // Nuskaitome vartotojo įvestus skaičius ir pasirinktą veiksmą
  let num1 = Number(input1.value); // pirmas skaičius
  let num2 = Number(input2.value); // antras skaičius
  let operation = select.value; // pasirinktas veiksmas

  // Deklaruojame kintamąjį rezultatui saugoti
  let result;

  // Tikriname, ar vartotojas įvedė abu skaičius ir pasirinko veiksmą
  if (isNaN(num1) || isNaN(num2) || operation == "") {
    // Jei ne, pranešame apie klaidą
    output.textContent = "Rezultatas: Prašome įvesti abu skaičius ir pasirinkti veiksmą";
    return; // baigiame funkcijos vykdymą
  }

  // Atliekame matematinį veiksmą pagal pasirinkimą ir priskiriame rezultatą kintamajam
  switch (operation) {
    case "+": // sudėtis
      result = num1 + num2;
      break;
    case "-": // atimtis
      result = num1 - num2;
      break;
    case "*": // daugyba
      result = num1 * num2;
      break;
    case "/": // dalyba
      // Tikriname, ar antrasis skaičius nėra lygus nuliui
      if (num2 == 0) {
        // Jei taip, pranešame apie klaidą
        output.textContent = "Rezultatas: Negalima dalinti iš nulio";
        return; // baigiame funkcijos vykdymą
      }
      result = num1 / num2;
      break;
    case "xy": // kėlimas laipsniu
      result = Math.pow(num1, num2);
      break;
    default: // jei pasirinktas nežinomas veiksmas
      // Pranešame apie klaidą
      output.textContent = "Rezultatas: Nežinomas veiksmas";
      return; // baigiame funkcijos vykdymą
  }

  // Išvedame rezultatą vartotojui
  output.textContent = "Rezultatas: " + result;
}

// Priskiriame funkciją calculate() mygtuko paspaudimo įvykiui
button.addEventListener("click", calculate);

// Pridedame HTML elementus prie dokumento
document.body.appendChild(input1); // pirmas įvesties laukas
document.body.appendChild(select); // pasirinkimo elementas
document.body.appendChild(input2); // antras įvesties laukas
document.body.appendChild(button); // mygtukas
document.body.appendChild(output); // išvesties elementas