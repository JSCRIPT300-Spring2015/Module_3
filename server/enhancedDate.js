// export this as a Node module using the enhancedDate.js code from Module_2

/* 
 * This module will return an object with each of these methods defined on it. 
 * This module should have a notion of "private" data, that is data that is used only internally by the module and is not exposed aspart of the public API.
 * The module should handle the case when an API method (other than setDate) is called before a date has been set. 
 * One approach to this is to check if a date has already been set, and if not, set a new date at that time. 
 * Only the setDate method should be able to change the internally stored date after it has been set once.
*/

'use strict';

//Private data, which is data that is used only internally by the module and is not exposed as part of the public API
var privateData = {
    days : ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                 'Thursday', 'Friday', 'Saturday'],
    months : ['January', 'February', 'March', 'April', 'May',
               'June', 'July', 'August', 'September', 'October',
               'November', 'December']
};

// check if a date has already been set, and if not, set a new date at that time.
function checkHasDate(){

    if (!privateData.storedDate) {
        privateData.storedDate = new Date();
    }
}

var enhancedDate = {

        /*
         * Stores the passed-in date. This function can take milliseconds after epoch or a Date object.  
         * Do some type-checking to make sure you have a valid type. If no value is passed, default your internally stored date to now.
        */
        setDate: function setDate(inputDate) {

            checkHasDate();

            if (inputDate){

                // check if a valid date type and check if pass milliseconds
                if (Object.prototype.toString.call(inputDate) === '[object Date]' || isNaN(inputDate)) {
                    privateData.storedDate = new Date(inputDate);
                }else{
                    consolo.log("Please input valid date type.");
                }               
            }            
        },

        // Returns either milliseconds after epoch by default or a Date object if true is passed as an argument.        
        getDate: function getDate(isDateObject) {
            
            checkHasDate();            

            if (isDateObject){
               return privateData.storedDate;
            }else{
               return privateData.storedDate.getTime();
            }            
        },

        // Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.
        getDayName: function getDayName() {
            
            checkHasDate();
            return privateData.days[privateData.storedDate.getDay()];
        },

        // Return the full month name as a string, e.g. "January", "February", etc.
        getMonthName: function getMonthName() {

            checkHasDate();
            return privateData.months[privateData.storedDate.getMonth()];
        },

        // Return boolean true if date is in the future (from when method is called)
        isFuture: function isFuture() {
            
            checkHasDate();
            return privateData.storedDate > Date.now();
        },

        // Return boolean true if the stored date is "today".
        isToday: function isToday() {

            checkHasDate();
            return privateData.storedDate.toDateString() === new Date().toDateString();
        }
    
};


module.exports = enhancedDate;
