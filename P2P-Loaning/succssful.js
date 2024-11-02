window.onload = function() {
    const selectedLoan = JSON.parse(localStorage.getItem('selectedLoan'));
  
    if (selectedLoan) {
      document.getElementById('loanID').innerText = selectedLoan.id || 'N/A';
      document.getElementById('loanAmount').innerText = selectedLoan.amount || 'N/A';
      document.getElementById('loanPurpose').innerText = selectedLoan.purpose || 'N/A';
      document.getElementById('loanInterest').innerText = selectedLoan.interestRate ? selectedLoan.interestRate + '%' : 'N/A';
    } else {
      document.querySelector('.loan-details').innerText = "No loan details available.";
    }
  };
  
  function returnToLoans() {
    window.location.href = 'p2pLoans.html';
  }

  