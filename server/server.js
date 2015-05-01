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
var enhancedDate = require('./enhancedDate');
var trucks = require('./trucks');

var todayTrucks = trucks(enhancedDate.getDayName());

var todayTruckAre= '';
for (var i = 0; i < todayTrucks.length; i++){	
	todayTruckAre += todayTrucks[i].name + '\n';
}

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Today is ' + enhancedDate.getDayName() + ', ' + enhancedDate.getMonthName() + ' ' + enhancedDate.getDate(true).getDate() + '. Here are the available food trucks: \n' + todayTruckAre);
    response.end();
}).listen(3000, function () {
    console.log('listening on port 3000');
});