// Fetch Account ID and Transaction History from users.json
fetch('users.json')
  .then(response => response.json())
  .then(data => {
    const userID = data.currentUserID; // Assumes JSON includes the current logged-in user's ID
    const user = data.users.find(user => user.accountID === userID);

    if (user) {
      // Display Account ID
      document.getElementById('accountID').innerText = user.accountID;

      // Display Recent Transactions
      const transactionList = document.getElementById('transactionList');
      user.transactions.slice(0, 5).forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.date}: $${transaction.amount} - ${transaction.type}`;
        transactionList.appendChild(listItem);
      });
    }
  })
  .catch(error => console.error('Error fetching user data:', error));

// Loan History Chart
const ctx = document.getElementById('loanChart').getContext('2d');
const loanChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Loan Balance Over Time',
      data: [12500, 12000, 10000, 8500, 6000, 4500],
      backgroundColor: 'rgba(106, 27, 154, 0.2)',
      borderColor: '#6a1b9a',
      borderWidth: 2,
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
});

// Sample Loan Request and Loan Payment Functions
function requestLoan() {
  alert("Redirecting to Loan Request page...");
}

function payLoan() {
  alert("Redirecting to Loan Payment page...");
}
