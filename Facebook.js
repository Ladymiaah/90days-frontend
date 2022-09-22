//Adding more to our users to our our facebook database signin page

var database = [
    {
     username: "Joy",
     password: "Lovers"    
    },
    {
        username: "Helen",
        password: "1234"
    },
    {
        username: "Favour",
        password: "grace"
    }
];

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

function isUserValid (username,password) {
    for(var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
          return true;
        } 
        }
        return false;
}

function signIn(username, password) {
      if (isUserValid(username, password)) {
         console.log (newsFeed)
      } else {
        alert ("Sorry, wrong username and password")
      }
    }

var userNamePrompt = prompt("What's your name?");
var passwordPrompt = prompt("what's your password");
signIn(userNamePrompt, passwordPrompt);