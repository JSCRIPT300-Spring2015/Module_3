var enhancedDate = (function iife() {
    
    // private functions
    var publicAPI = {
        setDate: function setDate(userDate) {
            // Set working date to user input if date object given
            if (userDate instanceof Date) {
                var workingDate = userDate;
            } else {
                var workingDate = new Date();
            }

            return workingDate;
        },

        getDate: function getDate(asDateObj) {
            // return date object if requested
            if (asDateObj === true) {
                return workingDate;
            } else {
            // return milliseconds after 1970 by default
                
                return workingDate.getTime();
            }
        },

        getDayName: function getDayName() {
            // return weekday name string

            // define lookup for weekday value to name
            var weekday = { 0: 'Sunday',
                            1: 'Monday',
                            2: 'Tuesday',
                            3: 'Wednesday',
                            4: 'Thursday',
                            5: 'Friday',
                            6: 'Saturday'};

            return weekday[workingDate.getDay()];
        },

        getMonthName: function getMonthName() {
            // return month name string

            // define lookup for month value to name
            var month = {   0: 'January',
                            1: 'February',
                            2: 'March',
                            3: 'April',
                            4: 'May',
                            5: 'June',
                            6: 'July',
                            7: 'August',
                            8: 'September',
                            9: 'October',
                            10: 'November',
                            11: 'December'};

            return month[workingDate.getMonth()];
        },

        isFuture: function isFuture() {
            // Check if date val is greater than current date val

            // Test if user's working date is in future or not
            if (workingDate > new Date()) {
                return true;
            } 
        },

        isToday: function isToday() {
            if (workingDate.getDay() === new Date().getDay()) {
                return true
            }
        }
    };

    return publicAPI;
    
})();


