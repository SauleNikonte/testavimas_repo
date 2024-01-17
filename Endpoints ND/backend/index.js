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

const numbers = [];

server.get("/addition/:num1/:num2", (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ message: "Invalid input. Please provide numbers." });
    } else {
        const result = num1 + num2;
        res.json({ result });
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:3000`);
});

