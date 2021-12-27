// Required Items
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array to hodl employees
const employees = [];

// Warm intro to app
const introQuestion = {
	type: 'list',
	message: `
        Welcome to the Team Profile Generator Application. 
        This program generates a HTML-based team profile of your team members as well as some brief information on each team member. 
        Simply follow the prompts!

        Do you wish to continue?`,
	choices: ['Yes, Start Building Team', 'No, Close Application'],
	name: 'introQ',
};

// Intro/main start function
function cliIntro() {
	inquirer.prompt(introQuestion).then((appStart) => {
		if (appStart.introQ === 'Yes, Start Building Team') {
			initApp();
		} else {
			console.log(`
        ---------------------Application Canceled---------------------
            `);
		}
	});
}

// Function for main functionality
function initApp() {
    makeHtml();
    addMember();
}

// Questions for CLI team member info
function addMember() {
    inquirer.prompt([{
        message: "Enter team member's name.",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role.",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id number.",
        name: "id"
    },
    {
        message: "Enter team member's email address.",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    endHtml();
                }
            });
            
        });
    });
}

// Function for starting HTML
function makeHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="">
            <div class="row">
                <div class="col-12 jumbotron bg-info mb-3 team-heading text-white">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">`;
    fs.writeFile("./dist/roster.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

// Function for appending team info to HTML
function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `
            <div class="card border-info m-3 p-0" style="max-width: 18rem; min-width: 15rem;">
            <div class="card-header">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-cogs mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${email}"> ${email}</a></li>
                    <li class="list-group-item">GitHub: ${gitHub}</li>
                </ul>
            </div>
        </div>
        `;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `
            <div class="card border-info m-3 p-0" style="max-width: 18rem; min-width: 15rem;">
            <div class="card-header">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${email}"> ${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>
        `;
        } else {
            const officeNum = member.getOfficeNumber();
            data = `
            <div class="card border-info m-3 p-0" style="max-width: 18rem; min-width: 15rem;">
                <div class="card-header">
                    <h2 class="card-title">${name}</h2>
                    <h3 class="card-title"><i class="fas fa-users mr-2"></i>Manager</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${email}"> ${email}</a></li>
                        <li class="list-group-item">Office number: ${officeNum}</li>
                    </ul>
                </div>
        </div>
        `
        }
        console.log("Compiling Team");
        fs.appendFile("./dist/roster.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });  
}

// Funtion for closing out HTML
function endHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/roster.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log(`
    ---------------------Team Roster Complete, Check Your "dist" Folder---------------------
    `);
}

// Main app call to start
cliIntro();