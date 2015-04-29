/* 
 * add your module definition for enhancedDate here
 * assign the module to a global variable
 * Date object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 *
 *
 * setDate: Stores the passed-in date. 
 * Takes milliseconds after epoch or a date object. 
 * Do some type-checking to make sure you have a valid type. 
 * If no value is passed, default to now
 *
 * getDate: Returns either milliseconds after epoch by default 
 * or a date object if true is passed as an argument.
 *
 * getDayName: Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.
 *
 * getMonthName: Return the full month name as a string, e.g. "January", "February", etc.
 *
 * isFuture: Return boolean true if date is in the future (from when method is called)
 *
 * isToday: Return boolean true if the stored date is "today".
 */

//var enhancedDate = (function () {
    // private data variables
    var myDate;
    
    var setDate = function (dateItem) {
        //console.log("setDate");
        if (dateItem === undefined) {
            myDate = new Date();
        } else {
            myDate = new Date(dateItem);
        }
    };
    
    var getDate = function (dateItem) {
        //console.log("getDate");
        //console.log("mydate: " + myDate);
        if (dateItem) {
            return myDate;
        } else {
            return Date.UTC(myDate);
        }
    };
        
    var getDayName = function () {
        //console.log("getDayName");
        var day = myDate.getDay();
        switch (day) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
        }
    };
        
    var getMonthName = function () {
        //console.log("getMonthName");
        var month = myDate.getMonth();
        switch (month) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
        }
    };
        
    var isFuture = function () {
        //console.log("isFuture");
        var now = Date.now();
        if (myDate > now) {
            return true;
        } else {
            return false;
        }
    };
        
    var isToday = function () {
        //console.log("isToday");
        var now = Date.now();
        if (this.getDate(myDate) == this.getDate(now)) {
            return true;
        } else {
            return false;
        }
    };
    
        
module.exports.setDate = setDate;
module.exports.getDate = getDate;
module.exports.getDayName = getDayName;    
module.exports.getMonthName = getMonthName;
module.exports.isFuture = isFuture;
module.exports.isToday = isToday;


