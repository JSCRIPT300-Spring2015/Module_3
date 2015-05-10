//






  var myDate=null;
  var dateIsSet= false;

  var dayNames = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var myDayName;
  var todaysDate;
  var myMonth;
    function setDate(date) {
        if (date instanceof Date || typeof enterDate === "number"){
          myDate = new Date(date);

        } else{
          myDate = new Date();
        }
    }


    function getDate(returnObject) {
         if (!dateIsSet){
             setDate();
         }
         if (returnObject) {
           return myDate;
         } else {
           return myDate.getTime();
         }
    }

    function getDayName() {
      if (!dateIsSet){
             setDate();
         }
      myDayName = myDate.getDay();
      return dayNames[myDayName];
    }
    function getMonthName(date) {
      if (!dateIsSet){
             setDate();
         }
      myMonthName = myDate.getMonth();
      return monthNames[myMonthName];
    }
    function isFuture() {
      if (!dateIsSet){
             setDate();
         }
      var now = new Date();
      return myDate > now;
    }

  function isToday() {
      if (!dateIsSet){
             setDate();
         }
      var today = new Date();
      var month = today.getMonth();
      var date = today.getDate();
      var year = today.getYear();

      if (today.getMonth() === myDate.getDate() && today.getYear() ===myDate.getYear() && today.getDate()=== myDate.getDate()){
        return true;

      } else{
            return false;
      }

    }

module.exports = {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isToday: isToday,
    isFuture: isFuture
  };
