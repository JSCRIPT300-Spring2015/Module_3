
    'use strict';
    var myDate = null;
    var dateSet = false; 
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];   

    function getDate(returnObj) {  
        if (!dateSet)  {
            setDate();
        }
        if (returnObj) {
            return myDate;
        } else {
            return myDate.getTime();
        }
    }
    function setDate(newDate) {
        if (newDate instanceof Date || typeof newDate === 'number') {
            myDate = new Date(newDate);
            dateSet = true;           
        }
        else {
            myDate = new Date();                                                   
        }              
    }
    function getDayName() {            
       
        if (!dateSet) {
            setDate();
        }
        var dayName =  weekday[myDate.getDay()];           
        return dayName;
    }
    function getMonthName() {          
  
        if (!dateSet) {
            setDate();
        }
        var monthName =  month[myDate.getMonth()];             
        return monthName;
    }
    function isFuture() {
        if (!dateSet) {
            setDate();
        }           
        return (myDate.getTime() > Date.now());             
    }
   function isToday()  {
        if (!dateSet) {
            setDate();
        }
        var d = new Date();
        var month = d.getMonth();
        var date = d.getDate();
        var year = d.getFullYear();
        if (myDate.getMonth() === month && myDate.getDate() === date && myDate.getFullYear() === year) {
            return true;
        } else {
            return false;
        }        
    }

module.exports = {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture,
    isToday: isToday
};     