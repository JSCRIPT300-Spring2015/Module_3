var dateIsSet;

function setDate(date) {
	if (!date) {dateIsSet = new Date(); return;}
	if (!(date instanceof Date)) {console.warn('sorry, not a date'); return;}
	dateIsSet = new Date(date);
};

function getDate() {
	isDateSet();
	return dateIsSet;
}

function getDayName() {
	isDateSet();
	var dayName = dateIsSet.getDay();
	var dayOfWeekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return dayOfWeekArray[dayName];
}
function isDateSet() {
	if(!dateIsSet) {console.warn('date hasn\'t been set! Please call setDate first!'); return false;}
}
function getMonthName() {
	isDateSet();
	var monthName = dateIsSet.getMonth();
	var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return monthArray[monthName];
};
function isFuture() {
	isDateSet();
	if(dateIsSet.getTime() > new Date().getTime()) {
		return true;
	}
	return false;
};
function isToday() {
	isDateSet();
	if(today(dateIsSet) === today(new Date())) {return true;}
	return false;
}
function today(input) {
	var day = input.getDay();
	var month = input.getMonth();
	var year = input.getFullYear();
	return "Date : " + day + month + year;
}
module.exports.getDate = getDate;
module.exports.setDate = setDate;
module.exports.getDayName = getDayName;
module.exports.getMonthName = getMonthName;
module.exports.isFuture = isFuture;
module.exports.isToday = isToday;