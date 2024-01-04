console.log("veikiu");

//1. Selectu užpildymas duomenimis DONE
//2. Gauname visus gerimus is API DONE
//3. Juos atvaizduojame DONE
//4. Atlikti filtracijas kokteiliams DONE
//5. Paieška pagal pavadinimą DONE
//6. Modalinio lango sukurimas BEVEIK
//7. Modalinio lango uždarymas DONE (mygtuku, ne fonu) po šiandien neberodo
//8. Atsitiktinio kokteilio gavimas su mygtuku "Man sekasi" DONE

const cocktailNameFilterElement = document.querySelector("#cocktail-name-filter"),
categorySelectElement = document.querySelector("#category-select"),
glassSelectElement = document.querySelector("#glass-type-select"),
ingredientSelectElement = document.querySelector("#ingredient-select"),
searchButtontElement = document.querySelector("#search"),
luckyButtonElement = document.querySelector("#im-lucky"),
dynamicDrinksElement = document.querySelector(".drinks"),
dynamicModalBackgroundElement = document.querySelector(".modal-background"),
dynamicModalElement = document.querySelector(".modal"),
randomDrinkElement = document.querySelector(".random-drink"),
randomBackground = document.querySelector(".random-background"),
body = document.querySelector('body');

const selectValues = {}, drinksArray = [];
async function fillSelectElements(){
//const startTime = new Date();
	const allURLS = [
	"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
	"https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
	"https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
	];

	const allPromises = allURLS.map((url) => fetch(url).then((response) => response.json()));
	const allValues = await Promise.all(allPromises);

const [allCategories, allGlasses, allIngredients] = allValues;
selectValues.categories = allCategories.drinks.map((categoryObj) => categoryObj.strCategory);
selectValues.glasses = allGlasses.drinks.map(glass => glass.strGlass);
selectValues.ingredients = allIngredients.drinks.map(ingredient => ingredient.strIngredient1);

console.log(selectValues); //objektas su Arrays su stringais categories, glasses, ingredients
fillCategorySelect(allCategories.drinks, categorySelectElement, "strCategory");
fillCategorySelect(allGlasses.drinks, glassSelectElement, "strGlass");
fillCategorySelect(allIngredients.drinks, ingredientSelectElement, "strIngredient1");

// await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
// .then((response) => response.json())
// .then((response) => { fillCategorySelect(response.drinks, categorySelectElement, "strCategory");
// categoriesArray.push(...response.drinks.map((value) => value.strCategory)
// );
// })
// .catch((error) => console.log(error));

// // glasses 32
// await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
// .then((response) => response.json())
// .then((response) => fillCategorySelect(response.drinks, glassSelectElement, "strGlass"));

// // ingredients 100
// await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
// .then((response) => response.json())
// .then((response) => fillCategorySelect(response.drinks, ingredientSelectElement, "strIngredient1"));

//---request time---//
// const endDate = new Date();
// const difference = endDate.getTime() - startTime.getTime();
// console.log(difference);
}

function fillCategorySelect(properties, selectElement, strFieldName) {
	let dynamicHTML = "";
for(const property of properties){
	dynamicHTML += `<option>${property[strFieldName]}</option>`;
//categoriesArray.push(property.strCategory);
}
selectElement.innerHTML += dynamicHTML;
}

