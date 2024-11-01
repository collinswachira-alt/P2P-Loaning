const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();

const PORT = 3000;
const REGISTRATION_FILE = path.join(__dirname, 'registration.json');

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'assets'));
  },
  filename: (req, file, cb) => {
    const firstName = req.body.name.split(' ')[0];
    cb(null, `${firstName}_ID${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage: storage });

// Route to handle registration form submission
app.post('/register', upload.single('idPicture'), (req, res) => {
  const { name, phone, pin, confirmPin, idNumber } = req.body;

  if (pin !== confirmPin) {
    return res.status(400).send("PINs do not match!");
  }

  const userDetails = {
    name,
    phone,
    pin,
    idNumber,
    registrationDate: new Date().toISOString(),
    ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  };

  // Save user details to registration.json
  fs.readFile(REGISTRATION_FILE, (err, data) => {
    let registrations = [];
    if (!err) {
      registrations = JSON.parse(data);
    }
    registrations.push(userDetails);

    fs.writeFile(REGISTRATION_FILE, JSON.stringify(registrations, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Error saving registration data.");
      }
      res.redirect('/thankyou.html'); // Redirect to a thank you page after submission
    });
  });
});

// Thank you page route
app.get('/thankyou.html', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Registration Successful</title>
      </head>
      <body>
        <h1>Thank You for Registering!</h1>
        <p>Your account has been successfully created.</p>
        <a href="/signup.html">Back to Sign Up</a>
      </body>
    </html>
  `);
});

app.listen(5500, () => {
  console.log(`Server running on http://localhost:${5500}`);
});