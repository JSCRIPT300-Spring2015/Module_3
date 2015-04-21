var enhancedDate = function(enhancedDate) {    
    var myDate = new Date();    
    myDate.setHours(0, 0, 0, 0);

    return {    
        getDate: function() {   
            return myDate.toDateString();
        },
        setDate: function(newDate) {
            if (isNaN(Date.parse(newDate))) {
                alert(newDate + " is not a valid date.");               
            }
            else {
                var d = new Date(newDate);
                d.setHours(0, 0, 0, 0);
                myDate = d;             
            }
        },
        getDayName: function() {            
            var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var dayName =  weekday[myDate.getDay()];           
            return dayName;
        },
        getMonthName: function() {          
            var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var monthName =  month[myDate.getMonth()];             
            return monthName;
        },
        isFuture: function()
        {
            var d = new Date();
            d.setHours(0, 0, 0, 0);
            return (myDate.valueOf() > d.valueOf());             
        },
        isToday: function()
        {
            var d = new Date();
            d.setHours(0, 0, 0, 0);
            return (d.valueOf() === myDate.valueOf());                  
        }       
    };
};

var message = '';

enhancedDate.setDate(new Date());

message = enhancedDate.getDate() + ' is ' + enhancedDate.getDayName() + ' in the month of ' + enhancedDate.getMonthName();
+message += '\nIs date today: ' + enhancedDate.isToday() + '. isFuture: ' + enhancedDate.isFuture();
+console.log(message);

module.exports = message;
// export this as a Node module using the enhancedDate.js code from Module_2