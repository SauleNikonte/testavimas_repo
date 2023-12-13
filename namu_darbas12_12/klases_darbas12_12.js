const arr = [ 1, 4, 8, -2, 'Petras'];
console.log(typeof arr);

const obj = {
    color: "red",
    name: "Petras",
};
console.log(arr[0]);
console.log(obj.color);

const person = {
    firstName : "John",
    lastName: "Doe",
    age: 36,
    nationality: "British",
    isMarried: false,
    kids: ["Sara", "Boston"],
};
console.log(person.age);

console.log(`Hello my name is ${person.firstName} ${person.lastName}, my age is ${person.age}, I am ${person.nationality}  and my kids are ${person.kids.join(", ")}. And I am  ${person.isMarried ? 'Married' : 'Not married'}`);


const gyvunas = {};
console.log(gyvunas);
gyvunas.animalType = "liutas";
console.log(gyvunas);

console.log(gyvunas[]);


gyvunas.occupation = "valdyti";


const people = [
    {
        firstName: "Laura",
        lastName: "Gonzales",
        age: 25,
        nationality: "Iraq",
      
    },
    {
        firstName: "Saulius",
        lastName: "Kreve",
        age: 38,
        nationality: "Lithuanian",
        isMarried: false,
    }
    {
        firstName: "John",
        lastName: "Schmit",
        age: 39,
        nationality: "Canada",
    
    }
];
console.log(people[1].firstName, people[1].lastName);


for(let person of people){
    console.log(person.firstName, person.lastName);
}