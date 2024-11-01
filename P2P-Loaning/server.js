const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 3000;

// Setup multer to store uploaded images in 'assets' folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'UserIDs');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

app.use(express.static(__dirname));
app.use(express.json());

// Serve the signup page
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

// Handle registration data submission with file upload
app.post('/register', upload.single('idPicture'), (req, res) => {
  const { name, phone, pin, idNumber } = req.body;
  const date = new Date().toISOString();
  const idPicturePath = req.file ? `UserIDs/${req.file.filename}` : null;

  const userData = { name, phone, pin, idNumber, date, idPicturePath };

  fs.readFile('registration.json', (err, data) => {
    let users = [];
    if (!err && data.length > 0) {
      users = JSON.parse(data);
    }

    users.push(userData);

    fs.writeFile('registration.json', JSON.stringify(users, null, 2), (writeErr) => {
      if (writeErr) {
        res.status(500).send('Error saving registration');
      } else {
        res.status(200).send('Registration successful');
      }
    });
  });
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/get-registrations', (req, res) => {
  fs.readFile('registration.json', (err, data) => {
    if (err || data.length === 0) {
      res.status(200).json([]);
    } else {
      const users = JSON.parse(data);
      res.json(users);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
