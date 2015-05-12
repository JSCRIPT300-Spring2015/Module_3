'use strict'

var myDate = null;
var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var dateIsSet = false;
function setDate(date) {
	if (date instanceof Date || typeof date ==='number') {
		myDate = new Date(date);
	} else {
		myDate = new Date();
	}
	dateIsSet = true;
}

function getDate(returnObj) {
		if (!dateIsSet) {
		setDat();
	};
	if (returnObj) {
		return myDate;
	} else {
		return myDate.getTime();
	}
}

function getDayName() {
		if (!dateIsSet) {
		setDate();
	};
	var day = myDate.getDay();
	return dayNames[day];
}

function getMonthName() {
		if (!dateIsSet) {
		setDat();
	};
	var month = myDate.getMonth();
	return monthNames[month];
}

function isToday() {
		if (!dateIsSet) {
		setDat();
	};
	var today = new Date();
	var month = today.getMonth();
	var date = today.getDate();
	var year = today.getYear();

	if (myDate.getMonth() === month && myDate.getDate() === date && myDate.getYear() === year) {
		return true;
	} else {
		return false;
	}
}

function isFuture() {
		if (!dateIsSet) {
		setDat();
	};
	return myDate.getTime() > Date.now();
}

module.exports = {
	setDate: setDate,
	getDate: getDate,
	getDayName: getDayName,
	getMonthName: getMonthName,
	isFuture: isFuture,
	isToday: isToday
};