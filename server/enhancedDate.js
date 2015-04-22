'use strict';

// Private data, not accessible outside the enhancedDate module
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
            'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
            'August', 'September', 'October', 'November', 'December'];
var date;

// check if date has been set, otherwise create a new date object
function hasDate() {
    
    if (!date) {
        date = new Date();
    }
};

// Methods availabls as a public API    
// setDate allows users to change the date without touching our hidden date variable
var setDate = function setDate(dateValue) {

    hasDate();
    if (typeof dateValue === 'number' || dateValue instanceof Date) {
        date = new Date(dateValue);
    }
};

// getDate returns the value of date: epoch by default, object if true is passed
var getDate = function getDate(returnObject) {

    hasDate();
    return returnObject === true ? date : date.getTime();
};

// getDayName returns the name of the date's day, based on the days array
var getDayName = function getDayName() {

    hasDate();
    return days[date.getDay()];
};

// getMonthName returns date's month's name, based on the months array
var getMonthName = function getMonthName() {

    hasDate();
    return months[date.getMonth()];
};

// isFuture compares the set date to the actual time at the moment,
// returns true if date is in the future
var isFuture = function isFuture() {

    hasDate();
    return (date > Date.now());
};

// isToday sets up a function that pulls the numerical year, month and day
// from a Date object, then compares the set date to today's date,
// returns true if set date has the same year, month and day
var isToday = function isToday() {

    hasDate();
    var today = new Date();

    function makeString(startValue) {

        return '' + startValue.getFullYear() + startValue.getMonth() + startValue.getDate();
    }
    return (makeString(date) === makeString(today));
};

module.exports.setDate = setDate;
module.exports.getDate = getDate;
module.exports.getDayName = getDayName;
module.exports.getMonthName = getMonthName;
module.exports.isFuture = isFuture;
module.exports.isToday = isToday;
