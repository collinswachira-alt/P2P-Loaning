document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;
    const confirmPin = document.getElementById('confirmPin').value;
    const idNumber = document.getElementById('idNumber').value;
    const idImage = document.getElementById('idImage').files[0];
  
    // PIN validation
    if (pin !== confirmPin) {
      document.getElementById('statusMessage').textContent = "PINs do not match!";
      return;
    }
  
    // Get IP address and current date/time
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ip = data.ip;
    const dateTime = new Date().toLocaleString();
  
    // Prepare form data to send to server
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('pin', pin);
    formData.append('idNumber', idNumber);
    formData.append('ip', ip);
    formData.append('dateTime', dateTime);
    formData.append('idImage', idImage);
  
    // Send data to the server
    const res = await fetch('/register', {
      method: 'POST',
      body: formData
    });
  
    if (res.ok) {
      window.location.href = "welcome.html";
    } else {
      document.getElementById('statusMessage').textContent = "Registration failed. Try again!";
    }
  });
  