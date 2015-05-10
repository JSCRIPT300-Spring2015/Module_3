// make this a simple http server that writes to the response stream object

// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:

// list the food trucks returned by filterByDay, passing in the current day name.
// e.g. filterByDay(day); where "day" is determined using the enhancedDate module
// The list of trucks returned will be an array of food truck objects. Iterate
// through the list, building up a string of food truck names. Once you're done
// iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.

var http = require('http');
var enhancedDate = require('./enhancedDate')
var filterByDay = require('./trucks');

http.createServer(function (request, response) {
  var currentDay = enhancedDate.getDayName();
  var currentMonth = enhancedDate.getMonthName();
  var today = new Date()
  var date = today.getDate();
  var trucks = filterByDay(currentDay);
  var truckHTML = '<ul>';
  var i;
  var l;
  trucks.forEach(function (truck){
     truckHTML += '<li>' + truck.name + '</li>';
  });
  truckHTML += '</ul>';

  response.writeHead(200, { 'Content-Type': 'text/html'});
  response.write('<h3>Today is ' + currentDay+ ' ' + currentMonth + ' ' + date + '.  Here are the available food trucks:</h3>' );
  response.write(truckHTML);
  response.end();

}).listen(3000, function(){
  console.log('listening on port 3000');
});
