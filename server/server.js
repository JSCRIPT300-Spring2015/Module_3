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
var today = {
	name: enhancedDate.getDayName(),
	month: enhancedDate.getMonthName(),
	date: enhancedDate.getDate(true).getDate()
};
var todayTrucks = trucks(today.name);
var trucksList = '';

todayTrucks.forEach(function toString(truck) {

	trucksList += truck.name + '\n';
});

http.createServer(function (request, response) {

	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.write('Today is ' + today.name + ', ' +
			today.month + ' ' + today.date);
	response.write('\n\n');
	response.write(trucksList);
	response.end();
}).listen(3000, function () {
	console.log('listening on port 3000');
});
