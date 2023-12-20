console.log("veikia");

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome)

function palindrome () {
    let inputVal = input.value
let len = inputVal.length
    //console.log(inputVal)
    //console.log(len)
    let start = inputVal.substring(0, Math.floor(len/2)).toLowerCase();
    //console.log(start)
    let end = inputVal.substring(len - Math.floor(len/2)).toLowerCase();
    let flip = end.split("").reverse().join("")
    //console.log(end)
    let flip2 = [...end].reverse().join("")
    console.log(end, flip)

    if (!/^[A-Za-z]+$/.test(inputVal)) {
        //console.log("neraides");
        alert("ivedete ne raide")
    }
    else if (start === flip ) {
result.innerHTML = ` ${ inputVal.toUpperCase()} is a palindrome`

    }
    else {
        result.innerHTML = ` ${ inputVal.toUpperCase()} is not palindrome`
    }
}