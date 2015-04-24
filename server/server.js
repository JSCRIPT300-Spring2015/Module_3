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
var date = require('./enhancedDate');
var filterByDay = require('./trucks');
var _ = require('underscore');

var message = "Today is " + date.getDayName() + ", " + date.getMonthName() + " " + 
		date.getDate(true).getDate() + ". The food trucks available are: \n\n";   

var trucksToday = filterByDay(date.getDayName());

var getTrucksName = _.map(trucksToday, function(truck){ 

	return truck.name;
});


function handleRequest(request, response) {

	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.write(message);
	response.write(getTrucksName.join('\n\n'));
	response.end();
}


http.createServer(handleRequest).listen(3000, function () {
	console.log('listening on port 3000');
});


