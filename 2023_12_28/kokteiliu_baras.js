console.log("veikiu");

// + selectu užpildymas duomenimis
// + gaunam gerimus is API
// + atvaizdavimas
// filtracija
// paieska
// modalinio lango sukurimas ir uždarynas
// man sekasi atsitiktinis 


const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
categorySelectElement = document.querySelector("#category-select"),
glassSelectElement = document.querySelector("#glass-type-select"),
ingredientSelectElement = document.querySelector("#ingredient-select"),
searchButtontElement = document.querySelector("#search"),
luckyButtontElement = document.querySelector("#im-lucky"),
dynamicDrinksElement = document.querySelector(".drinks"),
dynamicModalElement = document.querySelector(".modal");

const categoriesArray = [], drinksArray = [];

async function fillSelectElements(){
await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
.then((response) => response.json())
.then((response) => { fillCategorySelect(response.drinks, categorySelectElement, "strCategory");
categoriesArray.push(...response.drinks.map((value) => value.strCategory)
);
})
.catch((error) => console.log(error));

// glasses 32
await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
.then((response) => response.json())
.then((response) => fillCategorySelect(response.drinks, glassSelectElement, "strGlass"));

// ingredients 100
await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
.then((response) => response.json())
.then((response) => fillCategorySelect(response.drinks, ingredientSelectElement, "strIngredient1"));
}

function fillCategorySelect(properties, selectElement, strFieldName) {
	let dynamicHTML = "";
for(const property of properties){
	dynamicHTML += `<option>${property[strFieldName]}</option>`;

//categoriesArray.push(property.strCategory);
}
selectElement.innerHTML = dynamicHTML;
//console.log(CategoriesArray);
}

async function getAllDrinks() {
	// https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
	for(const category of categoriesArray) {
	let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`;
	const response = await fetch(dynamicUrl);
	const answerFromServer = await response.json();
	for(const drink of answerFromServer.drinks){
		drinksArray.push(drink);
	}
	//drinksArray.push(answerFromServer);
	//console.log(answerFromServer);
	}
}

function generateDrinksHTML(drinks){
	let dynamicHTML = "";

	for(let drink of drinks){
		dynamicHTML += `<div class="drink" onclick="openModal()">
        <img src="${drink.strDrinkThumb}" alt=""/>
        <h2 class="drink-title">${drink.strDrink}</h2>
    </div>`;
	}
	dynamicDrinksElement.innerHTML = dynamicHTML;
}

//modal
const modalBackground = document.querySelector(".modal-background");
			const modal = document.querySelector(".modal");
			function openModal() {
				modalBackground.style.visibility = "visible";
			}
			function closeModal() {
				modalBackground.style.visibility = "hidden";
			}


// jei dynamicDrinksElement = drink.strDrink tai modal blablabal		
function generateModalHTML(drinks){
	dynamicHTML = "";
	for (let drink of drinks){
		dynamicHTML +=`<div class="buttons">
		<img src="${drink.strDrinkThumb}" alt=""/>
		<h3>${drink.strDrink}</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			Consectetur quae neque praesentium quidem non repellat aliquid,
			nostrum vitae dolor repellendus in voluptates voluptatum architecto
		</p>
		<hr />
		<button onclick="closeModal()">x</button>
	</div>`
	}
	dynamicModalElement.innerHTML = dynamicHTML
}

async function initialization(){
	await fillSelectElements();
	
	await fillSelectElements();
	console.log(categoriesArray);
	await getAllDrinks();
	generateDrinksHTML(drinksArray);
	console.log(drinksArray);
	generateModalHTML(drinksArray);
		// 2. dinaminis gerimu atvaizdavimas
	}
	initialization();