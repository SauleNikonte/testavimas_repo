fetch("https://dog.ceo/api/breeds/image/random")
.then((atsakymas)=> atsakymas.jason()) 
.then((atsakymas)=> console.log(atsakymas.message));