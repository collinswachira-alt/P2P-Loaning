document.addEventListener('DOMContentLoaded', () => {
  populateLoanItems();
  showNotifications();
});

// Sample Data for Loan Offers and Requests
const loanOffers = [
  { id: 'LOAN001', name: 'John Doe', amount: 500, duration: '30 days' },
  { id: 'LOAN002', name: 'Jane Smith', amount: 1000, duration: '45 days' },
  { id: 'LOAN003', name: 'Emily Johnson', amount: 300, duration: '15 days' },
  { id: 'LOAN004', name: 'Michael Brown', amount: 800, duration: '60 days' },
  { id: 'LOAN005', name: 'Sarah Davis', amount: 450, duration: '30 days' },
  { id: 'LOAN006', name: 'David Wilson', amount: 650, duration: '30 days' },
  { id: 'LOAN007', name: 'Anna Garcia', amount: 900, duration: '20 days' },
  { id: 'LOAN008', name: 'Brian Martinez', amount: 750, duration: '50 days' },
  { id: 'LOAN009', name: 'Samantha Lee', amount: 400, duration: '25 days' },
  { id: 'LOAN010', name: 'Kevin Thompson', amount: 550, duration: '40 days' },
  { id: 'LOAN011', name: 'Laura White', amount: 1200, duration: '30 days' },
  { id: 'LOAN012', name: 'James Harris', amount: 300, duration: '10 days' },
  { id: 'LOAN013', name: 'Jessica Clark', amount: 850, duration: '35 days' },
];

const loanRequests = [
  { id: 'REQ001', name: 'Liam Taylor', amount: 600, duration: '15 days' },
  { id: 'REQ002', name: 'Mia Robinson', amount: 300, duration: '20 days' },
  { id: 'REQ003', name: 'Noah Walker', amount: 500, duration: '30 days' },
  { id: 'REQ004', name: 'Olivia Young', amount: 450, duration: '25 days' },
  { id: 'REQ005', name: 'Lucas Hall', amount: 700, duration: '40 days' },
  { id: 'REQ006', name: 'Isabella Allen', amount: 900, duration: '50 days' },
  { id: 'REQ007', name: 'Mason Wright', amount: 800, duration: '30 days' },
  { id: 'REQ008', name: 'Sophia King', amount: 400, duration: '10 days' },
  { id: 'REQ009', name: 'Ethan Scott', amount: 650, duration: '45 days' },
  { id: 'REQ010', name: 'Ava Adams', amount: 300, duration: '20 days' },
  { id: 'REQ011', name: 'James Baker', amount: 1200, duration: '30 days' },
  { id: 'REQ012', name: 'Charlotte Green', amount: 550, duration: '15 days' },
  { id: 'REQ013', name: 'Benjamin Nelson', amount: 500, duration: '30 days' },
];

// Populate Loan Items
function populateLoanItems() {
  const borrowItemsContainer = document.getElementById('borrowItems');
  const offerItemsContainer = document.getElementById('offerItems');

  loanRequests.forEach(request => {
      const item = document.createElement('div');
      item.className = 'loan-item';
      item.innerHTML = `
          <div class="profile-icon">${request.name.charAt(0)}</div>
          <h3>${request.name}</h3>
          <p>Loan ID: ${request.id}</p>
          <p>Amount: $${request.amount}</p>
          <p>Duration: ${request.duration}</p>
      `;
      borrowItemsContainer.appendChild(item);
  });

  loanOffers.forEach(offer => {
      const item = document.createElement('div');
      item.className = 'loan-item';
      item.innerHTML = `
          <div class="profile-icon">${offer.name.charAt(0)}</div>
          <h3>${offer.name}</h3>
          <p>Loan ID: ${offer.id}</p>
          <p>Amount: $${offer.amount}</p>
          <p>Duration: ${offer.duration}</p>
      `;
      offerItemsContainer.appendChild(item);
  });
}

// Show Notifications
function showNotifications() {
  const notificationsContainer = document.getElementById('notifications');
  const notifications = [
      "John Doe has offered a loan of $500.",
      "Mia Robinson has requested a loan of $300.",
      "James Harris has offered a loan of $1200.",
      "Olivia Young has requested a loan of $450."
  ];

  notifications.forEach((msg, index) => {
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.innerText = msg;
      notificationsContainer.appendChild(notification);
      
      // Auto-dismiss notification after 3 seconds
      setTimeout(() => {
          notification.style.opacity = '0';
          setTimeout(() => {
              notificationsContainer.removeChild(notification);
          }, 300);
      }, 3000 * (index + 1)); // stagger notifications
  });

  notificationsContainer.style.display = 'block';
}
