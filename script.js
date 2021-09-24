var timeDisplayEl = $('#currentDay')
// function to display the time
displayTime();
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
};
// onClick function for each of the save buttons
$('#save1').on("click", function() {
    var value = $('#9AM').val();
    localStorage.setItem('9AM', value);
});
$('#save2').on("click", function() {
    var value = $('#10AM').val();
    localStorage.setItem('10AM', value);
});
$('#save3').on("click", function() {
    var value = $('#11AM').val();
    localStorage.setItem('11AM', value);
});
$('#save4').on("click", function() {
    var value = $('#12AM').val();
    localStorage.setItem('12AM', value);
});
$('#save5').on("click", function() {
    var value = $('#1PM').val();
    localStorage.setItem('1PM', value);
});
$('#save6').on("click", function() {
    var value = $('#2PM').val();
    localStorage.setItem('2PM', value);
});
$('#save7').on("click", function() {
    var value = $('#3PM').val();
    localStorage.setItem('3PM', value);
});
$('#save8').on("click", function() {
    var value = $('#4PM').val();
    localStorage.setItem('4PM', value);
});
$('#save9').on("click", function() {
    var value = $('#5PM').val();
    localStorage.setItem('5PM', value);
});
$('#save10').on("click", function() {
    var value = $('#6PM').val();
    localStorage.setItem('6PM', value);
});
$('#save11').on("click", function() {
    var value = $('#7PM').val();
    localStorage.setItem('7PM', value);
});
// variables to check the time for row coloring
var textArea = $('textarea');
var nine = moment(9, "H").isBefore();
var ten = moment(10, "H").isBefore();
var eleven = moment(11, "H").isBefore();
var twelve = moment(12, "H").isBefore();
var one = moment(13, "H").isBefore();
var two = moment(14, "H").isBefore();
var three = moment(15, "H").isBefore();
var four = moment(16, "H").isBefore();
var five = moment(17, "H").isBefore();
var six = moment(18, "H").isBefore();
var seven = moment(19, "H").isBefore();
var times = [nine, ten, eleven, twelve, one, two, three, four, five, six, seven];
// the current hour of the day
var currentHour = moment().format('h');
// creates array of each of the time slots
var hoursInDay = $('span');
// loops through each of the rows and adds the color based on what time it is
textArea.each(function(i) {
    var tempT = times[i];
    var tempH = hoursInDay[i].innerHTML;
    if (tempH == currentHour) {
        $(this).toggleClass("present");
    } else if (tempT) {
        $(this).toggleClass("past");
    } else {
        $(this).toggleClass("future");
    }
});
function init() {
    allStorage();
    // pulls all of the local storage to post the schedule on the page
    function allStorage() {
        var values = [];
        var keys = Object.keys(localStorage)
        , i = keys.length;
    
        while ( i-- ) {
            var temp = localStorage.getItem(keys[i]);
            // var final = keys[i] + ', ' + temp
            values.unshift( temp );
        }
        setValues(values, keys);
        return values;
    }
};
function setValues(values, keys) {
    for (var i = 0; i < keys.length; i++) {
        $('#'+keys[i]).val(values[i]);
    }
};
// runs the init function to start the page
init()
// keeps the time at the top of the page up to date
setInterval(displayTime, 1000);