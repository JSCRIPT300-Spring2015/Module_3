// export this as a Node module using the enhancedDate.js code from Module_2

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var myDate = null;
var dateIsSet = false;

function setDate(date) {
    if (date instanceof Date || typeof date === 'number') {
        myDate = new Date(date)
    } else {
        myDate = new Date();
    }
}

function getDate(returnObj) {
    if (!dateIsSet) {
        setDate();
    }
    if (returnObj) {
        return myDate;
    } else {
        return myDate.getTime();
    }
}

function getDayName() {
    return dayNames[myDate.getDay()];
}

function getMonthName() {
    return monthNames[myDate.getMonth()];
}

function isToday() {
    var today = new Date;
    if (today.getMonth === myDate.getMonth() && today.getYear === myDate.getYear && today.getDate === myDate.getDate()) {
        return = true; 
    } else {
        return false;
    }
}

function is Future() {
    var now = new Date;
    return myDate > now;
}

module.exports = {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isToday: isToday,
    isFuture: isFuture  
};