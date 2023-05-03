document.write(`10${5}`);

var num4 = 5;
var str4 = "20";
var bool4 = true;

document.write(typeof num4);
document.write(typeof str4);
document.write(typeof bool4);
document.write(2 + 2);
document.write(num4 + str4);

function myNaN() {
    document.write("This is a string");
}

document.write(2E310);
document.write("<br>");
document.write(-3E310);
document.write("<br>");
document.write(typeof (10 > 2 && 10 > 4));
document.write("<br>");
document.write(typeof (10 + 5 == 15));
document.write("<br>");
document.write(typeof (10 === 5 + 5));
document.write("<br>");
document.write(typeof (10 === "five" + 5));
document.write("<br>");
document.write(typeof (10 === false));
document.write("<br>");
document.write(typeof (str4 === num4));
document.write("<br>");
document.write(typeof (10 && 5 > 10));
document.write("<br>");
document.write(typeof (10 || 5 > 10));
document.write("<br>");
document.write(typeof (10 | 5 > 10));
document.write("<br>");