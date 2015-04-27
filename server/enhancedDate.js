/*  This code adoptes the enhancedDate.js code created in Module_2
    and changes it into a Node.js module format 
*/

'use strict';
    
var myDate = null;
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
            'Friday', 'Saturday'];
var monthNames = ["January" , "February" , "March" , "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December"];
var dateIsSet = false;

function setDate(date) {
    if (date instanceof Date || typeof date === 'number') {
        myDate = new Date(date);
    } else {
        myDate = new Date();
    }
    dateIsSet = true;
}

function getDate(returnObj) {
    if(!dateIsSet) {   
        setDate()
    }
    if (returnObj) {
        return myDate;
    } else {
        return myDate.getTime();
    }
}

function getDayName() {
    if(!dateIsSet) {   
        setDate()
    }

    var day = myDate.getDay();

    return dayNames[day];
}

function getMonthName() {
    if(!dateIsSet) {   
        setDate()
    }

    var month = myDate.getMonth();

    return monthNames[month];
}

function isToday() {
    if(!dateIsSet) {   
        setDate()
    }

    var today = new Date();
    var month = today.getMonth();
    var date = today.getDate();
    var year = today.getYear();

    if (myDate.getMonth() === month && myDate.getDate() === date && 
        myDate.getYear() === year) {
        return true;
    } else {
        return false;
    }
}

function isFuture() {
    if(!dateIsSet) {   
        setDate()
    }

    return myDate.getTime() > Date.now();
}         

module.exports.setDate = setDate,        
module.exports.getDate = getDate,        
module.exports.getDayName = getDayName,        
module.exports.getMonthName = getMonthName,
module.exports.isToday = isToday,
module.exports.isFuture = isFuture