async function getAllDrinks() {
	const categoriesDrinksUrl = []
	for(const category of selectValues.categories) {
	let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`;
	categoriesDrinksUrl.push(dynamicUrl);
	// const response = await fetch(dynamicUrl);
	// const answerFromServer = await response.json();
	// for(const drink of answerFromServer.drinks){
	// 	drinksArray.push(drink);
	// }
	//drinksArray.push(answerFromServer);
	//console.log(answerFromServer);
	}
	const allPromises = categoriesDrinksUrl.map((url)=> fetch(url).then(response => response.json())
	);
	const allValues = await Promise.all(allPromises);
allValues.forEach((value)=> drinksArray.push(...value.drinks));
}
function generateDrinksHTML(drinks){
	let dynamicHTML = "";

	for(let drink of drinks){
		dynamicHTML += `<div class="drink" onclick="openModal()" key="${drink.idDrink}">
        <img src="${drink.strDrinkThumb}" alt=""/>
        <h2 class="drink-title">${drink.strDrink}</h2>
    </div>`;
	}
	dynamicDrinksElement.innerHTML = dynamicHTML;
}

//const{ alcoholic, category, drink, drinkThumb, glass, ingredient 123, } = obj()
//-------------MODAL------------//
//Lookup full cocktail details by id
//https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}


			function openModal() {
				dynamicModalBackgroundElement.style.visibility = "visible";
				body.style.overflow = 'hidden';
			}
			function closeModal() {
				dynamicModalBackgroundElement.style.visibility = "hidden";
				body.style.overflow = 'auto';
			}
		dynamicDrinksElement.addEventListener("click", () => {
		fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
			.then((drink) => drink.json())
			.then((array) => {
				const dynamicDrink = array.drinks;
				generateModalHTML(dynamicDrink);
				openModal();
			})
			.catch((error) => {console.error('Error fetching drink:', error);
			});
		});
		
			function generateModalHTML(randomDrink){
				dynamicHTML = "";
				for (let drink of randomDrink){
					dynamicHTML +=`<div class="buttons">
					<img src="${drink.strDrinkThumb}" alt="${drink.strDrink}"/>
					<h3>${drink.strDrink}</h3>
					<table class="table">
						<tr>
							<td class="b">Category:</td>
							<td class="p">${drink.strCategory}</td>
						</tr>
						<tr>
							<td class="b">Alcohol:</td>
							<td class="p">${drink.strAlcoholic}</td>
						</tr>
						<tr>
							<td class="b">Glass:</td>
							<td class="p">${drink.strGlass}</td>
						</tr>
						<tr>
							<td class="b">Ingredients:</td>
							<td id="p3">
								<tr>
									<td class="p2">${drink.strIngredient1}</td>
									<td  class="p2">${drink.strMeasure1}</td>
								</tr>
								<tr>
									<td  class="p2">${drink.strIngredient2}</td>
									<td  class="p2">${drink.strMeasure2}</td>
								</tr>
								<tr>
									<td class="p2">${drink.strIngredient3}</td>
									<td  class="p2">${drink.strMeasure3}</td>
								</tr>
								<tr>
									<td class="p2">${drink.strIngredient4}</td>
									<td  class="p2">${drink.strMeasure4}</td>
								</tr>
								<tr>
									<td  class="p2">${drink.strIngredient5}</td>
									<td  class="p2">${drink.strMeasure5}</td>
								</tr>
								<tr>
									<td class="p2">${drink.strIngredient6}</td>
									<td  class="p2">${drink.strMeasurt6}</td>
								</tr>
								<tr>
									<td class="p2">${drink.strIngredient7}</td>
									<td  class="p2">${drink.strMeasure7}</td>
								</tr>
								<tr>
									<td  class="p2">${drink.strIngredient8}</td>
									<td  class="p2">${drink.strMeasure8}</td>
								</tr>
								<tr>
									<td class="p2">${drink.strIngredient9}</td>
									<td  class="p2">${drink.strMeasure9}</td>
								</tr>
								<tr>
									<td class="p2">${drink.strIngredient10}</td>
									<td  class="p2">${drink.strMeasure10}</td>
								</tr>
								<tr>
									<td  class="p2">${drink.strIngredient11}</td>
									<td  class="p2">${drink.strMeasure11}</td>
								</tr>
								<tr>
									<td class="p2">${drink.strIngredient12}</td>
									<td  class="p2">${drink.strMeasurt12}</td>
								</tr>
								<tr>
									<td class="p2">${drink.strIngredient13}</td>
									<td  class="p2">${drink.strMeasure13}</td>
								</tr>
								<tr>
									<td  class="p2">${drink.strIngredient14}</td>
									<td  class="p2">${drink.strMeasure14}</td>
								</tr>
								<tr>
									<td class="p2">${drink.strIngredient15}</td>
									<td  class="p2">${drink.strMeasurt15}</td>
								</tr>
							</td>
						</tr>
						<tr>
							<td class="b">Recipe:</td>
							<td class="p">${drink.strInstructions}</td>
						</tr>
			</table>
					<hr/>
					<button onclick="closeModal()">x</button>
				</div>`
				}
				document.querySelector(".modal").innerHTML = dynamicHTML;
			};

//------------------filtracija------------//
async function filter(){
	const searchValue = cocktailNameFilterElement.value,
	category = categorySelectElement.value,
	glass = glassSelectElement.value,
	ingredient = ingredientSelectElement.value;
	let filteredArray = [...drinksArray];

if(searchValue){
		filteredArray = filteredArray.filter((drinkObj) => drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase())
		);
	}
if (category !== "Choose Category"){
	const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`);
	const drinksOfCategory = await promise.json();
	filteredArray = filteredArray.filter((drink) => 
	drinksOfCategory.drinks.some((drinkOfCategory) => drink.idDrink === drinkOfCategory.idDrink));
	}
