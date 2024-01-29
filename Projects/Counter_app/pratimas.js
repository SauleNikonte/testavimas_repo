const count = document.querySelector(".count");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

subtract.addEventListener("click", function(){
    count.innerHTML --
})
add.addEventListener("click", function(){
    count.innerHTML ++
})
reset.addEventListener("click", function(){
    count.innerHTML = 0
})

/*let number = count;

if(number > 0){
    color = "green"}
if else (number < 0){
    color = "red"}
else{
    color = "black"}
*/

// jei minusas - raudonas
// jei pliusas - zalia
// jei nulis - juoda