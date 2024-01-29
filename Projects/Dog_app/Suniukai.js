// list of all breeds: https://dog.ceo/api/breeds/list/all
// pictures: https://dog.ceo/api/breed/hound/images
//Elementų apsirašymas
//Selectas
const select = document.querySelector(".dog-breed");
//Button elemento gavimas:
const ButtonElement = document.querySelector("btn");
// Image elementas:
const ImageElement = document.getElementById("image");

fetch("https://dog.ceo/api/breeds/list/all")
    .then((atsakymas) => atsakymas.json()) 
    .then((atsakymas) => {console.log(atsakymas.message); 
    });

let dynamicHTML = "";

function showDogs() {
	let dynamicHTML = "";
	for (const breed of breeds) {
		dynamicHTML += `
        <h3>BREED LIST</h3>
        <div class="main">
            <div class="pick">
                <span class="code">Choose dog breed
                    <select class="dog-breed">
                        <option value="option">${atsakymas.message}</option>
                    </select>
                    picture
                </span>
                <button class="btn">Fetch!</button>
            </div>
            <div class="image"><img src=""/></div>
        </div> `;
	}
	document.querySelector("container").innerHTML = dynamicHTML;
}
showDogs();
