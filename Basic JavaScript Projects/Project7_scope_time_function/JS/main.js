function show_Date() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML = "It is a beautiful day out!";
    }
    else {
        document.getElementById("Greeting").innerHTML = "It is a nice night outside!";
    }
}

function Age_Function() {
    var Age = document.getElementById("Age").value;
    var Vote;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you").innerHTML = Vote;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time > 0 && Time < 12) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}