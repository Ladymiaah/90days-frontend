// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var user = {
    Username: "Joy",
    Password: "Lovers",
};

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [
    {
     username: "Joy",
     password: "Lovers"    
    }
]

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsFeed = [
    {
        username: "Paul",
        timeline: "Tired from all that learning!"
    },
    {
        username: "Helen",
        timeline: "Javascript is just like everyother!"
    },
    {
        username: "Grace",
        timeline: "Javascript is cool!"
    }
]

// creating a facebook signup page
var userNamePrompt = prompt("What's your name?");
var passwordPrompt = prompt("what's your password?");
function signIn(user, pass) {
    if (user===database[0].username && pass===database[0].password) {
        console.log (newsFeed);
    } else {
        alert("Sorry, your username and password is not correct!")
    }
}
signIn(userNamePrompt, passwordPrompt)