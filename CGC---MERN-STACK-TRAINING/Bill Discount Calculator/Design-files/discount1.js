function applyDiscount() {
    var billAmount = document.getElementById("billAmount").value;
    var finalAmount = document.getElementById("finalAmount");

    // Convert billAmount to number
    billAmount = Number(billAmount);

    if (billAmount < 0) {
        finalAmount.innerHTML = "Please enter a valid amount.";
        return;
    }

    var discount = 0;

    // Apply discount based on the total bill amount
    if (billAmount < 500) {
        discount = 0; // No discount
    } else if (billAmount >= 500 && billAmount <= 1000) {
        discount = 0.10 * billAmount; // 10% discount
    } else if (billAmount > 1000 && billAmount <= 2000) {
        discount = 0.20 * billAmount; // 20% discount
    } else if (billAmount > 2000) {
        discount = 0.30 * billAmount; // 30% discount
    }

    var amountToPay = billAmount - discount;
    finalAmount.innerHTML = "Final amount after discount: ₹" + amountToPay.toFixed(2);
}
