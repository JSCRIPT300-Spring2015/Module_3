/*
 * Carolyn Velez
 * JSCRIPT 300
 * 04/14/15
 */


// private
var myDate;

// public API
var enhancedDate = {

	setDate: function setDate(specificDate) {
		if (specificDate instanceof Date || typeof specificDate === 'number') {
			myDate = new Date(specificDate);
		} else {
			myDate = new Date();
		}
	},

	getDate: function getDate(dateInMilliseconds) {

		// create variable to store the value of the number of milliseconds
		var dateMilliseconds;

		/*
		 compare number of milliseconds between data user entered
		 and the number of millisconds for today (default)
		 */
		if (dateInMilliseconds === true) {
			return myDate;
		} else {
			dateMilliseconds = myDate.getTime();
			return dateMilliseconds;
		}
	},

	getDayName: function getDayName() {

		// create variable to store the value of the week
		var dayValue;

		// create an array of the names of the days of the week
		var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		// if date user entered in undefined, return today's date
		if (myDate === undefined) {
			myDate = new Date();
		}

		/*
		 set variable to either today's date if undefined
		 or the date the user entered and covert to day
		 */
		dayValue = myDate.getDay();

		return weekdays[dayValue];
	},

	getMonthName: function getMonthName() {

		// create variable to store the value of the month
		var monthValue;

		// create an array of the names of the months in a year
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

		// if date user enter is undefined, return today's date
		if (myDate === undefined) {
			myDate = new Date();
		}

		/*
		 set variable to either today's date if undefined
		 or the date the user entered and covert to month
		 */
		monthValue = myDate.getMonth();

		// return the month of either undefined or date entered by user
		return months[monthValue];
	},

	isFuture: function isFuture() {

		// get the number of milliseconds between now and epoch
		var todayValue = Date.now();

		// get number of milliseconds on myDate
		var myNewDate = myDate.getTime();

		/*
		 if date the user entered is greater than the number
		 of milliseconds for now, the statement is true
		 */
		if (myNewDate > todayValue) {
			return true;
		} else {
			return false;
		}
	},

	isToday: function isToday() {

		// create variable for new date object to set the hours for beginning and end of day
		var isToday = new Date();

		// set variable to beginning of day
		var isTodayStart = isToday.setHours(0, 0, 0, 0);

		// set variable to end of day
		var isTodayEnd = isToday.setHours(23, 59, 59, 999);

		// create variable for date stamp of use input to compare in "if" statement so I don't need to call myDate.getTime() twice
		var myDateTimeStamp = myDate.getTime();

		/*
		 if myDateTimeStamp is less than or equal to the end of the day or
		 if it is greater than or equal to the beginning of the day it is today
		 */
		if (myDateTimeStamp <= isTodayEnd && myDateTimeStamp >= isTodayStart) {
			return true;
		} else {
			return false;
		}
	}

};

module.exports = enhancedDate;
