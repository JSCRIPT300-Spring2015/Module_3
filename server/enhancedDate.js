/* 
 * add your module definition for enhancedDate here
 * assign the module to a global variable
*/

'use strict';

//Private data
var dateData = {
  weekday : ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
               'Thursday', 'Friday', 'Saturday'],
  month : ['January', 'February', 'March', 'April', 'May',
             'June', 'July', 'August', 'September', 'October',
             'November', 'December']
};

//Private function
function isDateSet(){
  if(!Date.parse(dateData.date)) {
    dateData.date = new Date();
  }
}

/* setDate: Stores the passed-in date. Takes milliseconds after epoch or a 
date object. Do some type-checking to make sure you have a valid type. If 
no value is passed, default to now.*/
var setDate = function (inDate) {
  var date = new Date(inDate);
  if(Date.parse(date)){
    dateData.date = date;
  } else if(!isNaN(date)){
    dateData.date = new Date(date);
  } else if(date === undefined){
    dateData.date = new Date();
  }
  else {
    console.log('Not a valid date format. Will default to now.');
  }
  return dateData;
};
/* getDate: Returns either milliseconds after epoch by default or a date 
object if true is passed as an argument.*/
var getDate = function(returnObject) {
  isDateSet();
  if(returnObject) {
    return dateData.date;
  } else {
    return dateData.date.getTime();
  }
};
/* getDayName: Returns the full day name as a string, e.g. "Monday", 
"Tuesday", etc.*/
var getDayName = function() {
  isDateSet();
  return dateData.weekday[dateData.date.getDay()];
};
/* getMonthName: Return the full month name as a string, e.g. 
"January", "February", etc.*/
var getMonthName = function() {
  isDateSet();
  return dateData.month[dateData.date.getMonth()];
};
/* isFuture: Return boolean true if date is in the future
 (from when method is called)*/
var isFuture = function() {
  isDateSet();
  var now = new Date();
  var isFuture = dateData.date.getTime() > now.getTime();
  return isFuture;
};
// isToday: Return boolean true if the stored date is "today".
var isToday = function() {
  isDateSet();
  var today = new Date();
  var isToday = dateData.date.getDay() === today.getDay();
  return isToday;
};

var enhancedDate = {
  setDate: setDate,
  getDate: getDate,
  getDayName: getDayName,
  getMonthName: getMonthName,
  isFuture: isFuture,
  isToday: isToday
};

module.exports = enhancedDate;
/*
console.log(enhancedDate.getDate());
console.log(enhancedDate.getDate(true));
console.log(enhancedDate.getDayName());
console.log(enhancedDate.getMonthName());
console.log(enhancedDate.isFuture());
console.log(enhancedDate.isToday());

enhancedDate.setDate(new Date());
console.log(enhancedDate.getDate());
console.log(enhancedDate.getDate(true));
console.log(enhancedDate.getDayName());
console.log(enhancedDate.getMonthName());
console.log(enhancedDate.isFuture());
console.log(enhancedDate.isToday());

enhancedDate.setDate(new Date('4/13/2013'));
console.log(enhancedDate.getDate());
console.log(enhancedDate.getDate(true));
console.log(enhancedDate.getDayName());
console.log(enhancedDate.getMonthName());
console.log(enhancedDate.isFuture());
console.log(enhancedDate.isToday());

enhancedDate.setDate(new Date('4/13/2016'));
console.log(enhancedDate.getDate());
console.log(enhancedDate.getDate(true));
console.log(enhancedDate.getDayName());
console.log(enhancedDate.getMonthName());
console.log(enhancedDate.isFuture());
console.log(enhancedDate.isToday());

enhancedDate.setDate(new Date('do/'));
console.log(enhancedDate.getDate());
console.log(enhancedDate.getDate(true));
console.log(enhancedDate.getDayName());
console.log(enhancedDate.getMonthName());
console.log(enhancedDate.isFuture());
console.log(enhancedDate.isToday());

enhancedDate.setDate(new Date('12/21/2014'));
console.log(enhancedDate.getDate());
console.log(enhancedDate.getDate(true));
console.log(enhancedDate.getDayName());
console.log(enhancedDate.getMonthName());
console.log(enhancedDate.isFuture());
console.log(enhancedDate.isToday());
*/