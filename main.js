const express = require("express");
const app = express();

app.listen(4000, () => {
	console.log("App is running on PORT -", 4000);
});

app.get("/", (req, res) => {
	res.send("This is home page!!");
});

app.get("/about", (req, res) => {
	res.send("This is about route!!");
});
