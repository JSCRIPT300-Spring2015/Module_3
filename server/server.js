var http = require('http');
var enhancedDate = require('./enhancedDate.js');
var trucks = require('./trucks.js');

http.createServer(function (request, response) {

	var newDate = new Date();
	enhancedDate.setDate(newDate);

	var getDayName = enhancedDate.getDayName();

	var responseString = "Today is " + getDayName + ", " + enhancedDate.getMonthName() + ". The food trucks available are:";

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