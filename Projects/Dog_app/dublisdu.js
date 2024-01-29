const container = document.querySelector(".container");

const imageElement = document.querySelector(".image img");

fetch("https://dog.ceo/api/breeds/list/all")
	.then((atsakymas) => atsakymas.json())
	.then((atsakymas) => {
		const breeds = atsakymas.message;
		selectBreed(breeds);
		console.log(breeds); //array
	});
const select = document.querySelector(".dog-breed");
function selectBreed(breeds) {
	for (const arrayName in breeds) {
		if (breeds[arrayName].length === 0) {
			const option = document.createElement("option");
			option.value = arrayName;
			option.textContent = arrayName;
			select.appendChild(option);
		} 
		else {
			for (let subBreed of breeds[arrayName]) {
				console.log("Ieinu");
				const option2 = document.createElement("option");
				option2.value = `${subBreed} ${arrayName}`;
				option2.textContent = `${subBreed} ${arrayName}`;
				select.appendChild(option2);
			}
		}

		// console.log(list); //sarašas
	}
}

const fetchButton = document.querySelector(".btn");
fetchButton.addEventListener("click", () => {
    const selectedBreed = document.querySelector(".dog-breed").value;
    if (selectedBreed !== '') {
        fetchDogImage(selectedBreed);
    }
});

function fetchSpecificDog(breed) {
	let dynamicUrl = `https://dog.ceo/api/breed/${breed
		.split(" ")
		.reverse()
		.join("/")}/images`;
	console.log(dynamicUrl);
	fetch(dynamicUrl)
		.then((thumbnail) => thumbnail.json())
		.then((thumbnail) => {
			showDogs(thumbnail);
			//document.write(`<img src="${thumbnail.message}"/>`);
			console.log(thumbnail.message); // vienos foto linkas (viršutine)
		});
}

//     let dynamicHTML = "";

function showDogs(thumbnail) {
	console.log(thumbnail);
	let dynamicHTML = "";
	for (const imageUrl of thumbnail.message) {
		dynamicHTML += `
       <img src="${imageUrl}" /> `;
	}
	document.querySelector(".image").innerHTML = dynamicHTML;
}
// showDogs();
select.addEventListener("change", () => {
	console.log("veikiu");
	const selectedBreed = select.value;
	if (selectedBreed !== "") {
		fetchSpecificDog(selectedBreed);
	}
	// document.write(`<img src="${selectedBreed}"/>`);
});

