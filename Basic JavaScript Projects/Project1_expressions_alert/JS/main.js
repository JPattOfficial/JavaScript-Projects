alert("Are you sure you wish to continue to this site?")
window.alert("Alert! Alert! Alert! This is an alert message!")
document.write("This page conatians warnings and alerts. Please proceed with caution.")

var A = " First Alert";
document.write(A);

var B = "<br> <br> \"In war, truth is the first casualty\" <br>"
+ " - Aeschylus";
document.write(B);

var C = "<br><br>Concatenated" + " String";
document.write(C);

var Family = "The Smiths", Dad = "<br>John", Mom = "Jane", Daughter = "Jill", Son = "Jack";
document.write(Dad);

document.write(3 + 3);


//The code below creates a simple button on the webpage
function My_First_Function() {
    var str = "This is the button text";
    document.getElementById("Button_Text").innerHTML = str;
}