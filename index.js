// bring in inquirer
const inquirer = require("inquirer");
const fs = require("fs");

// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employeeList = [];

const managerQuestions = [
    {
        type: "input",
        message: "Enter team manager's name:",
        name: "name",
    },

    {
        type: "number",
        message: "Enter team manager's employee ID:",
        name: "id",
    },

    {
        type: "input",
        message: "Enter team manager's email address:",
        name: "email",
    },

    {
        type: "number",
        message: "Enter team manager's office number:",
        name: "officeNumber",
    },
];

const engineerQuestions = [
    {
        type: "input",
        message: "Enter engineer's name:",
        name: "name",
    },

    {
        type: "number",
        message: "Enter engineer's employee ID:",
        name: "id",
    },

    {
        type: "input",
        message: "Enter engineer's email address:",
        name: "email",
    },

    {
        type: "input",
        message: "Enter engineer's GitHub username:",
        name: "github",
    },
];

const internQuestions = [
    {
        type: "input",
        message: "Enter intern's name:",
        name: "name",
    },

    {
        type: "number",
        message: "Enter intern's employee ID:",
        name: "id",
    },

    {
        type: "input",
        message: "Enter intern's email address:",
        name: "email",
    },

    {
        type: "input",
        message: "Enter intern's school:",
        name: "school",
    },
];

const employeeQuestion = [
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "employee",
        choices: ['Engineer', 'Intern', 'I am done adding team members.'],
    },
]

// create function that runs inquirer prompt questions .then( ()=> inquirer.prompt()then) // chain promises

const teamQuestions = () => {
    return managerPrompt()
        .then(() => {
            return employeePrompt();
        })
}

const managerPrompt = () => {
    return inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            employeeList.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
        })
};

const engineerPrompt = () => {
    return inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            employeeList.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
        })
};

const internPrompt = () => {
    return inquirer
        .prompt(internQuestions)
        .then((answers) => {
            employeeList.push(new Intern(answers.name, answers.id, answers.email, answers.school))
        })
};

const employeePrompt = () => {
    return inquirer
        .prompt(employeeQuestion)
        .then((answer) => {
            if (answer.employee === 'Engineer') {
                return engineerPrompt()
                    .then(() => {
                        return employeePrompt();
                    })
            }
            if (answer.employee === 'Intern') {
                return internPrompt()
                    .then(() => {
                        return employeePrompt();
                    })
            }
            if (answer.employee === 'I am done adding team members.') {
                console.log(employeeList);
                return employeeList;
            }
        })
}

generateManager = () => {
    let template = '';
    employeeList.forEach(employee => {
        if (employee.getRole() === 'Manager') {
            template +=
                `<div class="custom-card card me-3" style="width: 18rem;">
                    <div class="card-body">
                        <h4 class="values">${employee.name}</h4>
                        <h5 class="values">Manager</h5>
                        <h6 class="card-title values pb-2">ID: ${employee.id}</h6>
                        <h6 class="card-title values pb-2">Email: ${employee.email}</h6>
                        <h6 class="card-title values">Office Number: ${employee.officeNumber}</h6>
                    </div>
                </div>`
        }
    });
    return template;
}

generateEngineer = () => {
    let template = '';
    let engineerList = [];
    employeeList.forEach(employee => {
        if (employee.getRole() === 'Engineer') {
            engineerList.push(employee)
        }
    })
    for (let i = 0; i < engineerList.length; i++) {
        template +=
            `<div class="custom-card card me-3" style="width: 18rem;">
            <div class="card-body">
                <h4 class="values">${engineerList[i].name}</h4>
                    <h5 class="values">Intern</h5>
                    <h6 class="card-title values pb-2">ID: ${engineerList[i].id}</h6>
                    <h6 class="card-title values pb-2">Email: ${engineerList[i].email}</h6>
                    <a href="https://github.com/${engineerList[i].github}"class="card-title values">Github: ${engineerList[i].github}</a>
            </div>
        </div>`
    }
    return template;
}

generateIntern = () => {
    let template = '';
    let internList = [];
    employeeList.forEach(employee => {
        if (employee.getRole() === 'Intern') {
            internList.push(employee)
        }
    })
    for (let i = 0; i < internList.length; i++) {
        template +=
            `<div class="custom-card card me-3" style="width: 18rem;">
            <div class="card-body">
                <h4 class="values">${internList[i].name}</h4>
                    <h5 class="values">Intern</h5>
                    <h6 class="card-title values pb-2">ID: ${internList[i].id}</h6>
                    <h6 class="card-title values pb-2">Email: ${internList[i].email}</h6>
                    <h6 class="card-title values">School: ${internList[i].school}</h6>
            </div>
        </div>`
    }
    return template;
}

const generateHTML = () => {
    return `<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Weather Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
    <!-- Header containing application title -->
    <header class="custom-header text-light p-3">
        <div class="text-center">
            <h3>My Team</h3>
        </div>
    </header>
    <!-- Team Cards -->
    <div class="forecast-cards d-flex flex-row">
        ${generateManager()}
        ${generateEngineer()}
        ${generateIntern()}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
    </html>`;
}

teamQuestions()
    .then(() => {
        const htmlPageContent = generateHTML();
        console.log(htmlPageContent);
        fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    })

// end point = loop employee array = convert into HTML

// const htmlPageContent = generateHTML();

// fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
// );

// write tests