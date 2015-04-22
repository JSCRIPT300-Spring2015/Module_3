// export this as a Node module using the enhancedDate.js code from Module_2


  
 'use strict';
  
  var theDate = {
    time: new Date(),
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
           'Friday', 'Saturday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June',
             'July', 'August', 'September', 'October', 'November',
             'December'],
    
  };
  
 
  
    var setDate = function (d) {
      
      if (!(d instanceof Date)) {
          theDate.time = new Date();
      } else {
        theDate.time = new Date(d);
      }
          return theDate.time;
    };
    
    var getDate = function (param) {
      var gDate;
      if (param === true) {
        gDate = theDate.time;
      }  else {
        gDate = theDate.time.getTime();
      }
      return gDate;
     };
    
    var getDayName = function () {
      var dayI = theDate.time.getDay();
      var day = theDate.days[dayI];
      return day;
     };
    
    var getMonthName = function () {
      var monthI = theDate.time.getMonth();
      var month = theDate.months[monthI];
      return month;
     };
    
    var isFuture = function () {
      var now = new Date();
      if (theDate.time.getTime() > now) {
        return true;
      }  else {
        return false;
      }
     };
    
    var isToday = function isToday() {
      var today = new Date();
      if (today.getYear() === theDate.time.getYear() && 
          today.getMonth() === theDate.time.getMonth() &&
          today.getDay() === theDate.time.getDay()) {
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
  
    
  


    