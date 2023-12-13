const people = [];
let currentNumeration = 1;

const buttonElement = document.querySelector("#add-button");

buttonElement.addEventListener("click", () => {
    const firstName = document.getElementById("firstNameInput").value;
    const lastName = document.getElementById("lastNameInput").value;
    const age = document.getElementById("ageInput").value;
    const nationality = document.getElementById("nationalityInput").value;
    document.getElementById('terror').innerHTML = '';


    /* destytojo pvz : 
    
    if(!person.firstName || !person.lastName || !person.age || !person.nationality)
    console.log("Laukas tuščias");
return;

patikrinti ar Vardas/ Pavardė tik iš raidžių. function validateFirstName(firstName){
    true/false
    1.ar egzistuoja.
    2. ar turi skaičių, jei taip grazinti false
    3. ar turi spec simbolių.
    //validavimas su regex
    /[a-z][A-Z]/.test()
}
*/
/*
function validateName(name){
    let isValid = true;
    if(!name){
        isValid = false;
    }
    if(!/[a-z][A-Z]/.test(name)){
        isValid = false;
    }
    return isValid;
}
if (
    !validateName(person.firstName) ||
)
*/
    if (firstName && lastName && age && nationality) {
        const person = {};
        person.firstName = firstName;
        person.lastName = lastName;
        person.age = age;
        person.nationality = nationality;
        person.number = currentNumeration;

        currentNumeration++;

        people.push(person);
        generateTableContent(people);

        document.getElementById('firstNameInput').value = '';
        document.getElementById('lastNameInput').value = '';
        document.getElementById('ageInput').value = '';
        document.getElementById('nationalityInput').value = '';
    } else {
        document.getElementById('terror').innerHTML =('užpildykite visus laukelius');
    }
});

function generateTableContent(people) {
    let dynamicHTML = ``;
    
for (let person of people){
    dynamicHTML += `<tr>
    <th>${person.number}</th>
    <th>${person.firstName}</th>
    <th>${person.lastName}</th>
    <th>${person.age}</th>
    <th>${person.nationality}</th>
</tr>`;
}
const tbody = document.querySelector("table tbody");
tbody.innerHTML = dynamicHTML;

document.getElementById('firstNameInput').value = '';
document.getElementById('lastNameInput').value = '';
document.getElementById('ageInput').value = '';
document.getElementById('nationalityInput').value = '';
}
const numberInput = document.getElementById("numberInput");
const removeButton = document.querySelector("#remove-button");

removeButton.addEventListener("click", () => {
    const personNumberToRemove = +numberInput.value;
    document.getElementById('error').innerHTML = '';
    removePerson(personNumberToRemove);
});

function removePerson(personNumber) {
    const indexToRemove = people.findIndex(person => person.number === personNumber);

    if (indexToRemove !== -1) {
        people.splice(indexToRemove, 1);
        generateTableContent(people);
        document.getElementById('numberInput').value = '';
    } else {
        document.getElementById('numberInput').value = '';
        document.getElementById('error').innerHTML = `Tokio įrašo nėra`;
        return;
    }
}
