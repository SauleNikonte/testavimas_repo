const express = require("express");
const sessions = require("express-session");
const cors = require("cors");

const server = express();
const port = 3000;

server.use(
    cors({
        origin: "http://127.0.0.1:5500",
        credentials: true,
    })
);
server.use(express.json());
server.use(
    sessions({
        secret: "Banana bike",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);
//---1----
// Addition Endpoint
// Endpoint: /addition/<number1>/<number2>
// Task: Create an API that takes two numbers as parameters and returns their sum.
// Example: /addition/1/2 should return 3.


server.get("/addition/<number1>/<number2>", (req, res) => {
    const number1 = parseFloat(req.params.number1);
    const number2 = parseFloat(req.params.number2);

    if (isNaN(number1) || isNaN(number2)) {
        res.status(400).json({ message: "Invalid input. Please provide numbers." });
    } else {
        const result = number1 + number2;
        res.json({ result });
    }
});

//--3--
// Subtraction Endpoint
// Endpoint: /subtract/<number1>/<number2>
// Task: Create an API to subtract the second number from the first. Include validation to ensure subtraction from zero is not allowed.
// Example: /subtract/3/0 should return Subtraction from 0 cannot be done.
//

server.get("/subtract/<number1>/<number2>", (req, res) => {
    const number1 = parseFloat(req.params.number1);
    const number2 = parseFloat(req.params.number2);

    if (isNaN(number1) || isNaN(number2)) {
        res.status(400).json({ message: "Invalid input. Please provide valid numbers." });
    } else if (number1 === 0 || number2 === 0) {
        res.status(400).json({ mesage: "Subtraction with 0 cannot be done." });
    } else {
        const result = number1 - number2;
        res.json({ result });
    }
});

//--4--
// Multiplication Endpoint
// Endpoint: /multiply/<number1>/<number2>
// Task: Build an API that multiplies two numbers. Handle any exceptions like multiplying by a string.
// Example: /multiply/3/4 should return 12.
//
server.get("/multiply/<number1>/<number2>", (req, res) => {
    const number1 = req.params.number1
    const number2 = req.params.number2
    
    if(isNaN(number1) || isNaN(number2)){ res.status(400).json({ message: "Enter a valid number" })
}else{ 
    const multiply = number1 * number2
    res.json({multiply})}
})

//--2--
// Check If User Exists
// Endpoint: /check-if-user-exists/<userId>
// Task: Implement an API that checks if a user with a given ID exists in an array. Respond with 200: true if the user exists, or 404: false if not.
// Example: /check-if-user-exists/2 should check if a user with ID 2 exists.
//

const existingUsers = [
    { userID: 1},
    { userID: 2},
    { userID: 3},
];

server.get("/check-if-user-exists/<userid>", (req, res) => {
    const userid = +req.params.userID;
    console.log(userid);
    const userExists = existingUsers.find(user => user.userID === userid)
    if (userExists) {res.status(200).json( { message: "User exists"} )
    }else{
    res.status(400).json( { message: "User doesn't exist"})
}
})
//----5---
// User Registration
// Endpoint: /register-user
// Task: Implement an API to register a new user. Use POST method to accept user data (like name, email) and store it in an array.
// Example: POST data to /register-user to add a new user.
//
const users = [];

server.post("/register-user", (req, res) => {
        const { name, email } = req.body;

        if (!name || !email) {
            res.status(400).json({ error: "Please provide name and email." });
            return;
        }
        const newUser = {
            name: name,
            email: email,
        };

        users.push(newUser);

        res.status(200).json({ message: "User registered successfully", user: newUser });
    });

//---6---
// String Reversal Endpoint
// Endpoint: /reverse-string/<text>
// Task: Create an API to reverse a given string.
// Example: /reverse-string/hello should return olleh.
//
server.get("/reverse-string/<text>", (req, res) => {
        const text = req.params.text;

        if (!text) {
            res.status(400).json({ error: "Please provide a string to reverse." });
        }
        const reversedText = text.split("").reverse().join("");

        res.status(200).json({ originalText: text, reversedText: reversedText });
    });

//---7---//
// User search in array
// Endpoint: /fetch-user/<userId>
// Task: Build an API to fetch user details based on their ID in array.
// Example: /fetch-user/1 should return the details of the user with ID 1.
const allUsers = [
    { id: 1, name: "Saule", email: "saule@vienas.com" },
    { id: 2, name: "Mice", email: "mice@du.com" },
    { id: 3, name: "Ace", email: "ace@trys.com" },
    { id: 4, name: "Kumbacele", email: "kumbacele@keturi.com" },
];
server.get("/fetch-user/<userId>", (req, res) => {

if (isNaN(+req.params.id)) {
    res.status(400).json({ message: "Enter a valid number" })
}
const selectedUser = allUsers.find((user) => user.id === +req.params.id);
if (!selectedUser) {
    res.status(400).json( {message: "User doesn't exist"}) //404, 500 Internal server error
} else {
    res.status(200).json({selectedUser});
}
});

/// pamokos pvz.
// server.get("/users/:id", (req, res) => {
// 	//Jei yra gaunami duomenys, juos reikėtų validuoti.
// 	console.log(isNaN(+req.params.id));
// 	if (isNaN(+req.params.id)) {
// 		res.send("ID privalo buti skaicius");
// 	}

// 	const selectedUser = users.find((user) => user.id === +req.params.id);
// 	if (!selectedUser) {
// 		res.send("Tokio vartotojo nėra"); //404, 500 Internal server error
// 	} else {
// 		res.send(selectedUser);
// 	}
// });




//---8---
// Dynamic Query Parameters
// Endpoint: /search-products
// Task: Implement an API to search for products with dynamic query parameters (like name, price range).
// Example: /search-products?name=phone&priceLessThan=1000 should return products matching these criteria.




server.listen(port, () => {
    console.log(`Server is running on http://localhost:3000`);
});

