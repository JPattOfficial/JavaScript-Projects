function additionFunction() {
    var result = 5 + 3;
    document.getElementById("Math").innerHTML = "The result of the addition is: " + result;
}

function subtractionFunction() {
    var apple = 3;
    var subtraction = 5 - apple;
    document.getElementById("subtractionResult").innerHTML = "5 - 3 = " + subtraction++;
}

function more_Math() {
    var num1 = 5
    var simple_Math = (1 + 2) * 10 / 2 - num--;
    document.getElementById("simple_Math_Result").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function Modulus() {
    var Mod_var = 25 % 6;
    document.getElementById("Mod_Result").innerHTML = "The modulus of 25 by 6 with an added negative is: " + -Mod_var;
}

function newFunction() {
    window.alert(Math.random() * 100);
}