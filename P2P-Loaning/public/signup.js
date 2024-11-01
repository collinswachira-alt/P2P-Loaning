document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission
  
    const formData = new FormData(this);
    
    // Capture IP address
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const userIP = ipData.ip;
  
    // Get current date and time
    const now = new Date();
    const dateTime = now.toISOString();
  
    // Append IP address and timestamp to the form data
    formData.append('ipAddress', userIP);
    formData.append('dateTime', dateTime);
  
    // Send data to the server
    const response = await fetch('/signup', {
      method: 'POST',
      body: formData
    });
  
    if (response.ok) {
      alert('Signup successful!');
      window.location.href = 'regredirect.html'; 
    } else {
      alert('Signup failed. Please try again.');
    }
  });
  