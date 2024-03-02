// Get the button element and input element
var b = document.getElementById("btn");
var p = document.querySelector("input");
//displaying the current year
document.querySelector("span").textContent = new Date().getFullYear();
//after clicking the button
b.onclick=() => {
    var existingMessageContainer = document.getElementById("message-container");
    if (existingMessageContainer) {
        existingMessageContainer.remove();
    }
        messageContainer = document.createElement("p");
        messageContainer.id = "message-container";
    const d=document.querySelector("div");
        d.appendChild(messageContainer);
   try{
    // Parse the value entered in the input field as an integer
    var m=parseInt(p.value);
    // Check if the entered value is a valid number
    if (isNaN(m)){
        throw new Error("Invalid input! Please enter a number");
    }
    // Check if the entered value is within the specified range
    if(m>101){
        throw new Error("Invalid input! Please enter a number less than 101");
    }
    else if(m<0){
        throw new Error("Invalid input! Please enter a number greater than 0");
    }
    else if(m>90)
    {
        messageContainer.innerText="Grade A ";
    }
    else if(m>80)
    {
        messageContainer.innerText="Grade B ";
    }
    else if(m>70)
    {
        messageContainer.innerText="Grade C ";
    }
    else if(m>50)
    {
        messageContainer.innerText="Grade D ";
    }
    else{
        messageContainer.innerText="Grade F ";
    }
   }
   catch(err){
     // Display any errors occur during input validation
    messageContainer.innerText=err.message;
   }
}
