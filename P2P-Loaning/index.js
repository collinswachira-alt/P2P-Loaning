document.getElementById("signupForm").addEventListener("submit", async function(e) {
    e.preventDefault();
  
    // Capture the form data
    const formData = new FormData(this);
  
    // Get current date and time
    const dateTime = new Date().toLocaleString();
  
    // Fetch IP address
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipResponse.json();
    formData.append("ipAddress", ipData.ip);
    formData.append("dateTime", dateTime);
  
    // Send form data to server
    fetch("/register", {
      method: "POST",
      body: formData
    }).then(response => {
      if (response.ok) {
        window.location.href = "wallet.html";
      } else {
        alert("Error in registration. Try again.");
      }
    });
  });
  