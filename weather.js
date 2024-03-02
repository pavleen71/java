$(document).ready(function(){
    $("button").click(function()
    {
         // Clear previous messages and temperature values
        $("#message").text(" ");
        $("#celsius").text(" ");
        $("#kelvin").text(" ");
      var input=$("input").val();
      //converting input to integer
    var Fahrenheit=parseFloat(input);
    if(isNaN(Fahrenheit))
    {
        $("#message").text("Please enter a valid number!");
       
    }
    else {
         // Convert Fahrenheit to Celsius and Kelvin and displaying output to 2 decimal places 
     var celsius=degreeCelsius(Fahrenheit);
     $("#celsius").text("Temperature in Celsius is " + celsius.toFixed(2)+ "° C ");
     $("#kelvin").text("Temperature in Kelvin is " + kelvin(celsius).toFixed(2)+ "K ");
    }
});
});
// named and anonymous function 
function degreeCelsius(f){
   var c= (f - 32) * 5 / 9;
return c;
}
// function taking parameter 
var kelvin=function (c){
    var k= c+273.15;
    return k;
}
document.querySelector("span").textContent = new Date().getFullYear();