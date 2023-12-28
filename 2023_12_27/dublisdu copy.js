// kad rodytų 1 foto, o ne milijoną tos veislės
// foto lygiavimas

const container = document.querySelector(".container");
const imageElement = document.querySelector(".image");

fetch("https://dog.ceo/api/breeds/list/all")
	.then((atsakymas) => atsakymas.json())
	.then((atsakymas) => {
		const breeds = atsakymas.message;
		selectBreed(breeds);
		//console.log(breeds); //array
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
				const option2 = document.createElement("option");
				option2.value = `${subBreed} ${arrayName}`;
				option2.textContent = `${subBreed} ${arrayName}`;
				select.appendChild(option2);
			}
		}
	}
}
const fetchButton = document.querySelector(".btn");
fetchButton.addEventListener("click", () => {
   
	const selectedBreed = select.value;
	if (selectedBreed !== "") {
		fetchSpecificDog(selectedBreed);
	}
});

function fetchSpecificDog(breed) {
	let dynamicUrl = `https://dog.ceo/api/breed/${breed
		.split(" ")
		.reverse()
		.join("/")}/images`;
	//console.log(dynamicUrl);//linkas i breed img
	fetch(dynamicUrl)
		.then((thumbnail) => thumbnail.json())
		.then((thumbnail) => {
			showDog(thumbnail);
		});
}

function showDog(thumbnail) {
	// console.log(thumbnail); breed nuotrauku linku array

	let dynamicHTML = "";
	if (thumbnail.message.length > 0) {
        const imageUrl = thumbnail.message[0]; {
		dynamicHTML += `
       <img src="${imageUrl}" /> `;
	}
	document.querySelector(".image").innerHTML = dynamicHTML;
}
};

// if (thumbnail.message.length > 0) {
// 	const imageUrl = thumbnail.message[0]; // Selecting the first image URL
// 	const imageElement = document.createElement("img");
// 	imageElement.src = imageUrl;
// 	document.querySelector(".image").innerHTML = ""; // Clear previous images
// 	document.querySelector(".image").appendChild(imageElement);
// }
