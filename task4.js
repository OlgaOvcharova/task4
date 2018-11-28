
function secondsIntoMinutes(second){
    var minute = second/60;
    return minute;
}

function minutesIntoDegree(minute){
    var degree = minute/60;
    return degree;
}

function degreeIntoRadians(degree){
    var radian = degree * Math.PI / 180;
    return radian;
}

function myfunc() {

    var second = document.getElementById("second").value;
    var minute = document.getElementById("minute").value;
    var degree = document.getElementById("degree").value;

    var result;

    if (second != null){
        result = degreeIntoRadians(minutesIntoDegree(secondsIntoMinutes(second)));
    };

    if (minute != null){
        result = degreeIntoRadians(minutesIntoDegree(minute));
    };

    if (degree != null){
        result = degreeIntoRadians(degree);
    };

    document.getElementById("p1").innerHTML = result;
}
