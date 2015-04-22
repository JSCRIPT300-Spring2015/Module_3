
var dateIsSet;
var dayOfWeekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//default function
function isDateSet() {
	if(!dateIsSet) {console.warn('date hasn\'t been set! Please call setDate first!'); return false;}
}

function today(input) {
	var day = input.getDay();
	var month = input.getMonth();
	var year = input.getFullYear();
	return "Date : " + day + month + year;
}

//returned function
function setDate(date) {
	if (!date) {dateIsSet = new Date(); return;}
	if (!(date instanceof Date) && !(typeof date === 'number')) {console.warn('sorry, not a date'); return;}
	dateIsSet = new Date(date);
};

function getDate(returnObj) {
	isDateSet();
	var sendBack = returnObj ? dateIsSet : dateIsSet.getTime();
	return sendBack;
}

function getDayName() {
	isDateSet();
	var dayName = dateIsSet.getDay();
	return dayOfWeekArray[dayName];
}
function getMonthName() {
	isDateSet();
	var monthName = dateIsSet.getMonth();
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

module.exports.getDate = getDate;
module.exports.setDate = setDate;
module.exports.getDayName = getDayName;
module.exports.getMonthName = getMonthName;
module.exports.isFuture = isFuture;
module.exports.isToday = isToday;