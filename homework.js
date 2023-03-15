//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFood(person) {
    //iterate over the keys(category) of the object(person)
    for (let category in person){
        //log each key followed directly by a :
        console.log(`${category}:`);
        // check if the value is an array or not
        if (Array.isArray(person[category])) {
          //if the value is an array loop through items(item) in the array
          for (let item of person[category]) {
              //log each item in the array
              console.log(item);
            }
        }
    }
}

favoriteFood(person3)


//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class
class Person {
    constructor(personName, age) {
        this.personName = personName
        this.age = age
    }
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    addAge = () => {
        this.age++
    } 
    // Use an arrow to create the printInfo method
    printInfo = () => {
        this.addAge()
        return `${this.personName} is ${this.age} years old!`
    }
      
}
const person1 = new Person('Santa', 5000)
const person2 = new Person('theRock', 50)
console.log(person1.printInfo())
console.log(person1.printInfo())
console.log(person1.printInfo())
console.log(person2.printInfo())






// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// =============Exercise #4 ============//
/*
    You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
For example, when the input is green, output should be yellow.
 */
const changeLight = (currentLight) => {
    //check the color of the current light
    switch(currentLight) {
        //if its green make it yellow
        case 'green':
            return 'yellow';
        //if its yellow make it red
        case 'yellow':
            return 'red';
        //if its red make it green
        case 'red':
            return 'green'
        //if its some other crazy color send an error message
        default:
            throw new Error('Thats not a traffic light color!')
    }
}

console.log(changeLight('yellow'))
console.log(changeLight('red'))
console.log(changeLight('green'))
// console.log(changeLight('orange')) This messes up my next function if I uncomment it but it gives me the expected error

// =============Exercise #5 ============//

/*
    Take an array and remove every second element from the array. 
    Always keep the first element and start removing with the next element.
 */

    function removeEveryOther(myList) {
        //make a new array to push to
        let newList = []
        //iterate through the array where i is every other item in the array
        for (let i = 0; i < myList.length; i += 2 ) {
            //push to newList
            newList.push(myList[i])
        }
        return newList
    }

console.log(removeEveryOther(['christmas', 'santa', 'elves', 'reindeer']))