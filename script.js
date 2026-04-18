// script.js

// Function to display the current date and time
function displayCurrentDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
    dateTimeElement.innerText = `Current Date and Time: ${formattedDate}`;
}

// Function to handle car rental
function rentCar(carId) {
    // Functionality to rent a car
    console.log(`Car with ID ${carId} has been rented.`);
}

// Call displayCurrentDateTime on page load
window.onload = function() {
    displayCurrentDateTime();
};
