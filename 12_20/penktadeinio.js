function add(a,b) {
    return a+b
}
console.log(add(5,6))


function isEven(number) {
    return number % 2 === 0
}
console.log(isEven(7));

function greet(name) {
    console.log(`labas ${name}` );
}

greet("Mantas")

function factorial(number) {
    if (number === 0 || number === 1){
        return 1
    }

    else {
        return number * factorial(number - 1)

    }

}
const factorial2 = factorial(5);
console.log(factorial2)

function prasuktiCikla(kartai) {
    if(kartai>0) {
        console.log("veiksmas nr." +kartai)
        prasuktiCikla(kartai-1)
    }
}
prasuktiCikla(5)

function celciusToFarenheit(celsius) {
    return ( celsius * 9/5)+32
}
console.log(celciusToFarenheit(25))

function getMaxNumber(array) {
    return Math.max(...array)
}
console.log(getMaxNumber([ 5, 15, 120 , 100, 14 , 2]));

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + min +1))+min} 
    
console.log(getRandomNumber(0, 10));

function getUniqueValue(array) {
 return [...new Set(array)]


}

console.log(getUniqueValue([1,1,5,25,5,5,2,3,9,7]))

const array = [ 1,2,3,4,5,]
function squareValues(arr) {
    return arr.map(number=> number * number)
}
const squared = squareValues([1,2,3,4,5])
const news = squareValues(array);

const asas = squareValues(news)
console.log(squareValues(array));
console.log(news);
console.log(asas);


function sumazintiMasyva(arr, start, end) {
    return arr.slice(start, end)
}
const sliced = sumazintiMasyva([6,8,2,4,6,2,7,8,1,45,5,], 2, 4 )
console.log(sliced); 


function dvigubintiSkaiciu(num) {
    return num*2
}


function didziausiasSkaicius( num1, num2, num3) {
    return Math.max(num1, num2, num3)
}
console.log(didziausiasSkaicius(5 , 7 , 8 ));

function tekstas(text){
    return text.split("").reverse().join
}


function sumArr(arr){
    let sum = 0;
    for(let i=0; i < arr.lenght; i++) {
    sum += arr[i]}
    
    return sum }
    console.log(sumArr([1, 2, 3,]));
