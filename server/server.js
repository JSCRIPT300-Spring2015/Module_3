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
var eDate = require('./enhancedDate');   //requires enhancedDate.js module we created
var foodTrucks= require('./trucks'); //requires trucks.js

function handleRequest(request, response) {
    var dayName = eDate.getDayName();
    var monthName = eDate.getMonthName();
    var date = eDate.getDate(true);
    var message = "Today is " + date + ". Here are the available food trucks: <br /> <br />";

    var truckList = foodTrucks.filterByDay(dayName);
    var truckNames = "";
    for (var i = 0; i < truckList.length; i++)
    {
        truckNames += "<li>" + truckList[i].name;
    }
    response.writeHead(200, { 'Content-Type': 'text/html'});
    response.write(message + " " + truckNames);
    response.end('<br /> <br /> Eat well!');
}   
    
http.createServer(handleRequest).listen(3000, function () {
    console.log('listening on port 3000');
});