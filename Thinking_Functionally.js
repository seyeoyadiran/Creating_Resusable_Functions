/**
 * 
 *
 With that in mind, write functions that accomplish the following:
Take an array of numbers and return the sum.
Take an array of numbers and return the average.
Take an array of strings and return the longest string.
Take an array of strings, and a number and return an array of the strings
that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
would return ["hello", "morning"].
Take a number, n, and print every number between 1 and n without using loops.
Use recursion.
 * 
 * 
 */

//Take an array of numbers and return the sum.
function returnSum(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
    return sum;
}
//Call back the array
console.log(returnSum([2,3,4,1]));

//Take an array of numbers and return the average
function findAverage(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    let average = sum/arr.length;
    return average;
}

console.log(findAverage([2,3,4,1]));

//Take an array of strings and return the longest string
function findLongest(arrStrings){
    let retString="";

    for(let i = 0; i < arrStrings.length; i++){
        if(arrStrings[i].length >= retString.length){
            retString = arrStrings[i];
        }
    }
    return retString;
}

console.log(findLongest(["hello", "Goodbye", "Welcome Here", "Per Scholas"]));

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringsLongerThan(arrStrings, num){
    let retStringsLonger = [];

    for(let i = 0; i < arrStrings.length; i++){

        if(arrStrings[i].length > num){
            retStringsLonger.push(arrStrings[i]);
        }
    }
    return retStringsLonger;
}
console.log(stringsLongerThan(["hello", "Goodbye", "Welcome Here", "Per Scholas"], 3))


//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function recurseBetween(start, n){
    console.log(start);
    if(start == n){
        console.log('Looop ended')
    } else {
  recurseBetween(start +1, n);
}}

recurseBetween(1, 10)