var myDate = null;
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// Used in all exported functions except setDate 
function isDateSet() {

	if (myDate === null) {

		setDefaultDate();
		
	} 
}

function setDefaultDate() {

	myDate = new Date();
}

/* Stores the passed-in date. 
 * This function can take milliseconds after epoch 
 * or a Date object. Do some type-checking to make 
 * sure you have a valid type. If no value is passed, 
 * default your internally stored date to now.
 */
function enhancedDate_setDate ( date ) {

	if ( typeof date === 'number' ){

		myDate = new Date(date);

	} else if ( date instanceof Date ) {

		myDate = date;

	} else if ( date === undefined ) {

		//setDefaultDate();
	myDate = new Date();
	} else {
	
		console.log("ERROR: A type other than a Number or Date was provided");
	
	}
}

/* Returns either milliseconds after epoch by default 
 * or a Date object if true is passed as an argument.
 */ 
function enhancedDate_getDate ( date ) {
		
	isDateSet();

	if ( date === true ){

		return myDate;

	} else {
		
		return myDate.getTime();

	}
}

	// Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.
function enhancedDate_getDayName () {
		
	isDateSet();

	return dayOfWeek[ myDate.getDay() ];

}

	// Return the full month name as a string, e.g. "January", "February", etc.
function enhancedDate_getMonthName () {
		
	isDateSet();

	return month[ myDate.getMonth() ];

}

	// Return boolean true if date is in the future (from when method is called)
function enhancedDate_isFuture () {
		
	isDateSet();

	var dateNow = Date.now();

	if ( myDate.getTime() > dateNow ) {

		return true;

	} else {

		return false;

	}
}

	// Return boolean true if the stored date is "today".
function enhancedDate_isToday () {
	
	isDateSet();

	var dateNow = new Date();
	var dayNow = dateNow.getDay();
	var monthNow = dateNow.getMonth();
	var yearNow = dateNow.getFullYear();

	if ( dayNow === myDate.getDay() &&
		 monthNow === myDate.getMonth() &&
		 yearNow === myDate.getFullYear() ) {

		return true;

	} else {

		return false;

	}
}

module.exports.setDate = enhancedDate_setDate;
module.exports.getDate = enhancedDate_getDate;
module.exports.getDayName = enhancedDate_getDayName;
module.exports.getMonthName = enhancedDate_getMonthName;
module.exports.isFuture = enhancedDate_isFuture;
module.exports.isToday = enhancedDate_isToday;


