// Personal Message: Store a person’s name in a variable, and print a message to that person.
let name: string = "Asad";
console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName: string = "Asad";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());

// Famous Quote: Find a quote from a famous person you admire.
console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');

// Famous Quote 2: Store the famous person’s name in a variable, then compose your message and store it in a new variable.
let famousPerson: string = "Albert Einstein";
let message: string = `${famousPerson} once said, "A person who never made a mistake never tried anything new."`;
console.log(message);
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
let nameWithWhitespace: string = "\t Asad \n";
console.log(nameWithWhitespace);
console.log(nameWithWhitespace.trim());

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Favorite Number: Store your favorite number in a variable and create a message that reveals your favorite number.
let favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}.`);

// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.

// Favorite Number: This program prints the favorite number.
let myFavoriteNumber: number = 7;
console.log(`My favorite number is ${myFavoriteNumber}.`);

// Names: Store the names of a few of your friends in an array and print each person’s name.
let names: string[] = ["asad", "saim", "ali"];
names.forEach(name => console.log(name));

// Greetings: Print a message to each person in the array.
names.forEach(name => console.log(`Hello ${name}, how are you?`));

// Your Own Array: Think of your favorite mode of transportation and make a list that stores several examples.
let transportations: string[] = ["car", "bike", "train"];
transportations.forEach(transport => console.log(`I would like to own a ${transport}.`));

// Guest List: If you could invite anyone to dinner, who would you invite? Make a list and print a message to each person.
let guestList: string[] = ["Nelson Mandela", "Marie Curie", "Isaac Newton"];
guestList.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));

// Changing Guest List: Modify your list, replacing the name of the guest who can’t make it.
console.log(`${guestList[1]} can't make it to the dinner.`);
guestList[1] = "Albert Einstein";
guestList.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));

// More Guests: Inform people that you found a bigger dinner table and add more guests.
console.log("We found a bigger dinner table!");
guestList.unshift("Leonardo da Vinci"); // Add to beginning
guestList.splice(2, 0, "Galileo Galilei"); // Add to middle
guestList.push("Nikola Tesla"); // Add to end
guestList.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));

// Shrinking Guest List: Inform that you can invite only two people for dinner.
console.log("Sorry, I can invite only two people for dinner.");
let eliminated = guestList.pop(); // Remove last  names
console.log(`${eliminated} im sorry i can't invite you to dinner.`);
guestList.pop()
console.log(guestList); // Print empty list
guestList.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));

// Seeing the World: Store locations in an array and perform various operations.
let places: string[] = ["Paris", "New York", "Tokyo", "Sydney", "London"];
console.log(places);
console.log([...places].pop());
console.log(places);
console.log([...places].shift());
console.log(places);
places.reverse();
console.log(places);
places.reverse();
console.log(places);


// Dinner Guests: Print a message indicating the number of people you are inviting to dinner.
console.log(`I am inviting ${guestList.length} people to dinner.`);

// Create a list of items and store them in an array.
let items: string[] = ["mountains", "rivers", "countries", "cities", "languages"];
console.log(items);

// Create an object in TypeScript.
interface Car {
  manufacturer: string;
  model: string;
  [key: string]: Number | string;
}

let myCar: Car = {
  manufacturer: "Toyota",
  model: "Camry",
  color: "blue",
    year: 2020,
  name : "myCar"
};

console.log(myCar);

// Intentional Error: Produce an array index error and correct it.
let numbers: number[] = [1, 2, 3];
console.log(numbers[3]); // This will produce an error.
console.log(numbers[2]); // Corrected access

// Conditional Tests: Write a series of conditional tests.
let car: string = 'BRV';
console.log("Is car == 'BRV'? I predict True.");
console.log(car == 'BRV');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car > 'audi'? I predict False.");
console.log(car > 'audi');

console.log("Is car < 'volvo'? I predict True.");
console.log(car < 'volvo');

// More Conditional Tests
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toLowerCase() != 'ford'? I predict True.");
console.log(car.toLowerCase() != 'ford');

let num: number = 10;
console.log("Is num > 5? I predict True.");
console.log(num > 5);

console.log("Is num < 5? I predict False.");
console.log(num < 5);

console.log("Is num >= 10? I predict True.");
console.log(num >= 10);

console.log("Is num <= 10? I predict True.");
console.log(num <= 10);

console.log("Is num > 5 && num < 15? I predict True.");
console.log(num > 5 && num < 15);

console.log("Is num > 5 || num < 5? I predict True.");
console.log(num > 5 || num < 5);

let fruits: string[] = ["apple", "banana", "orange"];
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes("apple"));

console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes("grape"));

// Alien Colors #1
let alien_color: string = 'green';
if (alien_color == 'green') {
  console.log("Player just earned 5 points.");
}

alien_color = 'red';
if (alien_color == 'green') {
  console.log("This will not print.");
}

// Alien Colors #2
alien_color = 'green';
if (alien_color == 'green') {
  console.log("Player just earned 5 points for shooting the alien.");
} else {
  console.log("Player just earned 10 points.");
}

alien_color = 'red';
if (alien_color == 'green') {
  console.log("This will not print.");
} else {
  console.log("Player just earned 10 points.");
}

// Alien Colors #3
alien_color = 'green';
if (alien_color == 'green') {
  console.log("Player earned 5 points.");
} else if (alien_color == 'yellow') {
  console.log("Player earned 10 points.");
} else if (alien_color == 'red') {
  console.log("Player earned 15 points.");
}

alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("Player earned")
}
let Constructor = function (p1, p2) {
  this.name = p1;
  this.age = p2;
  this.method = function () {
    this.methodPRop = "its property";
    return "its method";
  };
};

let instance = new Constructor("asad", 23);
instance.method();
console.log(instance);

export{}