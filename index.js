// bring in inquirer
const inquirer = require("inquirer");
const fs = require("fs");

// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employeeList = [];

// Manager Prompt Questions
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

// Engineer Prompt Questions
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

// Intern Prompt Questions
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

// Prompt to add another employee
const employeeQuestion = [
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "employee",
        choices: ['Engineer', 'Intern', 'I am done adding team members.'],
    },
]

// returns manager prompt, waits for response, then returns prompt to add another employee
const teamQuestions = () => {
    return managerPrompt()
        .then(() => {
            return employeePrompt();
        })
}

// Asks user for manager information, then pushes new Manager object to list of employees
const managerPrompt = () => {
    return inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            employeeList.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
        })
};

// Asks user for engineer information, then pushes new engineer object to list of employees
const engineerPrompt = () => {
    return inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            employeeList.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
        })
};

// Asks user for intern information, then pushes new Intern object to list of employees
const internPrompt = () => {
    return inquirer
        .prompt(internQuestions)
        .then((answers) => {
            employeeList.push(new Intern(answers.name, answers.id, answers.email, answers.school))
        })
};

// Recursive function -> if user requests to input engineer/intern information, the prompt loops. If not, the function ends and a list of employees is returned
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

// Uses list of employees to generate card with information on team manager
generateManager = () => {
    let template = '';
    employeeList.forEach(employee => {
        if (employee.getRole() === 'Manager') {
            template +=
                `<div class="card me-3" style="width: 18rem; margin-top: 15px">
                <div class="card-body" style="background-color: #488cff;">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text"><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" class="bi bi-cup-hot" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5
                         6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5
                          1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z" />
                    <path
                        d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593
                         0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31
                          3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0
                           .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53
                            1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167
                             4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0
                              .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0
                              .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6
                               1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5
                               0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593
                               0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385
                                5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334
                                4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446
                                0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />
                </svg></span> Manager</p>
                </div>
            <div class="card-body">
                <ul class="list-group list-group-flush" style="padding: 15px;border: 1px solid lightgrey;">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item"><span><a href="mailto: ${employee.email}"><span style = "color: black">Email: </span>${employee.email}</a></span></li>
                    <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                </ul>
            </div>
            </div>`;

        }
    });
    return template;
}

// Uses list of employees to generate card with information on team engineer
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
            `<div class="card me-3" style="width: 18rem; margin-top: 15px">
            <div class="card-body" style="background-color: #488cff;">
                <h5 class="card-title">${engineerList[i].name}</h5>
                <p class="card-text"><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="40"
                fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 20 20">
                <path
                    d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5
                     0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
            </svg></span> Engineer</p>
            </div>
        <div class="card-body">
            <ul class="list-group list-group-flush" style="padding: 15px;border: 1px solid lightgrey;">
                <li class="list-group-item">ID: ${engineerList[i].id}</li>
                <li class="list-group-item"><span><a href="mailto: ${engineerList[i].email}"><span style="color: black">Email: </span>${engineerList[i].email}</a></span></li>
                <li class="list-group-item"><span><a href="https://github.com/${engineerList[i].github}"target="_blank"class="card-title values"><span style = "color: black">GitHub: </span>${engineerList[i].github}</a></span></li>
            </ul>
        </div>
        </div>`;

    }
    return template;
}

// Uses list of employees to generate card with information on team intern
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
            `<div class="card me-3" style="width: 18rem; margin-top: 15px">
                    <div class="card-body" style="background-color: #488cff;">
                        <h5 class="card-title">${internList[i].name}</h5>
                        <p class="card-text"><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 20 20">
                        <path
                            d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z">
                        </path>
                        <path
                            d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z">
                        </path>
                    </svg></span> Intern</p>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush" style="padding: 15px;border: 1px solid lightgrey;">
                            <li class="list-group-item">ID: ${internList[i].id}</li>
                            <li class="list-group-item"><span><a href="mailto: ${internList[i].email}"><span style = "color: black">Email: </span>${internList[i].email}</a></span></li>
                            <li class="list-group-item">School: ${internList[i].school}</li>
                        </ul>
                    </div>
                </div>`
    }
    return template;
}

// Uses team generator functions to return a string formatted as HTML
const generateHTML = () => {

    return `
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Dashboard</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <!-- Header containing page title -->
        <header class="custom-header text-light p-5">
            <div class="text-center">
                <h3>My Team</h3>
            </div>
        </header>
        <div class = "d-flex flex-column align-items-center justify-content-center" style = 'margin-top: 10vh'>
            <!-- style="display: flex; flex-direction: column; height: auto; align-items: center; justify-content: center; margin-top: 10vh;"> -->
            <div class="team-cards d-flex flex-row flex-wrap justify-content-center" style="width: 50%;">
                ${generateManager()}
                ${generateEngineer()}
                ${generateIntern()}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
            crossorigin="anonymous"></script>
    </body>
    </html>`;

}

// Runs team member prompts, generates a string of formatted HTML, then writes a new index.html file to the ./dist folder in the repository
teamQuestions()
    .then(() => {
        const htmlPageContent = generateHTML();
        // console.log(htmlPageContent);
        fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    })
