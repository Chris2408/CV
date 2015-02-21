var bio = {
    "name": "Christophe Nickel",
    "role": "Web developper",
    "wecome message": "Welcome on my CV",
    "contacts": {
        "mobile": "0041 76 822 45 35",
        "email": "chris240890@gmail.com",
        "github": "chris2408",
        "location": "Switzerland"
    },
    "bioPic": "images/fry.jpg",
    "skills": [
        "skill1",
        "skill2",
        "skill3",
        "skill4"
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Observatoire Valaisan du Tourisme",
            "title": "IT developper",
            "location": "Sierre, Switzerland",
            "dates": "2014-now",
            "description": "todo"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "projet1",
            "dates": "date",
            "description": "descritpion",
            "images": "img"
        }
    ]
};

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

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
}