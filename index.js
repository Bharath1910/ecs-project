const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors({
	origin: "*"
}))

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

app.listen(3000, () => {
	console.log("Server is running on port 3000")
});