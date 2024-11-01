const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.static("public"));

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: "./assets",
  filename: (req, file, cb) => {
    const firstName = req.body.idNumber;
    const ext = path.extname(file.originalname);
    cb(null, `${firstName}${ext}`);
  }
});

const upload = multer({ storage });

// Route for handling registration
app.post("/register", upload.single("idImage"), (req, res) => {
  const { idNumber, phoneNumber, pin, confirmPin, ipAddress, dateTime } = req.body;

  if (pin !== confirmPin) {
    return res.status(400).send("PINs do not match");
  }

  // Prepare user data
  const userData = {
    idNumber,
    phoneNumber,
    pin,
    ipAddress,
    dateTime
  };

  // Save data to registration.json
  fs.readFile("registration.json", (err, data) => {
    const registrations = data ? JSON.parse(data) : [];
    registrations.push(userData);
    fs.writeFile("registration.json", JSON.stringify(registrations, null, 2), (err) => {
      if (err) return res.status(500).send("Error saving registration data");
      res.status(200).send("Registration successful");
    });
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:5500");
});