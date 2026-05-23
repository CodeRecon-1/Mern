const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");



const connectDB = require("./config/db");
const faqRoutes = require("./routes/faqRoutes");
connectDB()
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); //to convert json request to javascript object
app.use("/api/faqs", faqRoutes);


app.get("/", (req, res) => {
    res.send("FAQ API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
