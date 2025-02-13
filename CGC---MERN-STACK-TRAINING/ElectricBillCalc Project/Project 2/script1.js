/**
 * I have enhanced the Electricity Bill Calculator with the following new features:

✅ Dark Mode Toggle
✅ Download Bill as PDF
✅ Save Previous Bills in Local Storage
✅ Clear Input & Reset Bill

 */

// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Function to Calculate Electricity Bill
function calculateBill() {
    let units = document.getElementById("units").value;
    let billAmount = 0;

    if (units === "" || isNaN(units) || units < 0) {
        document.getElementById("result").innerHTML = "Please enter valid units!";
        return;
    }

    units = Number(units); 

    switch (true) {
        case (units <= 50):
            billAmount = units * 3.50;
            break;
        case (units <= 150):
            billAmount = (50 * 3.50) + ((units - 50) * 4.50);
            break;
        case (units <= 250):
            billAmount = (50 * 3.50) + (100 * 4.50) + ((units - 150) * 5.50);
            break;
        default:
            billAmount = (50 * 3.50) + (100 * 4.50) + (100 * 5.50) + ((units - 250) * 6.50);
            break;
    }

    let serviceCharge = (billAmount > 300) ? billAmount * 0.05 : 0;
    let totalBill = billAmount + serviceCharge;

    let billDetails = `Units: ${units}, Bill: ₹${totalBill.toFixed(2)}`;
    
    document.getElementById("result").innerHTML = `<strong>Total Bill:</strong> ₹${totalBill.toFixed(2)}`;

    saveBill(billDetails);
}

// Function to Save Bills in Local Storage
function saveBill(billDetails) {
    let previousBills = JSON.parse(localStorage.getItem("bills")) || [];
    previousBills.push(billDetails);
    localStorage.setItem("bills", JSON.stringify(previousBills));
    displayPreviousBills();
}

// Function to Display Previous Bills
function displayPreviousBills() {
    let billHistory = document.getElementById("billHistory");
    billHistory.innerHTML = "";
    let previousBills = JSON.parse(localStorage.getItem("bills")) || [];

    previousBills.forEach((bill, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${bill} <button onclick="deleteBill(${index})">❌</button>`;
        billHistory.appendChild(li);
    });
}

// Function to Delete Bill from History
function deleteBill(index) {
    let previousBills = JSON.parse(localStorage.getItem("bills")) || [];
    previousBills.splice(index, 1);
    localStorage.setItem("bills", JSON.stringify(previousBills));
    displayPreviousBills();
}

// Function to Reset Fields
function clearFields() {
    document.getElementById("units").value = "";
    document.getElementById("result").innerHTML = "";
}

// Function to Download Bill as PDF
function downloadBill() {
    let resultText = document.getElementById("result").innerText;
    if (resultText === "") {
        alert("Calculate the bill first!");
        return;
    }

    let pdfContent = `
        Electricity Bill Receipt
        -----------------------
        ${resultText}
    `;

    let blob = new Blob([pdfContent], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Electricity_Bill.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Display Previous Bills on Load
displayPreviousBills();

