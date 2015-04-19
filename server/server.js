// make this a simple http server that writes to the response stream object

// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:

// list the food trucks returned by filterByDay, passing in the current day name.
// e.g. filterByDay(day); where "day" is determined using the enhancedDate module
// The list of trucks returned will be an array of food truck objects. Iterate
// through the list, building up a string of food truck names. Once you're done
// iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.
'use strict';
var http = require('http');
var enhancedDate = require('./enhancedDate');
var trucks = require('./trucks');
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  var dayName = enhancedDate.getDayName();
  var monthName = enhancedDate.getMonthName();
  var truckList = trucks.filterByDay(dayName);
  var stringHead = 'Today is ' + dayName + ', ' + monthName + ' ' +'. Here are the available food trucks:\n\n';
  var truckString = '';
  var daysString;

  for (var i = 0 ; i < truckList.length; i++) {
    daysString = truckList[i].schedule.toString();
    truckString = '\tName: ' + truckList[i].name + '\n\t' + 'Type: ' +
      truckList[i].type + '\n\tDays Open: ' + daysString + '\n\n' + truckString;
  }
  response.write(stringHead + truckString);
  response.end();
}).listen(80, function () {
  console.log('listening on port 80');
});