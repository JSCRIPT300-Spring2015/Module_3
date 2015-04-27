var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
                        'September', 'October', 'November', 'December'];

var enhancedDate = {
    setDate: function setDate(date) {
        if (date instanceof Date || typeof date === 'number') {
            myDate = new Date(date);    // create a new date object so we can't overwrite the myDate var declared above
        } else {
            myDate = new Date();
        }
    },

    getDate: function getDate(returnObj) {
        if (returnObj) {
            return myDate;
        } else {
            return myDate.getTime();
        }
    },

    getDayNames: function getDayNames() {
    
        var day = myDate.getDay();
        
        return dayNames[day];
    },

    getMonthNames: function getMonthNames() {
    
        var month = myDate.getMonth();
        
        return monthNames[month];
    
    },

    isFuture: function isFuture() {
        return myDate.getTime() > Date.now();
    }

    //var myDate;     // keep track of a date reference to be used in methods later
    
};

module.exports.enhancedDate = enhancedDate;
module.exports.dayNames = dayNames;
module.exports.monthNames = monthNames;