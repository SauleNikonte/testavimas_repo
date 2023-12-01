
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let atsitiktinisSkaicius = rand(1, 20), spejimuSkaicius = 6;
function guessNumber() {
    let inputElement = document.querrySelector (`#guess`);
    let resultParagraph = document.querySelector("#rez");
    if (spejimuSkaicius === 0 ){
        resultParagraph.innerText = `Spėjimų skaičius baigėsi, bandykite dar kartą perkrovę puslapį`;

    }
    let inputValue = inputElement.value;
    if(inputValue > atsitiktinisSkaicius)
    resultParagraph.innerText = `Spėjimas buvo neteisingas, ieškomas skaičius yra didesnis`;
    else if (inputValue < atsitiktinisSkaicius)
    resultParagraph.innerText = `Spėjimas buvo neteisingas, ieškomas skaičius yra mažesnis`;
else { resultParagraph.innerText = `Teisingas spėjimas. Po ${ 6 - spejimuSkaicius} bandymų`}
}