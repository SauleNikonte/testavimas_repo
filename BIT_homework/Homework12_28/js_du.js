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
dynamicModalElement = document.querySelector(".modal1"),
randomDrinkElement = document.querySelector(".random-drink"),
randomBackground = document.querySelector(".random-background"),
letterSelectElement = document.querySelector("#abc-select"),
body = document.querySelector('body');

const selectValues = {}, drinksArray = [];
async function fillSelectElements(){
//const startTime = new Date();
	const allURLS = [
	"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
	"https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
	"https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
	//"https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a",
	];

	const allPromises = allURLS.map((url) => fetch(url).then((response) => response.json()));
	const allValues = await Promise.all(allPromises);

const [allCategories, allGlasses, allIngredients, allLetters] = allValues;
selectValues.categories = allCategories.drinks.map((categoryObj) => categoryObj.strCategory);
selectValues.glasses = allGlasses.drinks.map(glass => glass.strGlass);
selectValues.ingredients = allIngredients.drinks.map(ingredient => ingredient.strIngredient1);
//selectValues.letters = allLetters.drinks.map(letter => letter.strDrink);

console.log(selectValues); //objektas su Arrays su stringais categories, glasses, ingredients
fillCategorySelect(allCategories.drinks, categorySelectElement, "strCategory");
fillCategorySelect(allGlasses.drinks, glassSelectElement, "strGlass");
fillCategorySelect(allIngredients.drinks, ingredientSelectElement, "strIngredient1");
// ABC selecta užpildyti lotyniškomis raidėmis, tada pagal raide išmest rezultatus
//fillCategorySelect(allLetters.drinks, letterSelectElement, "strDrink");
}
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
//}

function fillCategorySelect(properties, selectElement, strFieldName) {
	let dynamicHTML = "";
for(const property of properties){
	dynamicHTML += `<option>${property[strFieldName]}</option>`;
   // console.log(property); // OBJ -> strCategory, strGlass, strIngredient1
}
selectElement.innerHTML += dynamicHTML;
};

