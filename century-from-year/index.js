/*
 the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer year

A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.

[output] integer

The number of the century the year is in.
*/

// my solution

function centuryFromYear(year) {
    const century = year / 100;
    if (year % 100 === 0) {
        return century;
    }
    
    return Math.floor(century + 1);
}

// highest rated solution
function centuryFromYear2(year) {
    return Math.ceil(year / 100) // math.ceil rounds up to the nearest highest integer
}

