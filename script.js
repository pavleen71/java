
// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the h1 element with the name "PAVLEEN KAUR"
    var nameElement = document.querySelector('#name');


    // Set a timeout function to execute after 10 seconds
    setTimeout(function() {
        // Change the innerHTML of the h1 element to display the name of the picture
        nameElement.innerHTML = "PAVLEEN KAUR";
    }, 10000); // 10 seconds in milliseconds
});
document.querySelector("span").textContent = new Date().getFullYear();