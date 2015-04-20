// export this as a Node module using the enhancedDate.js code from Module_2


'use strict';
var dateObjects = {
  dateTime: '',
  monthNames: ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'],
  dayNames: ['Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'],
  milsDay: 86400000
};

var now = function () {
  return new Date();
};

var setDate = function (e) {
    if (e instanceof Date) {
      dateObjects.dateTime = e;
    }
    else if (!isNaN(e)) {
      dateObjects.dateTime = new Date(e);
    }
    else if (e === undefined) {
      dateObjects.dateTime = new Date();
    }
    else {
      console.warn('argument is not instanceof Date or epoch');
    }
    return dateObjects.dateTime;
};

var getDate = function (e) {
    var time = dateObjects.dateTime;

    // set current time if dateObject.date is undefined
    if (time === undefined || !(time instanceof Date))  {
      dateObjects.dateTime = now();
      time = dateObjects.dateTime;
    }

    if (e !== true) {
      time = dateObjects.dateTime.getTime();
    }
    return time;
};

var getDayName = function () {
  var day = dateObjects.dateTime.getDay();
  return dateObjects.dayNames[day];
};

var getMonthName = function () {
  var month = dateObjects.dateTime.getMonth();
  return dateObjects.monthNames[month];
};

var isFuture = function () {
  if (now().getTime() < dateObjects.dateTime.getTime()) {
    return true;
  }
  else {
    return false;
  }
};

var isToday = function () {
  var year = now().getFullYear();
  var month = now().getMonth();
  var day = now().getDate();
  var nextDay = new Date(year, month, day).getTime() + dateObjects.milsDay;
  var currentDay = new Date(year, month, day).getTime();
  var time = dateObjects.dateTime.getTime();
  if (time < nextDay && time >= currentDay) {
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

