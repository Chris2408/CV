// Method replace

var email = "chris@udacity.com";
var newEmail = email.replace("udacity","gmail");

console.log(email);
console.log(newEmail);

// Method append

var aswesomeThoughts = " My name is Chris and I am AWESOME!";

var funTougths = aswesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funTougths); // adds an element to the end of an HTML block


// Write name and role in CV, method prepend
var name = "Christophe Nickel";
var role = "Web developper"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole); // adds an element to the beginning of an HTML block
$("#header").prepend(formattedName);


// Method slice (take a part of a string)
var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = s[1].toUpperCase() + s.slice(2);
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));


// Method slice (take a part of a string)

function incrementLastArrayElement(_array)  {
    var popped = _array.pop(); // array.pop() removes the last element of the array.
    _array.push(popped+1); // array.push() method adds an element to the end of an array
    return newArray;
}

// Method to format name
// My version

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    finalName = finalName.toLowerCase();
    finalName = finalName.charAt(0).toUpperCase() + finalName.slice(1);
    var space = finalName.indexOf(' ');
    finalName = finalName.slice(0, space+1) + finalName.slice(space+1).toUpperCase();
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

// Udacity version
function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}


// different method to save data

var skills = ["skills1", "skills2", "skills3", "skills4"];

var bio = {
	"name" : "Christophe Nickel",
	"role" : "Web developper",
	"contacts" :{
		"mobile" : "0041 76 822 45 35",
		"email" : "chris240890@gmail.com",
		"github" : "chris2408",
		"location" : "Switzerland"
 	},
	"bioPic" : "images/fry.jpg",
	"wecome message" : "Welcome on my CV",
	"skills" : skills
};

var work = {};
work.jobPosition = "IT developper";
work.employer = "Observatoire Valaisan du Tourisme";
work.years = "2014-now";
work.city = "Sierre, Switzerland"

var education = {
    "schools": [
        {
            "name": "HES-So Valais",
            "location": "Sierre, Switzerland",
            "degree": "Bachelor en Informatique de Gestion",
            "majors": [
                "Informatique"
            ],
            "minors": [
                "Economie"
            ],
            "dates": [
                2011,
                2012,
                2013,
                2014
            ],
            "url": "http://expemple.com"
        },
        {
            "name": "Stafford University",
            "location": "Stafford, GB",
            "degree": "Master en Informatique",
            "majors": [
                "Informatique"
            ],
            "minors": [
                "Economie"
            ],
            "dates": [
                2015,
                2016
            ],
            "url": "http://expemple.com"
        }
    ],
    "onlinecours": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com/course/ud804"
        }
    ]
}




$("#workExperience").append(work["jobPosition"]);
$("#education").append(education.name);

// bio["city"] or bio.city

$("#main").append(bio.contacts.location);

// Safe method
var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};