const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
	console.log("server running on...", port);
});

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/about", (req, res) => {
	res.send("this is about route");
});

app.get("/contact", (req, res) => {
	res.send("this is contact route");
});

app.get("/portfolio", (req, res) => {
	res.send("this is portfolio route");
});
