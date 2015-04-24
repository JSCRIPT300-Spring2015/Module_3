// export this as a Node module using the enhancedDate.js code from Module_2

var enhancedDate = function() {

    'use strict';
    
    var myDate = null;
    var dateSet = false;
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturaday'];
    var monthNames = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'november', 'december'];

    function setDate(date) {

        if (date instanceof Date || typeof date == "number") {
            myDate = new Date(date);
        } else {
            myDate = new Date();
        }
        
        dateSet = true;
    }

    function getDate(returnObj) {

        if (!dateSet) {
            setDate();
        }

        if (returnObj) {
            return myDate;
        } else {
            return myDate.getTime();
        }
    }

    function getDayName() {

        if (!dateSet) {
            setDate();
        }

        var day = myDate.getDay();
        return dayNames[day];
    }

    function getMonthName() {

        if (!dateSet) {
            setDate();
        }

        var month  = myDate.getMonth();
        return monthNames[month];
    }

    function isToday() {

        if (!dateSet) {
            setDate();
        }

        var today = new Date();
        var month = today.getMonth();
        var date = today.getDate();
        var year = today.getYear();

        if (myDate.getMonth() === month && myDate.getDate() === date && myDate.getYear() === year) {
            return true;
        } else {
            return false;
        }
    }

    function isFuture() {

        if (!dateSet) {
            setDate();
        }

        return myDate.getTime() > Date.now();
    }

    return {
        setDate: setDate,
        getDate: getDate,
        getDayName: getDayName,
        getMonthName: getMonthName,
        isToday: isToday,
        isFuture: isFuture
    };


};

module.exports = enhancedDate();

