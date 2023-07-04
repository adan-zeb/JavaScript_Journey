/*REASON: the code is invalid because: first, inside the object 'objectVariable' the propertise are separated by a semi-colon instead of a comma(,) ,
secondly there shouldnt be a semi-colon after the array declaration
*/

//CORRECTION

const objectVariable{
property1:'I am Property1', property2: 'I am property 2', property3:[20,30,40]
};
console.log(objectVariable.property3[2]);