async function getAllDrinks() {
	const categoriesDrinksUrl = []
	for(const category of selectValues.categories) {
	let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`;
	categoriesDrinksUrl.push(dynamicUrl);
    //console.log(categoriesDrinksUrl); //kiekvieno gėrimo www.
	}
const allPromises = categoriesDrinksUrl.map((url)=> fetch(url).then(response => response.json()));
const allValues = await Promise.all(allPromises);
allValues.forEach((value)=> drinksArray.push(...value.drinks));
//console.log(allValues); // visų gėrimų strDrink, strDrikThumb, idDrink
}
function generateDrinksHTML(allValues){
	let dynamicHTML = "";
    
	for(let drink of allValues){
		dynamicHTML += `<div class="drink" onclick="openModal(${drink.idDrink})" >
        <img src="${drink.strDrinkThumb}" alt=""/>
        <h2 class="drink-title">${drink.strDrink}</h2>
    </div>`;
	}
	dynamicDrinksElement.innerHTML = dynamicHTML;
}

//-------------MODAL------------//
function getIngredientsArray(drink) {
    const ingredientArray = [];
    for ( let currentIngredient = 1; currentIngredient < 16; currentIngredient++){
if (drink[`strIngredient${currentIngredient}`])
{ingredientArray.push(drink[`strIngredient${currentIngredient}`])}
    }
    return ingredientArray;
}
function getMeasureArray(drink) {
    const measureArray = [];
    for ( let currentMeasure = 1; currentMeasure < 16; currentMeasure++){
if (drink[`strIngredient${currentMeasure}`])
{measureArray.push(drink[`strMeasure${currentMeasure}`])}
//console.log(measureArray)
    }
    return measureArray;   
}
async function openModal(id) {
	dynamicModalBackgroundElement.style.visibility = "visible";
	body.style.overflow = 'hidden';
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
	.then((drink) => drink.json())
	.then((array) => {
		const dynamicDrink = array.drinks;
       // console.log(dynamicDrink); // visi gėrimo duomenys
		generateModalHTML(dynamicDrink);
	});
    console.log(id); // violetinis skaitmuo
}
//

function closeModal() {
	dynamicModalBackgroundElement.style.visibility = "hidden";
	body.style.overflow = 'auto';
}
    function generateModalHTML(randomDrink){
        dynamicHTML = "";
        //console.log(randomDrink) // drink visa info
        for (let drink of randomDrink){
            const ingredientArray = getIngredientsArray(drink);
            const measureArray = getMeasureArray(drink);
            dynamicHTML +=`<div class="buttons">
			<img src="${drink.strDrinkThumb}" alt="${drink.strDrink}"/>
			<h3>${drink.strDrink}</h3>
				<div class="row">
					<div class="b">Category:</div>
					<div class="p">${drink.strCategory}</div>
				</div>
				<div class="row">
					<div class="b">Alcohol:</div>
					<div class="p">${drink.strAlcoholic}</div>
				</div>
				<div class="row">
					<div class="b">Glass:</div>
					<div class="p">${drink.strGlass}</div>
				</div>
				<div class="row">
					<div class="b">Ingredients:</div>
                    <div class="p"></div>
                </div>
                <div class="row1">
                ` 
                let ingredientsHtml = "";
                for (let index in ingredientArray){
                    ingredientsHtml += `
                    <div class="row">
                        <div class= "col1">${ingredientArray[index]}</div>
                        <div class= "col">${measureArray[index]}</div>
                    </div>
                    `
                }
                dynamicHTML += ingredientsHtml + 
            `
                 </div>
            <div class="row">
					<div class="b">Recipe:</div>
					<div class="p1">${drink.strInstructions}</div>
				</div>
			<hr/>
			<button onclick="closeModal()">x</button>
		</div>`
        }
        document.querySelector(".modal1").innerHTML = dynamicHTML;
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
generateDrinksHTML(filteredArray);
cocktailNameFilterElement.value = "";
};

async function initialization(){
	await fillSelectElements();
	await getAllDrinks();
	generateDrinksHTML(drinksArray);
	searchButtontElement.addEventListener('click', filter);
	//console.log(drinksArray); //visi atvaizduojami gerimai  TIK strDrink, strDrinkThumb, idDrink
	}
	
	
	
//-------------------RANDOM-Done---------------------//
function getIngredientsArray(drink) {
    const ingredientArray = [];
    for ( let currentIngredient = 1; currentIngredient < 16; currentIngredient++){
if (drink[`strIngredient${currentIngredient}`])
{ingredientArray.push(drink[`strIngredient${currentIngredient}`])}
    }
    return ingredientArray;
}
function getMeasureArray(drink) {
    const measureArray = [];
    for ( let currentMeasure = 1; currentMeasure < 16; currentMeasure++){
if (drink[`strIngredient${currentMeasure}`])
{measureArray.push(drink[`strMeasure${currentMeasure}`])}
//console.log(measureArray) //randomDrink gėrimo ingredientų kiekiai
    }
    return measureArray;
}
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
        //console.log(randomDrink); //vieno gėrimo visos savybės
        //console.log(array.drinks); //vieno gėrimo visos savybės (randomDrink)
		generateRandomDrinkHTML(randomDrink);
		openRandomModal();
	})
});
	function generateRandomDrinkHTML(randomDrink){
		dynamicHTML = "";
		for (let drink of randomDrink){
            const ingredientArray = getIngredientsArray(drink);
            const measureArray = getMeasureArray(drink);
			dynamicHTML +=`<div class="buttons">
			<img src="${drink.strDrinkThumb}" alt="${drink.strDrink}"/>
			<h3>${drink.strDrink}</h3>
				<div class="row">
					<div class="b">Category:</div>
					<div class="p">${drink.strCategory}</div>
				</div>
				<div class="row">
					<div class="b">Alcohol:</div>
					<div class="p">${drink.strAlcoholic}</div>
				</div>
				<div class="row">
					<div class="b">Glass:</div>
					<div class="p">${drink.strGlass}</div>
				</div>
				<div class="row">
					<div class="b">Ingredients:</div>
                    <div class="p"></div>
                </div>
                <div class="row1">
                ` 
                let ingredientsHtml = "";
                // for (let ingredient of ingredientArray){
                //     ingredientsHtml += `
                //     <div class="col">
                //             ${ingredient}
                //             </div>
                //         `
                // };
                //     dynamicHTML += ingredientsHtml 
            
                // let measuresHtml = "";
                // for (let measure of measureArray){
                //     measuresHtml +=`
                //     <div class="col">
                //         ${measure}
                // </div>
                //     `
                // }
                for (let index in ingredientArray){
                    ingredientsHtml += `
                    <div class="row">
                        <div class= "col1">${ingredientArray[index]}</div>
                        <div class= "col">${measureArray[index]}</div>
                    </div>
                    `
                }
                dynamicHTML += ingredientsHtml + 
            `
                 </div>
            <div class="row">
					<div class="b">Recipe:</div>
					<div class="p1">${drink.strInstructions}</div>
				</div>
			<hr/>
			<button onclick="closeRandomModal()">x</button>
		</div>`
		}
	document.querySelector('.random-drinks').innerHTML = dynamicHTML;
	};
	initialization();