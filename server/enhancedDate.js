//Tyler Waite Module 3 enhanced date module version 1.0.0 4/28/2015.  Updated with James in class version from week 5

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
var myDate = null;  
var dateIsSet = false;
  
function setDate(date) {
  
  if (date instanceof Date || typeof date === 'number') {
    myDate = new Date(date);
  } else {
    myDate = new Date();
  }
}

function getDate(returnObj) {
  
  if (!dateIsSet) {
        setDate();
  }
  
  if (returnObj) {
        return myDate;
  } else {
      return myDate.getTime();
  }
} 

function getDayName() {
  if (!dateIsSet) {
    setDate();
  }
//  var day = myDate.getDay();
  
  return dayNames[myDate.getDay()];
}  
  
function getMonthName(){
  if (!dateIsSet) {
    setDate();
  }
  
//  var month = myDate.getMonth();
  
  return monthNames[myDate.getMonth()];
}

function isToday() {
  if (!dateIsSet) {
    setDate();
  }
  
  var today = new Date();
//  var month = today.getMonth();
//  var date = today.getDate();
//  var year = today.getYear();
  
  if (today.getMonth() === myDate.getMonth() && today.getYear() === myDate.getYear() && today.getDate() === myDate.getDate()) {
      return true;
  } else {
      return false;
  }
}
  
function isFuture() {
  if (!dateIsSet) {
    setDate();
  }
  
  var now = new Date();
  return myDate > now;
}  
  
module.exports = {
  setDate: setDate,
  getDate: getDate,
  getDayName: getDayName,
  getMonthName: getMonthName,
  isToday: isToday,
  isFuture: isFuture
};

