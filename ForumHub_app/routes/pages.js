const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	//index.ejs failo atvaizdavimas iš views aplanko
	res.render("index", {
		title: "Forumo aplikacija",
		username: "Mice",
		list: ["Product1", "Product2", "Milk", "Choclate"],
	});
	//Kartu paduodami ir parametrai EJS failui
});

router.get("/register", (req, res) => {
	res.render("register");
	//Register rout'as skirtas registracijai
});
router.get("/user-profile", (req, res) => {
	res.render("user-profile");

});




module.exports = router;