
//question 2
let NAME:string = 'roshni mahesh';
console.log('hello roshni,would you like to learn some TypeScript today?');
//*

//question 3
let PersonName: string = 'Roshni Mahesh';
console.log("lowwerCase:", PersonName.toLowerCase())
console.log("upperCase:", PersonName.toUpperCase())
console.log("titleCase:", PersonName.replace(/\b\w/g,c=> c.toUpperCase()));
//*

//question 4
console.log('Albert Einstein once said,Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.');
//*

//question 5
let noma:string ="Albert Einstein";
let Message:string ="Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.";
console.log('Albert Einstein,Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.');
//*

//question 6
let Name:string ='\t\n roshni /t/n';
console.log(' roshni ');
//*

//question 7 and 8
console.log(5 + 3);
console.log(9 - 1);
console.log(4 * 2);
console.log(16 / 2);
//*

//question 9
let favoriteNumber: number = 8 ;
console.log('my favorite number is 8.');
//*

//question 10
let UserName: string = 'roshni';
console.log('hi roshni,would you like to learn something');
//*

//question 11
let names: string[] = ["alia", "ranver", "ranbir"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
//*

//wuestion 12
let NAMES: string[] = ["alia","ranvir","ranbir"];
console.log("hi $[NAMES],would you like to learn new things?");
//*

//question 13
let transportation: string[] =["honda motorcycle"];
console.log("i would like to own a ${transport}.");
//*

//question 14
let guests: string[] = ["alia", "ranvir", "ranbir"];

guests.forEach(guests => {
    console.log("dear ${guest}, would you like to join me for dinner?");
});
//*

//question 15
let unableToAttend = "alia";
let newGuest = "deepika";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(guest => {
    console.log('dear ${guest},would you like to join me for dinner');
});
//*

//question 16
let Guests:string[] = ["alia", "ranvir", "ranbir"];
console.log("great news!i found a bigger dinner table!");

// adding more guests
Guests.unshift("deepka");
Guests.splice(Guests.length / 2,0, "varun");
Guests. push("janvi");

Guests.forEach(Guest => {
    console.log(`dear ${Guests}, would you like to join me for dinner?}`);
});
//*

//question 17
console.log("Unfortunately, i can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`sorry, ${removedGuest}, i can't invite you to dinner.`);

}
guests.forEach(guest => {
    console.log(`dear ${guests}, you're still invited to dinner.`);

});
guests.splice(0, guests.length);
console.log(guests);
//*

//question 18
let places:string[] = ["Paris","New York","Istabul","Dubai","Norway"];
console.log("original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("original order:", places);
console.log("Reverse Alphabetical order:", [...places].sort().reverse());
console.log("original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.sort();
console.log("Alphabetical order:", [...places].sort());

places.reverse();
console.log("Reverse Alphabetical order:", [...places].sort().reverse());
//*

//question 19
let Guest: string[] = ["alia", "ranver", "ranbir", "varun", "deepka", "janvi"];
console.log(`i am inviting ${Guest}people to dinner.`);
//*


//question 20
let countries:string[] = ["Pakistan", "India", "Paris", "New york"];
console.log("i like to vist this:", countries);
//*

//question 21
let Book:{title:string; author:string; yearpublished:string} ={
    title:"the queen",
    author:"Roshni Mahesh",
    yearpublished:"2029"
};
console.log(`bookinfo: ${Book.title}, by${Book.author}, ${Book.yearpublished}`);
//*

//question 22
let friends:string[]=['Roshni','Radhika','Bhawna'];
console.log(friends[3]);
friends[2]= "bhawna";
//*

//question 23
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
//*

//question 24
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
var fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
//*

//question 25
let Roshni_color = "green";
if (Roshni_color == "green") {
    console.log("You just earned 5 points!");
}
Roshni_color = "red";
if (Roshni_color == "green") {

}
//*

//question 26
Roshni_color = "green";
if (Roshni_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}

Roshni_color = "yellow";
if (Roshni_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}
//*

//question 27
Roshni_color = "green";
if (Roshni_color == "green") {
    console.log("You earned 5 points.");
} else if (Roshni_color == "yellow") {
    console.log("You earned 10 points.");
} else if (Roshni_color == "red") {
    console.log("You earned 15 points.");
}
Roshni_color = "yellow";
if (Roshni_color == "green") {
    console.log("You earned 5 points.");
} else if (Roshni_color == "yellow") {
    console.log("You earned 10 points.");
} else if (Roshni_color == "red") {
    console.log("You earned 15 points.");
}
Roshni_color = "red";
if (Roshni_color == "green") {
    console.log("You earned 5 points.");
} else if (Roshni_color == "yellow") {
    console.log("You earned 10 points.");
} else if (Roshni_color == "red") {
    console.log("You earned 15 points.");
}
//*

//question 28
let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}
//*

//question 29
let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("charries")) {
    console.log("You really like charries!");
}
//*

//quesion 30
let usernames1: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames1.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
//*

//question 31
let usernames: string[] = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Greet users
}
//*

//question 32
let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});
//*

//question 33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
//*

//question 34
let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");
//*

//question 35
let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
//*

//quesion 36
function make_shirt1(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("medium", "Code is Life");
//*

//question 37
function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
//*

//question 38
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
//*

//question 39
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
//*

//question 40
function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
//*

//question 41
let magicians: string[] = ["Roshni", "Radhika", "Bhawna"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);
//*

//question 42
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
//*

//question 43
let magician: string[] = ["Alice", "David", "Chris"];

function make_great1(magicians: string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magician => {
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
greatMagicians = void  (greatMagicians); // Shows modified names
//*

// question 44
function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
//*

//question 45
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
//*
