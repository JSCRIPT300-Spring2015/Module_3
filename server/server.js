// make this a simple http server that writes to the response stream object
var http = require('http'); http.createServer(function (request, response) {     response.writeHead(200, { 'Content-Type': 'text/plain' });
                                                            // the page should display the following message:

// Today is <day name>, <month name> <date>. Here are the available food trucks:
                                                            
    response.write('Today is ' + enhancedDate.getDayName +'Here are the available food trucks:');     response.end('Goodbye, class!'); }).listen(3000, function () {     console.log('listening on port 3000'); });


// list the food trucks returned by filterByDay, passing in the current day name.
// e.g. filterByDay(day); where "day" is determined using the enhancedDate module
// The list of trucks returned will be an array of food truck objects. Iterate 
// through the list, building up a string of food truck names. Once you're done 
// iterating through that list, display the string you built up.

// Remember that the response is a stream object that must be closed.
