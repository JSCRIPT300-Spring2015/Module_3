/* make this a simple http server that writes to the response stream object
 *
 * the page should display the following message:
 *
 * Today is <day name>, <month name> <date>. Here are the available food trucks:
 *
 * list the food trucks returned by filterByDay, passing in the current day name.
 * e.g. filterByDay(day); where "day" is determined using the enhancedDate module
 * The list of trucks returned will be an array of food truck objects. Iterate 
 * through the list, building up a string of food truck names. Once you're done 
 * iterating through that list, display the string you built up.
 *
 * Remember that the response is a stream object that must be closed.
*/
 
var nodeDate = require('./enhancedDate'); //leave off file extension
var myObject = nodeDate();
myObject.setDate();
var dayName = myObject.getDayName();
var monthName = myObject.getMonthName();
var date = myObject.now.getDay();

var trucks = require('./trucks');
var truckObject = trucks();
var dayTrucks = truckObject.filterByDay(dayName);

var express = require('express');  //require the express module which returns an object/function
var app = express(); //creates and express application instance

var pageContent = 'Today is ' + dayName + ', ' + monthName + ' ' + date + '. Here are the available food trucks:'

//loop through the dayTrucks array and get .name for each item

for(i=0;i<dayTrucks.length;i++){
	pageContent = pageContent + '<br>'+ dayTrucks[i].name;	
}

//when this route handler fires

app.get('/',function(request,response){
	
 response.send(pageContent);
 
});

app.listen(3000,function(){

 console.log('listening on port 3000');

});


 //now in the browser go to http://localhost:3000 and you'll see the web page


