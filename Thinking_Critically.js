/**
 * '
 * It is important to remember that when working with objects in JavaScript,
 *  we can either pass those objects into functions by value or by reference. 
 * This important distinction changes the way that functions behave, 
 * and can have large impacts on the way a program executes.
For this section, develop functions that accomplish the following:
Take an object and increment its age field.
Take an object, make a copy, and increment the age field of the copy.
Return the copy.
For each of the functions above,
if the object does not yet contain an age field,
create one and set it to 0. 
Also, add (or modify, as appropriate) an updated_at field that 
stores a Date object with the current time.
Thought experiment: since the Date object is an object, 
what would happen if we modified it in the copy of the object created in 
the second function using setTime() or another method? How could we 
circumvent potentially undesired behavior?
 */

const data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]


//Take an object and increment its age field
function incrementWithPassBy(x) {
    for(let i = 0; i < x.length; i++){
        x[i].age = Number(x[i].age) + 1;

        //If array is empty make it 0
        if(x[i].age == null){
            x[i].age = 0;
        }
    }
}
console.log(incrementWithPassBy(data));

// Take an object, make a copy, and increment the age field of the copy. 
//Return the copy.

let copyData = []
function makeCopy(dataToCopy){
    for(let i = 0; i < dataToCopy.length; i++){
        copyData.push(dataToCopy[i]);  
        //Increment the age of the field of copy by 1
        copyData[i].age = Number(copyData[i].age) + 1;

    }
    return copyData;
}
console.log(makeCopy(data));

