const loanOffers = [
  { id: 'LOAN001', profileImg: '💰', amount: 500, interestRate: 5 },
  { id: 'LOAN002', profileImg: '🤑', amount: 1000, interestRate: 4 },
  { id: 'LOAN003', profileImg: '💸', amount: 1500, interestRate: 6 },
  { id: 'LOAN004', profileImg: '👛', amount: 2000, interestRate: 5 },
  { id: 'LOAN005', profileImg: '🏦', amount: 2500, interestRate: 3 },
  { id: 'LOAN006', profileImg: '💳', amount: 3000, interestRate: 4 }
];

const loanRequests = [
  { id: 'REQUEST001', profileImg: '🧑‍💼', amount: 500, purpose: 'Medical Loans' },
  { id: 'REQUEST002', profileImg: '👩‍🎓', amount: 1000, purpose: 'Education' },
  { id: 'REQUEST003', profileImg: '👨‍🔧', amount: 1500, purpose: 'Other' },
  { id: 'REQUEST004', profileImg: '👨‍⚕️', amount: 2000, purpose: 'Medical Loans' },
  { id: 'REQUEST005', profileImg: '👩‍💼', amount: 2500, purpose: 'Repair and Maintanance' },
  { id: 'REQUEST006', profileImg: '🧑‍🌾', amount: 3000, purpose: 'Other' },
  { id: 'REQUEST001', profileImg: '🧑‍💼', amount: 500, purpose: 'Medical Loans' },
  { id: 'REQUEST002', profileImg: '👩‍🎓', amount: 1000, purpose: 'Education' },
  { id: 'REQUEST003', profileImg: '👨‍🔧', amount: 1500, purpose: 'Other' },
  { id: 'REQUEST004', profileImg: '👨‍⚕️', amount: 2000, purpose: 'Medical Loans' },
  { id: 'REQUEST005', profileImg: '👩‍💼', amount: 2500, purpose: 'Repair and Maintanance' },
  { id: 'REQUEST006', profileImg: '🧑‍🌾', amount: 3000, purpose: 'Other' }
];

function populateLoans() {
  const borrowLoanItems = document.getElementById('borrowLoanItems');
  const offerLoanItems = document.getElementById('offerLoanItems');

  loanRequests.forEach(request => {
    const item = document.createElement('div');
    item.className = 'loan-item';
    item.innerHTML = `
      <div class="details">
        <span class="emoji">${request.profileImg}</span>
        <h4>Loan ID: ${request.id} - Amount: Ksh ${request.amount}</h4>
      </div>
      <p>Purpose: ${request.purpose}</p>
      <button onclick="window.location.href='successful.html'">Select</button>
    `;
    borrowLoanItems.appendChild(item);
  });

  loanOffers.forEach(offer => {
    const item = document.createElement('div');
    item.className = 'loan-item';
    item.innerHTML = `
      <div class="details">
        <span class="emoji">${offer.profileImg}</span>
        <h4>Loan ID: ${offer.id} - Amount: Ksh ${offer.amount} - Interest Rate: ${offer.interestRate}%</h4>
      </div>
      <button onclick="window.location.href='successful.html'">Select</button>
    `;
    offerLoanItems.appendChild(item);
  });
}

const notifications = [
  '🤑 John Doe offered a loan of Ksh 2000.',
  '💰 Jane Smith requested a loan of Ksh 1500.',
  '👛 Alice Johnson offered a loan of Ksh 1000.',
  '💳 Bob Brown requested a loan of Ksh 2500.',
  '🏦 Emily White offered a loan of Ksh 3000.',
  '🤑 John Doe offered a loan of Ksh 2000.',
  '💰 Jane Smith requested a loan of Ksh 1500.',
  '👛 Alice Johnson offered a loan of Ksh 1000.',
  '💳 Bob Brown requested a loan of Ksh 2500.',
  '🏦 Emily White offered a loan of Ksh 3000.', 
  '💰 Jane Smith requested a loan of Ksh 1500.',
  '👛 Alice Johnson offered a loan of Ksh 1000.',
  '💳 Bob Brown requested a loan of Ksh 2500.',
  '🏦 Emily White offered a loan of Ksh 3000.'
];

function showNotifications() {
  const notificationList = document.createElement('div');
  notificationList.id = 'notificationList';
  document.body.appendChild(notificationList);
  let currentNotificationIndex = 0;

  setInterval(() => {
    if (currentNotificationIndex < notifications.length) {
      const notificationItem = document.createElement('div');
      notificationItem.className = 'notification-item';
      notificationItem.innerText = notifications[currentNotificationIndex];

      notificationList.appendChild(notificationItem);

      setTimeout(() => {
        notificationItem.classList.add('fade-out');
        setTimeout(() => {
          notificationList.removeChild(notificationItem);
        }, 1000); 
      }, 3000);

      currentNotificationIndex++;
    } else {
      currentNotificationIndex = 0; 
    }
  }, 4000); 
}


window.onload = () => {
  populateLoans();
  showNotifications();
};
