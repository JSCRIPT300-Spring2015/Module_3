var http = require('http');
var enhancedDate = require('./enhancedDate');
var trucks = require('./trucks');

// TEST
//console.log(trucks.filterByDay("Tuesday"));

http.createServer(function (request, response) {

	var newDate = new Date();
	enhancedDate.setDate(newDate);

	// when in used the enhancedDate.get() method I kept getting the date returned in milliseconds
	var dayOfMonth = new Date();
	var showDay = dayOfMonth.getDay();

	var getDayName = enhancedDate.getDayName();

	var responseString = "Today is " + getDayName + ", " + enhancedDate.getMonthName() + " " + showDay + ". The food trucks available are:";

	var listTrucks = trucks.filterByDay(getDayName);

	for (var i = 0; i < trucks.length; i++) {
		responseString += "\n" + listTrucks[i].name;
	}

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write(responseString);
	response.end();

}).listen(3000, function () {
	console.log('listening on port 3000');
});
