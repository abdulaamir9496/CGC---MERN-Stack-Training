//JavaScript that calculates the total bill based on power units consumed.

function calculateBill() {
    let units = document.getElementById("units").value;
    let billAmount = 0;

    if (units === "" || isNaN(units) || units < 0) {
        document.getElementById("result").innerHTML = "Please enter valid units!";
        return;
    }

    units = Number(units); // Convert input to a number

    // Rate slabs using switch-case and loops
    switch (true) {
        case (units <= 50):
            billAmount = units * 3.50;  // ₹3.50 per unit for first 50 units
            break;
        case (units <= 150):
            billAmount = (50 * 3.50) + ((units - 50) * 4.50); // Next 100 units at ₹4.50
            break;
        case (units <= 250):
            billAmount = (50 * 3.50) + (100 * 4.50) + ((units - 150) * 5.50); // Next 100 units at ₹5.50
            break;
        default:
            billAmount = (50 * 3.50) + (100 * 4.50) + (100 * 5.50) + ((units - 250) * 6.50); // Above 250 units at ₹6.50
            break;
    }

    // Service charge: 5% if the bill is above ₹300
    let serviceCharge = (billAmount > 300) ? billAmount * 0.05 : 0;

    let totalBill = billAmount + serviceCharge; // Final bill amount

    // Using loops to simulate meter readings
    let meterReading = "";
    let i = 1;

    while (i <= units) {
        meterReading += i + " ";
        if (i % 10 === 0) meterReading += "<br>"; // New line after 10 readings
        i++;
    }

    document.getElementById("result").innerHTML = `
        <strong>Total Bill:</strong> ₹${totalBill.toFixed(2)} <br>
        <strong>Units Consumed:</strong> ${units} <br>
        <strong>Meter Readings:</strong> <br> ${meterReading}
    `;
}