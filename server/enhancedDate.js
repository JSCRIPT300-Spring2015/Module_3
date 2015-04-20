/*
 * Carolyn Velez
 * JSCRIPT 300
 */


var enhancedDate = (function iife() {

	// private
	var myDate;

	// public
	var publicAPI = {};

	function getDate() {}
	function getDayName() {}
	function getMonthName () {}
	function isFuture() {}
	function isToday() {}

	publicAPI = {
		getDate: getDate(),
		getDayName: getDayName(),
		getMonthName: getMonthName(),
		isFuture: isFuture(),
		isToday: isToday()
	};

	return publicAPI;

})();
