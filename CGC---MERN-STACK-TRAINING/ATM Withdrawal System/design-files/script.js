// Initialize available balance
var availableBalance = 10000;

function processWithdrawal() {
    var withdrawalAmount = document.getElementById("withdrawalAmount").value;
    var message = document.getElementById("message");

    // Convert withdrawalAmount to number
    withdrawalAmount = Number(withdrawalAmount);

    // Check if the withdrawal amount is valid
    if (withdrawalAmount % 100 !== 0 || withdrawalAmount <= 0) {
        message.innerHTML = "Please enter a valid withdrawal amount in multiples of ₹100, ₹200, ₹500, or ₹2000.";
        return;
    }

    // Check if there is enough balance
    if (withdrawalAmount > availableBalance) {
        message.innerHTML = "Insufficient balance!";
        return;
    }

    // Deduct the amount and show the new balance
    availableBalance -= withdrawalAmount;
    message.innerHTML = "Withdrawal successful! New balance: ₹" + availableBalance;
}
