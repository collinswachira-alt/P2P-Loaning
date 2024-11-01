const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5500; // Adjust port as needed

app.use(express.static('public'));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: './assets/',
  filename: (req, file, cb) => {
    cb(null, `${req.body.name.split(' ')[0]}_ID.jpg`);
  }
});
const upload = multer({ storage });

// POST route to handle registration
app.post('/register', upload.single('idImage'), (req, res) => {
  const { name, phone, pin, idNumber, ip, dateTime } = req.body;
  
  const newUser = {
    name,
    phone,
    pin,
    idNumber,
    ip,
    dateTime
  };

  // Read existing data and add new user
  fs.readFile('registration.json', 'utf8', (err, data) => {
    if (err && err.code === 'ENOENT') {
      // If file doesn't exist, initialize with empty array
      console.log("File not found. Initializing new file.");
      data = '[]';
    } else if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Error reading file.");
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (parseErr) {
      console.error("Error parsing JSON data:", parseErr);
      return res.status(500).send("Error parsing JSON.");
    }

    users.push(newUser);

    // Write updated data back to file
    fs.writeFile('registration.json', JSON.stringify(users, null, 2), (writeErr) => {
      if (writeErr) {
        console.error("Error writing file:", writeErr);
        return res.status(500).send("Error saving user data.");
      }
      console.log("User registered successfully:", newUser);
      res.status(200).send("User registered successfully.");
    });
  });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
