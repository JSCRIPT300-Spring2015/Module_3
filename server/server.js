// make this a simple http server that writes to the response stream object

// the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:

// list the food trucks returned by filterByDay, passing in the current day name.
// e.g. filterByDay(day); where "day" is determined using the enhancedDate module
// The list of trucks returned will be an array of food truck objects. Iterate 
// through the list, building up a string of food truck names. Once you're done 
// iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.

// import modules
var http = require('http');
var trucks = require('./trucks')
var enhancedDate = require('./enhancedDate')

// start a server
http.createServer(function (request, response) {

	// Access day name as a string using enhancedDate
	
	// Set day to current day (when server is called)
	enhancedDate.enhancedDate.setDate();
	dayString = enhancedDate.enhancedDate.getDayNames();

	// list all trucks available on today's date
    truckList = trucks.filterTrucks.filterByDay(dayString);
    for (truck in truckList)
    	response.write(truckList[truck] + '\n');
    response.end();
}).listen(3000, function () {
    console.log('listening on port 3000');
});