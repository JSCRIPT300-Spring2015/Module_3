// export this as a Node module using the enhancedDate.js code from Module_2

var enhancedDate = function () {
	
	var publicAPI={};
	
	var privateAPI ={
		days : ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'],
		months : ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October','November', 'December']
	};
	
	var newDate;
	var now = new Date();
	var setNewDate = function(){
		if (!newDate){
			newDate= new Date();			
		} 
	};
	
    function setDate(date) {
    	if (date){
    		if (typeof date === "number"){
    			newDate = new Date(date);
    		} else if(date instanceof Date){
    			newDate= date;
    		}else {
    			newDate= new Date();
    		}
    		
    	} else {
    		newDate= new Date();
    	}
    	return newDate
    }
    
	function getDate(arg){
		setNewDate();
		if(arg===true){
			return newDate;
		}else {
			return newDate.getTime();
		}
				
	}
	
	function getDayName(){
		setNewDate();
		return privateAPI.days[newDate.getDay()];
	}
	
	function getMonthName(){
		setNewDate();
		return privateAPI.months[newDate.getMonth()];
	}
	
	function isFuture(){
		setNewDate();
		return (now.getTime() < newDate.getTime());
	}
	
	function isToday(){
		setNewDate();
		return (now.getTime() == newDate.getTime());
	}

    publicAPI = {
    	setDate: setDate,
    	getDate: getDate,
    	getDayName: getDayName,
    	getMonthName: getMonthName,
    	isFuture: isFuture,
    	isToday:isToday
    };
    
    return publicAPI;
};

module.exports = enhancedDate;