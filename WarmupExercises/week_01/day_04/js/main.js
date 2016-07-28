var isLeapYear = function(year) {
    var result;
    // Check out Tom's fancy one-liner!
    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    } else {
        result = false;
    }
    return result;
};

console.log(isLeapYear(1900));

// Here's my longer, more confusing solution...

// var isLeapYear = function(year) {
//     var result;
//     if (result % 4 === 0) {
//         if ((year % 100 === 0) && (year % 400 !== 0))  {
//             result = false;
//         } else {
//             result = true;
//         }
//     } else {
//         result = false;
//     }
//     return result;
// };
