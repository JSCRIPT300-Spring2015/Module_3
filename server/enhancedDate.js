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

var enhancedDate = (function () {
    // private data variables
    var myDate;
    
    function setDate(dateItem) {
        console.log("setDate");
        if (dateItem === undefined) {
            myDate = new Date();
        } else {
            myDate = new Date(dateItem);
        }
    };
    
    function getDate(dateItem) {
        console.log("getDate");
        if (dateItem) {
            return myDate;
        } else {
            return Date.UTC(myDate);
        }
    };
        
    function getDayName() {
        console.log("getDayName");
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
        
    function getMonthName() {
        console.log("getMonthName");
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
        
    function isFuture() {
        console.log("isFuture");
        var now = Date.now();
        if (myDate > now) {
            return true;
        } else {
            return false;
        }
    };
        
    function isToday() {
        console.log("isToday");
        var now = Date.now();
        if (this.getDate(myDate) == this.getDate(now)) {
            return true;
        } else {
            return false;
        }
    };
    
    
    return {
        // public methods and properties
        
        setDate: setDate,
        getDate: getDate,
        getDayName: getDayName,    
        getMonthName: getMonthName,
        isFuture: isFuture,
        isToday: isToday
    }

}) ();

/******
// Testing
var today = new Date();
console.log("today: " + today);
enhancedDate.setDate();
console.log("setDate");
enhancedDate.setDate(today);
console.log("setDate(today)");
enhancedDate.setDate(86400000);
console.log("setDate(86,400,000)" + new Date(86400000));
enhancedDate.getDate(true);
console.log(enhancedDate.getDate(true));
console.log("getDate(true)");
enhancedDate.getDate();
console.log(enhancedDate.getDate());
console.log("getDate()");
enhancedDate.setDate();
enhancedDate.getDayName();
console.log(enhancedDate.getDayName());
enhancedDate.getMonthName();
console.log(enhancedDate.getMonthName());
enhancedDate.isFuture();
console.log(enhancedDate.isFuture());
enhancedDate.isToday();
console.log(enhancedDate.isToday());

// suggested testing
var message = ''; 

enhancedDate.setDate(new Date()); 

message += 'Today is ' + enhancedDate.getDayName() + ' in the month of ' + enhancedDate.getMonthName(); 

console.log(message); 
*******/