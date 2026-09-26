const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
	res.json({
		success: true,
		message: "E-Commerce Backend is running"
	})
})

app.get("/api/test", (req, res) => {
	res.json({
		success: true,
		message: "API is working Successfully"
	})
})


app.use("/api/products", productRoutes)


app.listen(PORT, () => {
	console.log(`Sever running on PORT ${PORT}`)
});