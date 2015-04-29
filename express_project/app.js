var express = require('express');
var app = express();

var serveStatic = express.static('public');
app.use(serveStatic);
var foodTrucks = {
    'Ezells': 'Southern',
    'Marination': 'Hawaiian-Korean',
    'Skillet': 'Diner fare',
    'Charlies': 'American',
    '314 Pie': 'Sweets'
};

//app.use('/trucks', function (request, response, next) { 
//      console.log('Time: ', Date.now());
//      next();
//}, function (request, response, next) {
//  console.log('on the trucks route');
//  next();
//});

//app.get('/trucks', function (request, response, next){
     
//app.get('/food-trucks',function (request, response) {
//  response.redirect(301, '/trucks');
//});

app.get('/trucks/:name', function (request, response) {
        var foodTruck = request.params.name;
        var foodType = foodTrucks[foodTruck];
        
        if (!foodType) {
            response.status(404).send('No food type found for ' + foodTruck);
        } else {
        response.send(foodType);
  }
//        foodTrucks['Marination']
//        /trucks/Marination
  
//  if (request.query.limit > 0) {
//    response.json(trucks.slice(0,request.query.limit));
//  } else {
//      response.json(trucks);
//  }
//        var trucks = '<ul><li>Ezels</li><li>Marination</li><li>Skillet</li>'
//        response.send(trucks);
});

//app.get('/', function (request, response){
//  response.write('Hello, students!\n');
//  response.end('Goodbye, students!');
//});

app.listen(3000, function() {
    console.log('listening on port 3000');
//  console.log('server started on port 3000');
});


