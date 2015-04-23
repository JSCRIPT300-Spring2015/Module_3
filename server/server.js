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
var trucks = require('./trucks');
var enhancedDate = require('./enhancedDate');

http.createServer(handleRequest).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

function handleRequest(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var today = enhancedDate.getDate();
	var day = enhancedDate.getDayName();
	var month = enhancedDate.getMonthName();
	var truckList = trucks.filterByDay(day);
	var myListStr = "<p>Today is " + day + ", " + month + " " + today + ". The food trucks available are :</p><ul>";
	for (truck in truckList) {
		myListStr += "<li>" + truckList[truck].name + "</li>";
	} 
	myListStr += "</ul>";
	res.write(myListStr);
	res.end();
}
