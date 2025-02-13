/**
 * I've added two new features to the Electricity Bill Calculator:

✅ QR Code for Payment (Dynamically Generates QR Code)
✅ Graphs for Usage Trends (Using Chart.js)

script.js (Enhanced with QR Code & Graphs)

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

    generateQRCode(totalBill);
    saveBill(billDetails);
    updateChart();
}

// Function to Generate QR Code for Payment
function generateQRCode(amount) {
    document.getElementById("qrCodeCanvas").innerHTML = ""; // Clear previous QR code

    let qrCode = new QRCode(document.getElementById("qrCodeCanvas"), {
        text: `upi://pay?pa=yourupi@upi&pn=ElectricityBill&am=${amount}&cu=INR`,
        width: 150,
        height: 150
    });
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

    updateChart();
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
    document.getElementById("qrCodeCanvas").innerHTML = "";
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

// Function to Update Graph using Chart.js
function updateChart() {
    let previousBills = JSON.parse(localStorage.getItem("bills")) || [];
    let labels = [];
    let data = [];

    previousBills.forEach((bill, index) => {
        let units = bill.split(",")[0].split(":")[1].trim();
        labels.push(`Bill ${index + 1}`);
        data.push(parseFloat(units));
    });

    let ctx = document.getElementById("usageChart").getContext("2d");

    if (window.myChart) window.myChart.destroy();

    window.myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Units Consumed",
                data: data,
                borderColor: "blue",
                borderWidth: 2
            }]
        }
    });
}

// Display Previous Bills on Load
displayPreviousBills();

