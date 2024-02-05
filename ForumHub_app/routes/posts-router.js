const express = require("express");
const router = express.Router();
const PostModel = require("../models/post");
const upload = require("../config/multer").upload;
const validate = require("../utils/validation/userValidation");

router.get("/", async (req, res) => {
	//Visu irasu gavimas
	const allPosts = await PostModel.find({});
	res.status(200).json(allPosts);
});

router.get("/:id", async (req, res) => {
	//Vieno konkretaus įrašo gavimas
	const post = await PostModel.findOne({ _id: req.params.id }); //Jei neatrandamas, reiksme tampa undefined
	if (!post) {
		return res.status(404).json({ message: "no such entry" });
	}
	res.status(200).json(post);
});

router.delete("/:id", async (req, res) => {
	const post = await PostModel.findOne({ _id: req.params.id }); //Jei neatrandamas, reiksme tampa undefined
	if (!post) {
		return res.status(404).json({ message: "no such entry" });
	}

	//Jei autorius yra prisijunges vartotojas arba prisijunges vartotojas yra admin, tada leidžiame ištrinti įrašą
	if (post.authorId === req.session.user.id || req.session.user.admin) {
		await PostModel.findOneAndDelete({ _id: req.params.id });
		return res.status(200).json({ message: "Post was successfully deleted" });
	}
	return res
		.status(403)
		.json({ message: "You do not have the permission to delete this post." });

	//Įrašo ištrynimas
});

router.post("/", async (req, res) => {
	const { title, content } = req.body;
	const authorId = req.session.user.id;

	// Validacija

	// Išsaugojimas duombazėje
	const newPost = new PostModel({
		title,
		content,
		authorId,
	});

	await newPost.save();
	res.redirect("/?message=Naujas postas buvo sėkmingai sukurtas");
});

module.exports = router;