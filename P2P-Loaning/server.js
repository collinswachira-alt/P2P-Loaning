const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static('assets')); // Serve images

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Ensure home.html exists and is correctly referenced
});

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets'); // Store images in the assets folder
  },
  filename: (req, file, cb) => {
    const name = req.body.name.split(' ')[0]; // Use first name as filename
    cb(null, `${name}_${Date.now()}_${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

// Signup route
app.post('/signup', upload.single('idPicture'), (req, res) => {
  const { name, phone, pin, idNumber, ipAddress, dateTime } = req.body;
  
  // Create the registration object
  const registrationData = {
    name,
    phone,
    pin,
    idNumber,
    ipAddress,
    dateTime,
    idPicture: req.file.filename // Store the filename of the uploaded ID picture
  };

  // Store in registration.json
  fs.readFile('registration.json', (err, data) => {
    let registrations = [];
    if (!err) {
      registrations = JSON.parse(data);
    }
    registrations.push(registrationData);

    fs.writeFile('registration.json', JSON.stringify(registrations, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to save registration data.' });
      }
      res.status(200).json({ message: 'Registration successful!' });
    });
  });
});

// Serve the signup page
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
