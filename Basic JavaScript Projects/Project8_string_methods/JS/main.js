function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function case_Method() {
    var originalText = "Hello, World!";
    var upperCaseText = originalText.toUpperCase();
    document.getElementById("case").innerHTML = upperCaseText;
}

function search_Method() {
    var text = "I love programming in JavaScript!";
    var searchTerm = /programming/i;
    var result = text.search(searchTerm);
    document.getElementById("Search").innerHTML = result;
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function showFixedNumber() {
    var num = 3.14159;
    var fixedNum = num.toFixed(2);
    document.getElementById("toFixedResult").innerHTML = fixedNum;
}

function showPrimitiveValue() {
    var numObj = new Number(42);
    var numPrimitive = numObj.valueOf();
    document.getElementById("valueOfResult").innerHTML = numPrimitive;
}
  