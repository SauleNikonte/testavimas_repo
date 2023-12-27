// list of all breeds: https://dog.ceo/api/breeds/list/all



fetch("https://dog.ceo/api/breeds/image/random")
	.then((dogs) => dogs.json())
	.then((dogs) => {
		console.log(dogs);
	});
const dogs = JSON.parse(localStorage.getItem("dog"));
console.log(dogs);

let dynamicHTML = "";

//Elementų apsirašymas
//const optionsElement = document.getElementById("option");

//Button elemento gavimas:
const ButtonElement = document.querySelector("btn");

// Image elementas:
const ImageElement = document.getElementById("image");

//Options
for (let i = 0; i < options.length; i++) {
    const option = document.createElement("option");
    option.value = options[i].value;
    option.text = options[i].text;
    select.appendChild(option);
  }


function showDogs() {
	let dynamicHTML = "";
	for (const dog of dogs) {
		dynamicHTML += `
        <h3>BREED LIST</h3>
        <div class="main">
            <div class="pick">
                <span class="code">Choose dog breed
                    <select class="dog-breed">
                        <option value="option">${option}</option>
                    </select>
                    picture
                </span>
                <button class="btn">Fetch!</button>
            </div>
            <div class="image"><img src="${dog.message}"/></div>
        </div> `;
	}
	document.querySelector("container").innerHTML = dynamicHTML;
}
showDogs();
 