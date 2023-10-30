const express = require("express")
const app = express()

app.use(express.json())
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

let data = {}

app.get("/", (req, res) => {
	return res.json(data)
})

app.post("/finger", (req, res) => {
	const {
		finger_one,
		finger_two,
		finger_three,
		finger_four,
		finger_five
	} = req.body;

	data = {
		finger_one,
		finger_two,
		finger_three,
		finger_four,
		finger_five
	}
	return res.status(204).send();
})

app.listen(3001, () => {
	console.log("Server is running on port 3000")
});