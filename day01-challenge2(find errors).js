/*
There are 3 things wrong with this code.
Find them and explain why there are worng
*/

//Error#01:
const some Number=20;
/*  THERES A SPACE BETWEEN THE VARIABLE NAME'.
Explanation: A space between a varible name isnt allowed in javaScript, if it occurs, an error occurs.
The compiler considers only the word before the space as the variable name and whatever is after the blank-space it is considered as an
ordinary word
*/

//Error#02:
someNumber=50
/*THE TERMINATOR IS MISSING
Explanation: a terminator (;) at the end of the statment is missing, which results in an error: the compiler
 wouldn't be able to locate the end of the statement
 */

//Error#03:
someNumber=50
/*A CONSTANT VALUE IS BEING REASSIGNED
Explanation:In this stament the value 50 is being assigned to a constant variable, which will result in an error since a constant value cannot change or over written upon,
To resolve this the 'const' keyword sould be replaced by 'let'
*/
