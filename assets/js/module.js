/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

export const weekDayNames = [
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thurs",
    "Fri",
    "Sat"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "sept",
    "oct",
    "Nov",
    "Dec",
];

/**
 * 
 * @param {number} dateUnix unix date in seconds 
 * @param {number} timezone timezone shift in seconds
 * @returns {string} date string.format:"Sunday 10 Jan"
 */

export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames [date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * 
 * @param {number} timeUnix unix date in seconds
 * @param {number} timezone timezone shift from utc in seconds
 * @returns {string} Time string. formate:"HH:MM AM/PM"
 */

export const getTime = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone)*1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}


/**
 * 
 * @param {number} timeUnix unix date in seconds
 * @param {number} timezone timezone shift from utc in seconds
 * @returns {string} Time string. formate:"HH AM/PM"
 */
export const getHours = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}


/**
 * 
 * @param {number} mps  meter per second
 * @returns {number} kilometer per second
 */
export const mps_to_kmh = mps => {
    const mph = mps*3600;
    return mph /1000;
}

export const aqiText = {
    1:{
        level:"Good",
        Message: "Air quality is considered satisfactory, and air pollution poses little oe no risk"
    },
    2:{
        level: "Fair",
        message:"Air quality is acceptable, however for some pollutants there may be moderate health concern for a very small number of people who are usually sensitive to air pollution "
    },
    3:{
        level: "Moderate",
        message:"Members of sensitive group may experience health effects. the general public is not likely to be affected."
    },
    4:{
        level: "Poor",
        message:"Everyone may begin to experience health effects; members of sensitive groups may experience more serious effects"
    },
    5:{
        level: "Very Poor",
        message:"Health Warnings of emergency conditions. The Entire population is more likely to be affected."
    },
}