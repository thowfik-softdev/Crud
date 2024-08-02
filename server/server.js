const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://www.tca.com"],
    credentials: true
  })
);

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "crud" // Specify the database name here
});

// To check the database is connected to the backend
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  password: String
});

const userModel = mongoose.model("crud-operation", userSchema);

// Get All User data in the modal
app.get("/get-all", async (req, res) => {
  const data = await userModel.find();
  res.send({ return: data, message: "Data GET Success" });
});

// Get Single user Data
app.get("/get-unique/:id", async (req, res) => {
  const id = req.params.id;
  console.log("id: ", id);
  const data = await userModel.findById(id);
  res.send({ return: data, message: "Unique Data GET Success" });
});




// Post New Data
// Post New Data
app.post("/add", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check if required fields are present
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!phone) missingFields.push("phone");
    if (!password) missingFields.push("password");

    if (missingFields.length > 0) {
      const missingFieldsString = missingFields.join(", ");
      return res
        .status(400)
        .send({ message: `Missing required fields: ${missingFieldsString}` });
    }

    console.log("data: ", req.body);

    const postData = new userModel({
      name: name,
      email: email,
      phone: phone,
      password: password
    });

    await postData.save();
    res.send({ return: postData, message: "Data Added Success" });
  } catch (error) {
    console.error("Error adding data:", error);
    res
      .status(500)
      .send({ message: "Error adding data", error: error.message });
  }
});

// Update Data
// Update Data
app.put("/update-user", async (req, res) => {
  try {
    const {userId, name, email, phone, password } = req.body;

    // Check if required fields are present
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!phone) missingFields.push("phone");
    if (!password) missingFields.push("password");

    if (missingFields.length > 0) {
      const missingFieldsString = missingFields.join(", ");
      return res
        .status(400)
        .send({ message: `Missing required fields: ${missingFieldsString}` });
    }

    console.log("data: ", req.body);

    // Find and update the user by ID
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      {
        name: name,
        email: email,
        phone: phone,
        password: password
      },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }

    res.send({ return: updatedUser, message: "Data Updated Success" });
  } catch (error) {
    console.error("Error updating data:", error);
    res
      .status(500)
      .send({ message: "Error updating data", error: error.message });
  }
});


// Delete data 
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Delete ID: ", id);

  try {
    const deletedData = await userModel.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).send({ message: "Data not found" });
    }

    res.status(200).send({ message: "Data Deleted Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is Running on the port ${PORT}`);
}); 
