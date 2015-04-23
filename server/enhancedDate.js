var enhancedDate = function iife() {    
    'use strict';

    var theDate;
    var now;
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
        'Friday', 'Saturday'];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'November', 'December'];
    var dateSet = false;
    // explicit object enhancedDate      

    //function checkDate(userDate) {
    //      if (theDate instanceof Date) {
    //            return true; 
    //        } else {
    //            return false;    
    //        }
    //    },

     function setDate(userDate) { 
        if (userDate instanceof Date) {
            theDate = new Date(userDate);
        } else { 
            if (typeof userDate === 'number') {
                theDate = new Date(userDate);
            } else {
                theDate = new Date();
            }
        } 
        dateSet = true;          
            //console.log("In set date - date = ", theDate);      
    } 

     function getDate(returnObj) {            
        if (!dateSet) {
           setDate();
        }

        if (returnObj) {
            return theDate;
        } else {
            return theDate.getTime();
        }
                              
    }

    function getDayName() {
        
        if (!dateSet) {
            setDate(); 
        }

        var dayNumber;
        var theDay;

        dayNumber = theDate.getDay();
        //console.log('dayNumber = ', dayNumber);
        theDay = dayNames[dayNumber];
 
        console.log("Day of the week is ", theDay);
        return theDay;
        }

    function getMonthName() {
        	
        if (!dateSet) {
            setDate(); 
        }        

        var theMonth;
        var monthNumber;

        monthNumber = theDate.getMonth();            
        theMonth = monthNames[monthNumber];

        console.log("Month is ", theMonth);
        return theMonth;

    }

    function isFuture() {

        if (!dateSet) {
            setDate(); 
        }        

        now = Date.now();

        if (now > theDate.getTime()) {
            return false;
        } else {
            return true;
        }
    }

    function isToday() {

        if (!dateSet) {
            setDate(); 
        }

        var todaysDate = new Date();
        var todaysMonth = todaysDate.getMonth();
        var todaysDate1 = todaysDate.getDate();
        var todaysYear = todaysDate.getYear();

         if ((todaysMonth === theDate.getMonth()) && (todaysDate1 === theDate.getDate()) &&
            (todaysYear === theDate.getYear())) {
            return true;
        } else {
            return false;
        }
    }

};
//return {
//    setDate: setDate,
//    getDate: getDate,
//    getDayName: getDayName,
//    getMonthName: getMonthName,
//    isFuture: isFuture,
//    isToday: isToday
//};

module.exports = enhancedDate;