/*
 * Homework 
 * JSCRIPT300-Spring2015/Module_3
 * by Diane Zevenbergen
 */

'use strict';

// Question: Is there a way I can avoid using 'output' as a global var?
var output = [];

/*
 * Function uses enhancedDate module to set date to today, & then filters food
 * truck data based on current weekday. Returns array obj containing results.
 */
function getTodaysTrucks() {
    var eDate = require('./enhancedDate');
    var trucks = require('./trucks');    
    var todaysDate;
    var weekday;
    var month;
    var todaysTrucks = [];
    var truckOutput = [];
    var header;
    
    // Use enhancedDate module to set date to now
    eDate.enhancedDate.setDate();

    // Get date object & weekday & month labels
    todaysDate = eDate.enhancedDate.getDate(true);
    weekday = eDate.enhancedDate.getDayName();
    month = eDate.enhancedDate.getMonthName();

    // Filter food trucks array (in trucks.js) on 'weekday'
    todaysTrucks = trucks.filterByDay(weekday);

    // Iterate over food trucks available today & create array of string info on each truck
    for (var i = 0, l = todaysTrucks.length; i < l; i++) {
        truckOutput[i] = todaysTrucks[i].name + ':  Serves ' + todaysTrucks[i].type + '.\n';
    }

    // Header for today's date
    header = 'Today is ' + weekday + ', ' + month + ' ' + todaysDate.getDate() + 
            '.  \nHere are the available food trucks:\n\n';

    // Return header & food truck detail
    return {header: header, details: truckOutput.join('')};    
}


function handleRequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(output.header);
    response.write(output.details);
    response.end('');
}

/*
 * Question: Is it more efficient to wrap below stuff in a 'server' fcn, or does it matter?
 *
 * This fcn gets filtered food truck data and displays results to a local server
 */
function server() {
    var http = require('http');
    
    // Get filtered food truck data for current day
    output = getTodaysTrucks();

    // Set up local server
    http.createServer(handleRequest).listen(8008, function () {
        console.log('listening on port 8008');
    });
}

// Get food truck info for today & display results to browser using local server
server();
