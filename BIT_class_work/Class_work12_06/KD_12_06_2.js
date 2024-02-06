function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
//FUNKCIJOS//
function generateArrayOfRandomNumbers(min, max, countOfElements) {
    let array =[];
    for (let i = 0; i < countOfElements; i++){
        array.push(rand(min, max));
    }
    return array;
}

function getNewElement(array, index) {
    let nextElement {
        if(array[index] %2 === 0) {
            array.splice(index, 1);
            i--;
        }
    }
}
let arr = generateArrayOfRandomNumbers(0, 10, 20);
console.log(arr);
// a. lyginiai;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] %2 === 0) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
//b;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] %2 !== 0) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
// pataisyt pagal pvz Justino is git hub //
