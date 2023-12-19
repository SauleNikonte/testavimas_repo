//neuploadina local storage lenteles uzkrovus naujai.
// vel prisideda su tusciais langeliais 
// tokio iraso nera nepranyksta
// update table content

const people = [];
let currentNumeration = 1;

// Save people array to local storage
//function saveToLocalStorage() {
  //  localStorage.setItem('people', JSON.stringify(people));
//}

// Load people array from local storage
/*
function loadFromLocalStorage(people) {
    const storedPeople = localStorage.getItem('people');
    if (storedPeople) {
        people = JSON.parse(storedPeople);
        generateTableContent(people);
    }
}
*/
const addButtonElement = document.querySelector("#add-button");

addButtonElement.addEventListener("click", () => {
const person = {};
person.firstName = document.getElementById("firstNameInput").value;
person.lastName = document.getElementById("lastNameInput").value;
person.age = document.getElementById("ageInput").value;
person.nationality = document.getElementById("nationalityInput").value;
person.number = currentNumeration;

currentNumeration++;

console.log(person);


people.push(person);
generateTableContent(people);
//saveToLocalStorage();
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

    removePerson(personNumberToRemove);
    ////saveToLocalStorage();
});

function removePerson(personNumber) {
    const indexToRemove = people.findIndex(person => person.number === personNumber);

    if (indexToRemove !== -1) {
        people.splice(indexToRemove, 1);
        generateTableContent(people);
        document.getElementById('numberInput').value = '';
    } else {
        document.getElementById('numberInput').value = '';
        document.getElementById('error').innerHTML = `No such number`;
        
    }
   
};
addButtonElement.addEventListener("click", () => {
    const firstName = document.getElementById("firstNameInput").value;
    const lastName = document.getElementById("lastNameInput").value;
    const age = document.getElementById("ageInput").value;
    const nationality = document.getElementById("nationalityInput").value;

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
        //saveToLocalStorage();

        document.getElementById('firstNameInput').value = '';
        document.getElementById('lastNameInput').value = '';
        document.getElementById('ageInput').value = '';
        document.getElementById('nationalityInput').value = '';
    } else {
        document.getElementById('terror').innerHTML = `Please fill all the fields`;
    }
});

//window.addEventListener('load', () => {
   // loadFromLocalStorage();
//});

// Pirma paima iš input -> saugo storage -> paima iš storage -> įkelia į lentelę.
