var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//question 2
var NAME = 'roshni mahesh';
console.log('hello roshni,would you like to learn some TypeScript today?');
//*
//question 3
var PersonName = 'Roshni Mahesh';
console.log("lowwerCase:", PersonName.toLowerCase());
console.log("upperCase:", PersonName.toUpperCase());
console.log("titleCase:", PersonName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//*
//question 4
console.log('Albert Einstein once said,Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.');
//*
//question 5
var noma = "Albert Einstein";
var Message = "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.";
console.log('Albert Einstein,Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.');
//*
//question 6
var Name = '\t\n roshni /t/n';
console.log(' roshni ');
//*
//question 7 and 8
console.log(5 + 3);
console.log(9 - 1);
console.log(4 * 2);
console.log(16 / 2);
//*
//question 9
var favoriteNumber = 8;
console.log('my favorite number is 8.');
//*
//question 10
var UserName = 'roshni';
console.log('hi roshni,would you like to learn something');
//*
//question 11
var names = ["alia", "ranver", "ranbir"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
//*
//wuestion 12
var NAMES = ["alia", "ranvir", "ranbir"];
console.log("hi $[NAMES],would you like to learn new things?");
//*
//question 13
var transportation = ["honda motorcycle"];
console.log("i would like to own a ${transport}.");
//*
//question 14
var guests = ["alia", "ranvir", "ranbir"];
guests.forEach(function (guests) {
    console.log("dear ${guest}, would you like to join me for dinner?");
});
//*
//question 15
var unableToAttend = "alia";
var newGuest = "deepika";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(function (guest) {
    console.log('dear ${guest},would you like to join me for dinner');
});
//*
//question 16
var Guests = ["alia", "ranvir", "ranbir"];
console.log("great news!i found a bigger dinner table!");
// adding more guests
Guests.unshift("deepka");
Guests.splice(Guests.length / 2, 0, "varun");
Guests.push("janvi");
Guests.forEach(function (Guest) {
    console.log("dear ".concat(Guests, ", would you like to join me for dinner?}"));
});
//*
//question 17
console.log("Unfortunately, i can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("sorry, ".concat(removedGuest, ", i can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("dear ".concat(guests, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
//*
//question 18
var places = ["Paris", "New York", "Istabul", "Dubai", "Norway"];
console.log("original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("original order:", places);
console.log("Reverse Alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.sort();
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
places.reverse();
console.log("Reverse Alphabetical order:", __spreadArray([], places, true).sort().reverse());
//*
//question 19
var Guest = ["alia", "ranver", "ranbir", "varun", "deepka", "janvi"];
console.log("i am inviting ".concat(Guest, "people to dinner."));
//*
//question 20
var countries = ["Pakistan", "India", "Paris", "New york"];
console.log("i like to vist this:", countries);
//*
//question 21
var Book = {
    title: "the queen",
    author: "Roshni Mahesh",
    yearpublished: "2029"
};
console.log("bookinfo: ".concat(Book.title, ", by").concat(Book.author, ", ").concat(Book.yearpublished));
//*
//question 22
var friends = ['Roshni', 'Radhika', 'Bhawna'];
console.log(friends[3]);
friends[2] = "bhawna";
//*
//question 23
var car = 'subaru';
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
var Roshni_color = "green";
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
}
else {
    console.log("You just earned 10 points.");
}
Roshni_color = "yellow";
if (Roshni_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
//*
//question 27
Roshni_color = "green";
if (Roshni_color == "green") {
    console.log("You earned 5 points.");
}
else if (Roshni_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (Roshni_color == "red") {
    console.log("You earned 15 points.");
}
Roshni_color = "yellow";
if (Roshni_color == "green") {
    console.log("You earned 5 points.");
}
else if (Roshni_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (Roshni_color == "red") {
    console.log("You earned 15 points.");
}
Roshni_color = "red";
if (Roshni_color == "green") {
    console.log("You earned 5 points.");
}
else if (Roshni_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (Roshni_color == "red") {
    console.log("You earned 15 points.");
}
//*
//question 28
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//*
//question 29
var favorite_fruits = ["apples", "bananas", "cherries"];
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("charries")) {
    console.log("You really like charries!");
}
//*
//quesion 30
var usernames1 = ["admin", "user1", "user2", "user3", "user4"];
usernames1.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
//*
//question 31
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Greet users
}
//*
//question 32
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
//*
//question 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
//*
//question 34
var pizzas = ["pepperoni", "margherita", "hawaiian"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log("I really love pizza!");
//*
//question 35
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
//*
//quesion 36
function make_shirt1(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt("medium", "Code is Life");
//*
//question 37
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
//*
//question 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
//*
//question 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
//*
//question 40
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
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
var magicians = ["Roshni", "Radhika", "Bhawna"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
//*
//question 42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
//*
//question 43
var magician = ["Alice", "David", "Chris"];
function make_great1(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
greatMagicians = void (greatMagicians); // Shows modified names
//*
// question 44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(', '), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
//*
//question 45
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
//*