if (glass !== "Choose Glass Type"){
	const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replaceAll(" ", "_")}`);
	const drinksOfGlass = await promise.json();
	filteredArray = filteredArray.filter((drink) => drinksOfGlass.drinks.some((drinkOfGlass) => drink.idDrink === drinkOfGlass.idDrink));
}
if (ingredient !== "Choose Ingredient"){
	const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.replaceAll(" ", "_")}`);
	const drinksOfIngredient = await promise.json();
	filteredArray = filteredArray.filter((drink) => 
	drinksOfIngredient.drinks.some((drinkOfIngredient) => drink.idDrink === drinkOfIngredient.idDrink));
	}

console.log(filteredArray);
generateDrinksHTML(filteredArray);
cocktailNameFilterElement.value = "";
};

async function initialization(){
	await fillSelectElements();
	await getAllDrinks();
	generateDrinksHTML(drinksArray);
	searchButtontElement.addEventListener('click', filter);
	console.log(drinksArray); //visi atvaizduojami gerimai  TIK strDrink, strDrinkThumb, idDrink
	generateModalHTML(drinksArray);
	//generateRandomDrinkHTML(randomDrink); //random drink is not defined
	}
	
	initialization();
	
//-------------------RANDOM-Done---------------------//

	function openRandomModal() {
		randomBackground.style.visibility = "visible";
		body.style.overflow = 'hidden';
	}
	function closeRandomModal() {
		randomBackground.style.visibility = "hidden";
		body.style.overflow = 'auto';
	}
luckyButtonElement.addEventListener("click", () => {
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
	.then((drink) => drink.json())
	.then((array) => {
		const randomDrink = array.drinks;
		generateRandomDrinkHTML(randomDrink);
		openRandomModal();
	})
});

	function generateRandomDrinkHTML(randomDrink){
		dynamicHTML = "";
		for (let drink of randomDrink){
			dynamicHTML +=`<div class="buttons">
			<img src="${drink.strDrinkThumb}" alt="${drink.strDrink}"/>
			<h3>${drink.strDrink}</h3>
			<table class="table">
				<tr>
					<td class="b">Category:</td>
					<td class="p">${drink.strCategory}</td>
				</tr>
				<tr>
					<td class="b">Alcohol:</td>
					<td class="p">${drink.strAlcoholic}</td>
				</tr>
				<tr>
					<td class="b">Glass:</td>
					<td class="p">${drink.strGlass}</td>
				</tr>
				<tr>
					<td class="b">Ingredients:</td>
					<td class="p3">
						<tr>
							<td class="b_i">${drink.strIngredient1}</td>
							<td  class="p2">${drink.strMeasure1}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient2}</td>
							<td  class="p2">${drink.strMeasure2}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient3}</td>
							<td  class="p2">${drink.strMeasure3}</td>
						</tr>
						<tr>
							
							<td class="b_i">${drink.strIngredient4}</td>
							<td  class="p2">${drink.strMeasure4}</td>
						</tr>
						<tr>
							
							<td class="b_i">${drink.strIngredient5}</td>
							<td  class="p2">${drink.strMeasure5}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient6}</td>
							<td  class="p2">${drink.strMeasurt6}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient7}</td>
							<td  class="p2">${drink.strMeasure7}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient8}</td>
							<td  class="p2">${drink.strMeasure8}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient9}</td>
							<td  class="p2">${drink.strMeasure9}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient10}</td>
							<td  class="p2">${drink.strMeasure10}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient11}</td>
							<td  class="p2">${drink.strMeasure11}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient12}</td>
							<td  class="p2">${drink.strMeasurt12}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient13}</td>
							<td  class="p2">${drink.strMeasure13}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient14}</td>
							<td  class="p2">${drink.strMeasure14}</td>
						</tr>
						<tr>
							<td class="b_i">${drink.strIngredient15}</td>
							<td  class="p2">${drink.strMeasurt15}</td>
						</tr>
					</td>
				</tr>
				<tr>
					<td class="b">Recipe:</td>
					<td class="p">${drink.strInstructions}</td>
				</tr>
	</table>
			<hr/>
			<button onclick="closeRandomModal()">x</button>
		</div>`
		}
	document.querySelector('.random-drinks').innerHTML = dynamicHTML; //kodel nesuveike randomDrinkElement.innerHTML = dynamicHTML
	};

	