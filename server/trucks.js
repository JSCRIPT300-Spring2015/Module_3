'use strict';

var _ = require('underscore');

// use the underscore module to filter the following data
var foodTrucks = [
	{
		name: '314 PIE',
		type: 'Sweet and Savory Pies',
		schedule: ['Monday', 'Wednesday', 'Thursday']
	},
	{
		name: 'A Fire Inside Wood Fired Pizza',
		type: 'Pizza',
		schedule: ['Tuesday', 'Wednesday', 'Thursday', 'Friday']
	},
	{
		name: 'Absolut Hot Dog and Gyros',
		type: 'Hot Dogs',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
	},
	{
		name: 'Athena\'s',
		type: 'Mediterranean',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
	},
	{
		name: 'Auto Pompa Pizzeria',
		type: 'Pizza',
		schedule: []
	},
	{
		name: 'Bake My Day',
		type: 'Sweets',
		schedule: ['Wednesday', 'Thursday']
	},
	{
		name: 'Balleywood Creamery',
		type: 'Sweets',
		schedule: ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']
	},
	{
		name: 'Barking Frog Mobile Kitchen',
		type: 'Northwest Cuisine',
		schedule: []
	},
	{
		name: 'Barriga Llena',
		type: 'Mexican',
		schedule: ['Monday']
	},
	{
		name: 'Basil and Javi\'s Fresh Food Now',
		type: 'Vegan Sandwiches',
		schedule: []
	},
	{
		name: 'BeanFish',
		type: 'Asian',
		schedule: []
	},
	{
		name: 'BeezNeez Gourmet Sausages',
		type: 'Hot Dogs',
		schedule: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	},
	{
		name: 'Beloved Mexico',
		type: 'Mexican',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	},
	{
		name: 'Ben & Jerry\'s',
		type: 'Sweets',
		schedule: []
	},
	{
		name: 'Big Boys Fillipino Food Truck',
		type: 'Fillipino/American',
		schedule: []
	},
	{
		name: 'Big Dog\'s',
		type: 'Hot Dogs',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	},
	{
		name: 'Big Ed\'s Good Eats',
		type: 'Sandwiches',
		schedule: []
	},
	{
		name: 'Big House BBQ',
		type: 'BBQ',
		schedule: []
	},
	{
		name: 'Big Spoon',
		type: 'Sweets',
		schedule: ['Monday', 'Tuesday']
	},
	{
		name: 'Bikelava',
		type: 'Sweets',
		schedule: ['Thursday']
	},
	{
		name: 'Bing of Fire',
		type: 'Chinese Crepes',
		schedule: ['Tuesday']
	},
	{
		name: 'Biscuit Box',
		type: 'Sandwiches/Breakfast',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
	},
	{
		name: 'Bite Me Cupcakes',
		type: 'Dessert',
		schedule: []
	},
	{
		name: 'Bomba Fusion',
		type: 'Korean/Mexican Fusion',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
	},
	{
		name: 'Bread and Circuses',
		type: 'Gastropub',
		schedule: ['Monday', 'Wednesday', 'Friday']
	},
	{
		name: 'Buddha Bruddah',
		type: 'Asian',
		schedule: ['Monday', 'Tuesday','Wednesday','Thursday', 'Friday']
	},
	{
		name: 'Budha Bear Bagels',
		type: 'Sandwiches',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Friday']
	},
	{
		name: 'Bumbu Truck',
		type: 'Indonesian',
		schedule: ['Sunday']
	},
	{
		name: 'BUNS',
		type: 'Burgers',
		schedule: ['Tuesday', 'Wednesday', 'Friday']
	},
	{
		name: 'Cake Mobile',
		type: 'Sweets',
		schedule: []
	},
	{
		name: 'Caravan Crepes',
		type: 'French',
		schedule: ['Wednesday', 'Thursday', 'Friday']
	},
	{
		name: 'Charlie\'s',
		type: 'Burgers/Cheesesteaks',
		schedule: ['Monday', 'Tuesday', 'Wednesday','Thursday']
	},
	{
		name: 'Cheese Wizards',
		type: 'Sandwiches',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
	},
	{
		name: 'Chewaya Authentic Moroccan Sanwiches',
		type: 'Moroccan',
		schedule: []
	},
	{
		name: 'Chick\'n Fix',
		type: 'American/Fillipino',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
	},
	{
		name: 'Chopstix',
		type: 'Asian Fusion',
		schedule: ['Tuesday', 'Wednesday', 'Thursday']
	},
	{
		name: 'Contigo',
		type: 'Mexican',
		schedule: []
	},
	{
		name: 'Convoy Coffee',
		type: 'Coffee',
		schedule: ['Wednesday', 'Saturday', 'Sunday']
	},
	{
		name: 'Crisp Creperie',
		type: 'French',
		schedule: ['Tuesday']
	},
	{
		name: 'Curb Jumper Street Eats',
		type: 'Sandwiches/Burgers',
		schedule: ['Monday', 'Wednesday']
	},
	{
		name: 'Curbside',
		type: 'Vietnamese',
		schedule: []
	},
	{
		name: 'Danielle\'s Crepes',
		type: 'French',
		schedule: ['Tuesday', 'Friday']
	},
	{
		name: 'Dante\'s Inferno Dogs',
		type: 'Hot Dogs',
		schedule: []
	},
	{
		name: 'Delicatessen Montanti',
		type: 'Sandwiches',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
	},
	{
		name: 'Diablo Food Truckz',
		type: 'Asian',
		schedule: []
	},
	{
		name: 'Djung on Wheels',
		type: 'Thai',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Friday']
	},
	{
		name: 'Dog Japon',
		type: 'Hot Dogs',
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	},
	{
		name: 'Dogfather Catering',
		type: 'Hot dogs, sausages, wood fired pizza',
		schedule: []
	},
	{
		name: 'Don Lucho\'s',
		type: 'Peruvian Sandwiches',
		schedule: []
	}
];

/* 
 * filterByDay takes an argument, day, then uses underscore to filter the 
 * foodTrucks array and return the name property of each truck in any instance
 * where the day parameter entered matches a day in the schedule property of each
 * truck
 */

function filterByDay(day) {

 var trucksByDay = _.filter(foodTrucks, function(item) {
        return _.any(item.schedule,function(item1) {
            return item1 === day;
        }); 
     });
    return trucksByDay;
}

module.exports.filterByDay = filterByDay;


