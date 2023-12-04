function calculate() {
      let num1 = parseFloat(document.querySelector("#num1").value);
      let num2 = parseFloat(document.querySelector("#num2").value);
      
      let operation = document.querySelector("#operation").value;
      let rez = document.querySelector("#rez");
  
      console.log(num1, num2, operation);
  if(isNaN(num1) || isNaN(num2))
  {
  rez.innerText = "Operacija negalima, trūksta skaičiaus";
  return;
  }
  
  if(operation === "+")rez.innerText = num1 + num2;
  else if(operation === "-")rez.innerText = num1 - num2; 
  else if(operation === "*")rez.innerText = num1 * num2;
  else if(operation === "/" && num2 !== 0)rez.innerText = num1 / num2;
  else if(operation === "**"){
  if (num1 === 0 && num2 <= 0)
  rez.innerText = "Abu skaičiai yra nuliai arba antras skaičius yra negatyvus, todėl kelti laipsniu negalime";
  else {rez.innerText = num1 ** num2;}
      }
  }
