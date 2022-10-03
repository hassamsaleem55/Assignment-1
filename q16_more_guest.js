const { log } = require("console");

var friend_name = ["Haider", "Hamza", "Naqash", "Qamar", "Adeel"];
friend_name.forEach((value, index) => {
    console.log("Hello " + value + "! How are you? You are invited to today's dinner at my place. I would love to join. Thank you!")
});
console.log("")
console.log("Haider cannot make it")
console.log("")
friend_name = ["Alyan", "Hamza", "Naqash", "Qamar", "Adeel"];
friend_name.forEach((value, index) => {
    console.log("Hello " + value + "! How are you? You are invited to today's dinner at my place. I would love to join. Thank you!")
});
console.log("")
friend_name = ["Rehman", "Alyan", "Hamza", "Umer", "Naqash", "Qamar", "Adeel"];
friend_name.push("Haris")
friend_name.forEach((value, index) => {
    console.log("Hello " + value + "! How are you? You are invited to today's dinner at my place. I would love to join. Thank you!")
});



