const people = [];
let currentNumeration = 1;

const buttonElement = document.querySelector("#add-button");

buttonElement.addEventListener("click", () => {
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
        
    }
}
/*buttonElement.addEventListener("click", () => {
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

        document.getElementById('firstNameInput').value = '';
        document.getElementById('lastNameInput').value = '';
        document.getElementById('ageInput').value = '';
        document.getElementById('nationalityInput').value = '';
    } else {
        alert('Please fill in all fields before adding a person.');
    }
});
*/