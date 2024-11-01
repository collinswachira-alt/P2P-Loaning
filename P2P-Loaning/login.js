async function verifyCredentials(accountID, pin) {
    const response = await fetch("users.json");
    const users = await response.json();
  
    const user = users.find(
      user => user.accountID === accountID && user.pin === pin
    );
  
    return user ? user : null; 
  }
  
  document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const accountID = document.getElementById("accountID").value;
    const pin = document.getElementById("pin").value;
    const errorMessage = document.getElementById("errorMessage");
  
    const user = await verifyCredentials(accountID, pin);
  
    if (user) {
    
      localStorage.setItem("currentUser", JSON.stringify(user));
    
      window.location.href = "wallet.html";
    } else {
      errorMessage.textContent = "Invalid Account ID or PIN. Please try again.";
    }
  });
  