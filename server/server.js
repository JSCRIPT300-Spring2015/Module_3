var http = require('http');
var enhancedDate = require('./enhancedDate');
var trucks = require('./trucks');

// TEST
//console.log(trucks.filterByDay("Tuesday"));

http.createServer(function (request, response) {

	var newDate = new Date();
	enhancedDate.setDate(newDate);

	// When I used the enhancedDate.get() method I kept getting the date returned in milliseconds.
	// I know this isn't the right way to do it even though it appears to work. What's the right way?
	var showDay = newDate.getDate();

	var getDayName = enhancedDate.getDayName();

	var responseString = "Today is " + getDayName + ", " + enhancedDate.getMonthName() + " " + showDay + ". The food trucks available are:";

	var listTrucks = trucks.filterByDay(getDayName);

	for (var i = 0; i < listTrucks.length; i++) {
		responseString += "\n" + listTrucks[i].name;
	}

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write(responseString);
	response.end();

}).listen(3000, function () {
	console.log('listening on port 3000');
});
