var http = require('http');
var enhancedDate = require('./enhancedDate');
var trucks = require('./trucks');

var day = enhancedDate.getDayName();
var month = enhancedDate.getMonthName();
var date = enhancedDate.getDate(true).getDate();
var str = 'Today is ' + day + ', ' + month + ' ' + date + '. Here are the available food trucks: \n' 
var truckStrings = trucks.filterbyDay(day);

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(str + truckStrings);
    response.end('*********** DONE ************* \n');
}).listen(3000, function () {
    console.log("listining on port 3000");
});
