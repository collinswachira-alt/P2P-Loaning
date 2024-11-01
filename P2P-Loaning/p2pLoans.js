// Sample data for loans and notifications
const loanOffers = [
  { id: 'LOAN001', profileImg: '😀', amount: 500, interestRate: 5 },
  { id: 'LOAN002', profileImg: '😃', amount: 1000, interestRate: 4 },
  { id: 'LOAN003', profileImg: '😄', amount: 1500, interestRate: 6 },
  { id: 'LOAN004', profileImg: '😁', amount: 2000, interestRate: 5 },
  { id: 'LOAN005', profileImg: '😆', amount: 2500, interestRate: 3 },
  { id: 'LOAN006', profileImg: '😅', amount: 3000, interestRate: 4 },
  { id: 'LOAN007', profileImg: '😂', amount: 3500, interestRate: 5 },
  { id: 'LOAN008', profileImg: '🤣', amount: 4000, interestRate: 7 },
  { id: 'LOAN009', profileImg: '😇', amount: 4500, interestRate: 6 },
  { id: 'LOAN010', profileImg: '😉', amount: 5000, interestRate: 4 },
  { id: 'LOAN011', profileImg: '😊', amount: 5500, interestRate: 5 },
  { id: 'LOAN012', profileImg: '😋', amount: 6000, interestRate: 5 },
  { id: 'LOAN013', profileImg: '😎', amount: 6500, interestRate: 8 }
];

const loanRequests = [
  { id: 'REQUEST001', profileImg: '😍', amount: 500, purpose: 'Medical Expenses' },
  { id: 'REQUEST002', profileImg: '😗', amount: 1000, purpose: 'Education' },
  { id: 'REQUEST003', profileImg: '😘', amount: 1500, purpose: 'Home Renovation' },
  { id: 'REQUEST004', profileImg: '😜', amount: 2000, purpose: 'Car Repair' },
  { id: 'REQUEST005', profileImg: '😝', amount: 2500, purpose: 'Travel Expenses' },
  { id: 'REQUEST006', profileImg: '😳', amount: 3000, purpose: 'Business Investment' },
  { id: 'REQUEST007', profileImg: '😬', amount: 3500, purpose: 'Wedding Costs' },
  { id: 'REQUEST008', profileImg: '😮', amount: 4000, purpose: 'Debt Consolidation' },
  { id: 'REQUEST009', profileImg: '😯', amount: 4500, purpose: 'Emergency Fund' },
  { id: 'REQUEST010', profileImg: '😵', amount: 5000, purpose: 'Medical Bills' },
  { id: 'REQUEST011', profileImg: '🥳', amount: 5500, purpose: 'Family Support' },
  { id: 'REQUEST012', profileImg: '🥺', amount: 6000, purpose: 'Home Purchase' },
  { id: 'REQUEST013', profileImg: '🤩', amount: 6500, purpose: 'Vacation' }
];

// Function to populate loan items
function populateLoans() {
  const borrowLoanItems = document.getElementById('borrowLoanItems');
  const offerLoanItems = document.getElementById('offerLoanItems');

  // Populate Borrow Loans
  loanRequests.forEach(request => {
    const item = document.createElement('div');
    item.className = 'loan-item';
    item.innerHTML = `
      <div class="details">
        <span class="emoji">${request.profileImg}</span>
        <h4>Loan ID: ${request.id} - Amount: $${request.amount}</h4>
      </div>
      <h4>Purpose: ${request.purpose}</h4>
      <button onclick="redirectToSuccess()">Select</button>
    `;
    borrowLoanItems.appendChild(item);
  });

  // Populate Offer Loans
  loanOffers.forEach(offer => {
    const item = document.createElement('div');
    item.className = 'loan-item';
    item.innerHTML = `
      <div class="details">
        <span class="emoji">${offer.profileImg}</span>
        <h4>Loan ID: ${offer.id} - Amount: $${offer.amount} - Interest Rate: ${offer.interestRate}%</h4>
      </div>
      <button onclick="redirectToSuccess()">Select</button>
    `;
    offerLoanItems.appendChild(item);
  });
}

// Function to populate notifications and show them one by one
function showNotifications() {
  const notifications = [
    'John Doe offered a loan of $2000.',
    'Jane Smith requested a loan of $1500.',
    'Alice Johnson offered a loan of $1000.',
    'Bob Brown requested a loan of $2500.',
    'Emily White offered a loan of $3000.'
  ];

  notifications.forEach((notification, index) => {
    setTimeout(() => {
      const notificationDiv = document.createElement('div');
      notificationDiv.className = 'notification-popup';
      notificationDiv.innerText = notification;
      document.body.appendChild(notificationDiv);

      // Remove the notification after a few seconds
      setTimeout(() => {
        notificationDiv.remove();
      }, 3000);
    }, index * 4000); // Show each notification every 4 seconds
  });
}

// Redirect function to successful page
function redirectToSuccess() {
  window.location.href = 'successful.html';
}

// Initialize the page
window.onload = () => {
  populateLoans();
  showNotifications();
};
