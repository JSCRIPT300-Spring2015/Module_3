
var http = require('http');
var enhancedDate = require('./enhancedDate');
var trucks = require('./trucks');

var todaysDate = enhancedDate.setDate().getDate();
var today = enhancedDate.getDayName();
var month = enhancedDate.getMonthName();


var getTrucks = trucks.filterByDay(enhancedDate.getDayName());
var trucksToday = '';
for (var i = 0; i < getTrucks.length; i++) {
    trucksToday += getTrucks[i].name + '\n';
}

var truckString = ('Today is ' + today + ', ' + month + ' ' + todaysDate + '. The available food trucks are: \n \n' + trucksToday);

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(truckString);
    response.end();
}).listen(3000, function () {
    console.log('listening on port 3000');
});

