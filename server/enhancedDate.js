var enhancedDate = (function (date) {
// still maintains access to all globals
  
  var exports = module.exports = {};

//Stores the passed-in date.  
  exports.setDate = function (date) {
      var myDate = date;
    
//Do some type-checking to make sure you have a valid type.    
      if(typeof myDate !== null)
      {
//Takes milliseconds after epoch or a date object. 
        
//Do some type-checking to make sure you have a valid type. 
        if (typeof myDate == Date() || typeof myDate == "number"){
          myDate = date;
        } else {
          myDate = false;
        } 
      }
      else{
        
//If no value is passed, default to now.       
        setDate = Date(year, month, day, hours, minutes, seconds, milliseconds);
      }
  
      return myDate;
  };


//Returns either milliseconds after epoch by default or a date object if true is passed as an argument.            
  exports.getDate = setDate.getTime();

//Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.  
  exports.getDayName = function () {
      switch (setDate.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    
    return;
    
    };
  
//Determines the full month name as a string, e.g. "January", "February", etc.  
  exports.getMonthName = function () {
    switch (setDate.getMonth()) {
        case 0:
            day = "January";
            break;
        case 1:
            day = "February";
            break;
        case 2:
            day = "March";
            break;
        case 3:
            day = "April";
            break;
        case 4:
            day = "May";
            break;
        case 5:
            day = "June";
            break;
        case 6:
            day = "July";
            break;
        case 7:
            day = "August";
            break;
        case 8:
            day = "September";
            break;
        case 9:
            day = "October";
            break;
        case 10:
            day = "November";
            break;
        case 11:
            day = "December";
            break; 
    }
    return;
  };
  
//Return boolean true if date is in the future (from when method is called)  
  exports.isFuture = function () {
    var today = new Date();
    
    if (setDate.Date() > today) {
      return true;
    } else {
      return false;
    }
  };
  
//Return boolean true if the stored date is "today".  
  exports.isToday = function () {
    var today = new Date();
    
    if (setDate.Date() === today) {
      return true;
    } else {
      return false;
    }
  };
	
}());



