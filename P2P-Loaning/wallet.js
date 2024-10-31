document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (currentUser) {
      document.getElementById("userName").textContent = `Welcome, ${currentUser.name}!`;
      document.getElementById("accountIDDisplay").textContent = `Account ID: ${currentUser.accountID}`;
      document.getElementById("balanceDisplay").textContent = `Balance: Ksh1,245.67`; 
      
      loadTransactions();
    } else {
      window.location.href = "login.html"; 
    }
  });
  
  
  function loadTransactions() {
    const transactions = [
      { date: "2024-11-01", description: "Deposit", amount: "Ksh500", status: "Completed" },
      { date: "2024-10-30", description: "Withdraw", amount: "Ksh200", status: "Completed" },
      { date: "2024-10-29", description: "Transfer to SE218-0129/2022 (Ian Wonder)", amount: "Ksh150", status: "Completed" },
      { date: "2024-10-28", description: "Loan Taken", amount: "Ksh300", status: "Completed" }
    ]; 
  
    const transactionList = document.getElementById("transactionList");
    transactions.forEach(transaction => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.description}</td>
        <td>${transaction.amount}</td>
        <td>${transaction.status}</td>
      `;
      transactionList.appendChild(tr);
    });
  }
  
  
  function transfer() {
    alert("Transfer functionality will be implemented.");
  }
  
  function loan() {
    alert("Loan functionality will be implemented.");
  }
  
  function withdraw() {
    alert("Withdraw functionality will be implemented.");
  }
  
  
  document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("currentUser"); 
    window.location.href = "login.html"; 
  });
  