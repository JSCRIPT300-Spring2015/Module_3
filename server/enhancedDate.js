// export this as a Node module using the enhancedDate.js code from Module_2

// code from module_2 modified for node use
var enhancedDate = function() {
    'use strict';

    //create object
    var myObject = {};
    
    //create variables
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    myObject.setDate = function(passedDate) {
        var now;

        if (passedDate) {
            if (passedDate instanceof Date) {
                now = passedDate;
            } else if (typeof (passedDate) === 'number') {
                now = new Date(passedDate);
            } else {
                now = new Date();
            }
        }else {
            //nothing passed in so get current datetime
            now = new Date();
        }

        myObject.now = now;
    };

    myObject.getDate = function(wantObject) {
        if (wantObject === true) {
            return myObject.now;
        }else {
            return myObject.now.getTime();
        }
    };

    myObject.getDayName = function() {
        var dayNumber = myObject.now.getDay();
        return daysOfWeek[dayNumber];
    };

    myObject.getMonthName = function() {
        var monthNumber = myObject.now.getMonth();

        return monthNames[monthNumber];
    };

    myObject.isFuture = function() {
        var currentTime = new Date();

        if (myObject.now > currentTime) {
            return true;
        }else {
            return false;
        }
    };

    myObject.isToday = function() {
        var currentTime = new Date();
        var currentYear = currentTime.getYear();
        var currentMonth = currentTime.getMonth();
        var currentDay = currentTime.getDay();

        var objectTime = myObject.now;
        var objectYear = objectTime.getYear();
        var objectMonth = objectTime.getMonth();
        var objectDay = objectTime.getDay();

        if (objectYear === currentYear && objectMonth === currentMonth && objectDay === currentDay) {
            return true;
        }else {
            return false;
        }
    };

    return myObject;
    /*
    return{
       myObject.now: myObject.now; 
    };
    */
    
};
module.exports = enhancedDate;