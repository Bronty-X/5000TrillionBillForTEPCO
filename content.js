// content.js
var intervalId;
intervalId = setInterval(() => {
    const selectedMonth = document.getElementsByClassName('selected_month')[0];
    if (selectedMonth) {
        // Code to execute when 'selected_month' is loaded
        clearInterval(intervalId); // Stop scanning
        document.getElementsByClassName('selected_month')[0].innerText = '5000兆円';
    }
}, 500);