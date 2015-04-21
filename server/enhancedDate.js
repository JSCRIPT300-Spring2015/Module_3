/*
 * Homework 
 * JSCRIPT300-Spring2015/Module_3
 * by Diane Zevenbergen
 *
 * Note: I simplified my version of enhancedDate from the one I turned in for Module 2.
 * 1)  I realized it made no sense (& made code tedious) to store the 
 *     date as either an object or ms.  So now I'm storing the date as an object, 
 *     regardless of whether the date passed in to setDate is an object or ms.
 * 2)  I realized I can just call my setDate function from within my other methods 
 *     (I was calling an outside fcn before).
 * 3)  I dropped my switch statments and use arrays for day & month labels.
 */

'use strict';

var theDate;

var enhancedDate = {

    // Store date passed in as Date object or epoch milliseconds (default to now)
    setDate: function setDate(date) {

        // If no argument passed set date to now 
        if (typeof date === 'undefined') {
            date = new Date;

        //  If date is NOT a Date obj OR a number (ms), set date to now
        } else if (!(date instanceof Date) && (typeof date !== 'number')) {
            date = new Date;
        }
        
        // If date provided is in ms, change to date obj
        if (typeof date === 'number') {
            date = new Date(date);
        }
        
        theDate = date;
    },

    // Return date as Date object if argument is true, otherwise return milliseconds
    getDate: function getDate(isDateObj) {
        
        // If date is not yet set, call setDate & set to now
        if (typeof theDate === 'undefined') {
            enhancedDate.setDate();
        }        

        if (isDateObj) {
            return theDate;
        } else {
            return theDate.getTime();
        }            
    },

    // Return day of week ('Monday', etc.)
    getDayName: function getDayName() {
        var weekdayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday'];
        var dayValue;
        var dayLabel;
        
        // If date is not yet set, call setDate & set to now
        if (typeof theDate === 'undefined') {
            enhancedDate.setDate();
        }        

        // Use getDay method on Date obj
        dayValue = theDate.getDay();

        dayLabel = weekdayLabels[dayValue];

        return dayLabel;
    },

    // Return month label ('January', etc.)        
    getMonthName: function getMonthName() {
        var monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'];    
        var monthValue;
        var monthLabel;

        // If date is not yet set, call setDate & set to now
        if (typeof theDate === 'undefined') {
            enhancedDate.setDate();
        }        

        // Use getMonth method on Date obj
        monthValue = theDate.getMonth();

        monthLabel = monthLabels[monthValue];

        return monthLabel;
    },

    // Return true if date is in future
    isFuture: function isFuture() {
        var isInFuture;
        var dateNow;

        // If date is not yet set, call setDate & set to now
        if (typeof theDate === 'undefined') {
            enhancedDate.setDate();
        }        

        dateNow = new Date();

        // Use getTime method to compare dates
        isInFuture = (theDate.getTime() > dateNow.getTime());

        return isInFuture;
    },

    // Return true if setDate is today
    isToday: function isToday() {
        var isTodaysDate = false;
        var dateNow;

        // If date is not yet set, call setDate & set to now
        if (typeof theDate === 'undefined') {
            enhancedDate.setDate();
        }        

        dateNow = new Date();

        // If month, day & year all match, set boolean to true (ignores time of day)
        if (dateNow.getMonth() === theDate.getMonth()) {
            if (dateNow.getDate() === theDate.getDate()) {
                if (dateNow.getFullYear() === theDate.getFullYear()) {
                    isTodaysDate = true;
                }
            }
        }
    
        return isTodaysDate;
    }

};

module.exports.enhancedDate = enhancedDate;
