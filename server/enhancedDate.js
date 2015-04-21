var myDate = function enhancedDate() {    
    'use strict';

    var theDate;
    var now;
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
        'Friday', 'Saturday'];
    var monthNames = ['Januray', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'November', 'December'];

    // explicit object enhancedDate   
    var enhancedDate = {    

        checkDate: function checkDate(userDate) {
            if (theDate instanceof Date) {
                return true; 
            } else {
                return false;    
            }
        },

        setDate: function setDate(userDate) { 
            if (userDate instanceof Date) {
                theDate = userDate;
            } else { 
                if (typeof userDate === 'number') {
                theDate = new Date(userDate);
                } else {
                    theDate = new Date();
                }
            }           
            //console.log("In set date - date = ", theDate);      
        }, 

        getDate: function getDate(userDate) {            
            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }
            //if (userDate)  {
            //    this.setDate(userDate)
            //} else {
            //    theDate = Date.now();
            // return theDate;
            //}                    
        },

        getDayName: function getDayName(userDate) {
        
            var dayNumber;
            var theDay;

            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }

            dayNumber = theDate.getDay();
            //console.log('dayNumber = ', dayNumber);
            theDay = dayNames[dayNumber];
 
        console.log("Day of the week is ", theDay);
        return theDay;
        },

        getMonthName:  function getMonthName(userDate) {
        	
            var theMonth;
            var monthNumber;

            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }

            monthNumber = theDate.getMonth();            
            theMonth = monthNames[monthNumber];

        console.log("Month is ", theMonth);
        return theMonth;

        },

        isFuture: function isFuture(userDate) {

            var now = Date.now();

            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }
            if (now > theDate.getTime()) {
                return false;
            } else {
                return true;
            }
        },

        isToday: function isToday(userDate) {

            if (!this.checkDate(userDate)) {
                this.setDate(userDate); 
            }

            var todaysDate = new Date();
            var todaysMonth = todaysDate.getDate();
            var todaysDay = todaysDate.getDay();
            var todaysYear = todaysDate.getFullYear();

            var passedMonth = theDate.getDate();
            var passedDay = theDate.getDay();
            var passedYear = theDate.getFullYear();

            if ((todaysMonth === passedMonth) && (todaysDay === passedDay) &&
                (todaysYear === passedYear)) {
                return true;
            } else {
                return false;
            }
        }

    };    

 
    };

module.exports = myDate;
//module.exports.getDate = getDate;
//module.exports.setDate = setDate;
//module.exports.getDayName = getDayName;
//module.exports.getMonthName = getMonthName;
//module.exports.isFuture = isFuture;
//module.exports.isToday = isToday;