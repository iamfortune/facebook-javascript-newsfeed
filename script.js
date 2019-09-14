var database = [
    {
        username: "kay",
        password: "1234567",
    },
    {
        username: "ingrid",
        password: "777"
    },
    {
        username: "duru",
        password: "1234"
    }
];

var newsFeed = [
    {
        username: "kay",
        timeline: "learning to code javascript!",
    },
    {
        username: "fortune",
        timeline: "just made my first dough in coding!!",
    },
    {
        username: "jemmy",
        timeline: "want to learn coding!!!",
    }
];


function isUservalid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && 
            database[i].password === password) {
                return true;
            } 
    }
    return false;
}

function signIn(username, password) {
if (isUservalid(username, password)) {
    console.log(newsFeed);
} else {
            alert('sorry, wrong username and password');
        }
}

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);