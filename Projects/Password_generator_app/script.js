console.log("veikiu");

const empty = "";
const uCase = "ABCDEFGHIJKLMNOPRSTUVWYXZ";
const lCase = "abcdefghijklmnoprstuvywxz";
const number = "123456789";
const symbols = "!@#$%^&*()_+<>";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumbers = document.getElementById("p-numbers");
const pSymbols = document.getElementById("p-symbols");
const copyBtn = document.getElementById("copy");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", ()=> {
    let initialPassword = empty;
    upperCase.checked ? (initialPassword += uCase): "";
    lowerCase.checked ? (initialPassword += lCase): "";
    pSymbols.checked ? (initialPassword += symbols): "";

password.value = generatePassword(pLength.value, initialPassword)
});
function generatePassword(length, initialPassword){
let pass = "";
 for (let  i = 0; i < length; i++) {
    pass += initialPassword.charAt(
        Math.floor(Math.random() * initialPassword.length)
    )
 }
 return pass;
}
copyBtn.addEventListener('click', ()=>{
    // navigator.clipboard.writeText(password.value);
    //  alert("Password Copied");
    if (password.value === ""){
        alert ("please, enter your password")
    }
    else {
        password.select()
        document.execCommand("copy")
        alert("password coppied")
    }
})
