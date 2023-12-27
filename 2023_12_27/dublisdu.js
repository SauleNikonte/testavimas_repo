const container = document.querySelector(".container");

const imageElement = document.querySelector(".image img");

fetch("https://dog.ceo/api/breeds/list/all")
    .then((atsakymas) => atsakymas.json())
    .then((atsakymas) => {
        const breeds = atsakymas.message;
        selectBreed(breeds);
        console.log(breeds); //array
    });

function selectBreed(breeds) {
    const select = document.querySelector(".dog-breed");

    for (const list in breeds) {
        const option = document.createElement("option");
        option.value = list;
        option.textContent = list;
        select.appendChild(option);

       console.log(list); //sarašas
    }
};

fetch("https://dog.ceo/api/breeds/image/random")
	.then((thumbnail) => thumbnail.json())
	.then((thumbnail) => {
        showDogs(thumbnail);
		//document.write(`<img src="${thumbnail.message}"/>`);
        console.log(thumbnail.message); // vienos foto linkas (viršutine)
	});

    let dynamicHTML = "";

function showDogs(thumbnail) {
	let dynamicHTML = "";
	for (const breed of breeds) {
		dynamicHTML += `
        <h3>BREED LIST</h3>
        <div class="main">
            <div class="pick">
                <span class="code">Choose dog breed
                    <select class="dog-breed">
                        <option value="option"></option>
                    </select>
                    picture
                </span>
                <button class="btn">Fetch!</button>
            </div>
            <div class="image">${thumbnail.message[0]}</div>
        </div> `;
	}
	document.querySelector("container").innerHTML = dynamicHTML;
}
showDogs();
   /* select.addEventListener("change", () => {
        const selectedBreed = select.value;
        if (selectedBreed !== '') {
            fetchDogImage(selectedBreed);
        }
        document.write(`<img src="${selectedBreed}"/>`);
    });
}
*/



/*function displayDogImage(imageUrl) {

    imageElement.src = imageUrl;
}

const fetchButton = document.querySelector(".btn");
fetchButton.addEventListener("click", () => {
    const selectedBreed = document.querySelector(".dog-breed").value;
    if (selectedBreed !== '') {
        fetchDogImage(selectedBreed);
    }
});
*/