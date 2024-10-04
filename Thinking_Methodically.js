/**
 * When functions are built into objects, like Arrays, 
 * they are referred to as “methods” of those objects. Many methods,
 *  including Array methods, require “callback functions” to determine their behavior.

For the tasks below, use the following data to test your work:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

Use callback functions alongside Array methods to accomplish the following:
Sort the array by age.
Filter the array to remove entries with an age greater than 50.
Map the array to change the “occupation” key to “job” and increment every age by 1.
Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age.
 */


//Sort the array by age.

const data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }];

data.sort((a, b)=> a.age - b.age);
//console.log(data);

//Filter the array to remove entries with an age greater than 50
function removeOlderThan50(arrData){

    let retArr50 = []
    for(let i = 0; i < arrData.length; i++){
        if(arrData[i].age >= 50){
            retArr50.push(arrData[i])
        }
    }
    return retArr50;
}
console.log(removeOlderThan50(data));

//Map the array to change the “occupation” key to “job” and increment every age by 1
const mapOcc = data.map(person => ({
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: Number(person.age) + 1,
}));

//console.log(mapOcc);

// Use the reduce method to calculate the sum of the ages
//Then use the result to calculate the average

const sumValues = data.reduce((total, singleValue) => {
    return Number(total + Number(singleValue.age));
}, 0);

//Calculating the sum
console.log(sumValues);
//Calculating the average age
console.log(sumValues/data.length);
