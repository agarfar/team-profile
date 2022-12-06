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
                // `<div class="custom-card card me-3" style="width: 18rem;">
                //     <div class="card-body">
                //         <h4 class="values">${employee.name}</h4>
                //         <h5 class="values">Manager</h5>
                //         <h6 class="card-title values pb-2">ID: ${employee.id}</h6>
                //         <h6 class="card-title values pb-2">Email: ${employee.email}</h6>
                //         <h6 class="card-title values">Office Number: ${employee.officeNumber}</h6>
                //     </div>
                // </div>`;

                `<div class="card me-3" style="width: 18rem; margin-top: 15px">
                <div class="card-body" style="background-color: #488cff;">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text">Manager</p>
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
            //     `<div class="custom-card card me-3" style="width: 18rem;">
            //     <div class="card-body">
            //         <h4 class="values">${engineerList[i].name}</h4>
            //             <h5 class="values">Engineer</h5>
            //             <h6 class="card-title values pb-2">ID: ${engineerList[i].id}</h6>
            //             <h6 class="card-title values pb-2">Email: ${engineerList[i].email}</h6>
            //             <a href="https://github.com/${engineerList[i].github}"target="_blank"class="card-title values">Github: ${engineerList[i].github}</a>
            //     </div>
            // </div>`

            `<div class="card me-3" style="width: 18rem; margin-top: 15px">
            <div class="card-body" style="background-color: #488cff;">
                <h5 class="card-title">${engineerList[i].name}</h5>
                <p class="card-text">Engineer</p>
            </div>
        <div class="card-body">
            <ul class="list-group list-group-flush" style="padding: 15px;border: 1px solid lightgrey;">
                <li class="list-group-item">ID: ${engineerList[i].id}</li>
                <li class="list-group-item"><span><a href="mailto: ${engineerList[i].email}"><span style="color: black">Email: </span>${engineerList[i].email}</a></span></li>
                <li class="list-group-item"><span><a href="https://github.com/${engineerList[i].github}target="_blank"class="card-title values"><span style = "color: black">GitHub: </span>${engineerList[i].github}</a></span></li>
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
            //     `<div class="custom-card card me-3" style="width: 18rem;">
            //     <div class="card-body">
            //         <h4 class="values">${internList[i].name}</h4>
            //             <h5 class="values">Intern</h5>
            //             <h6 class="card-title values pb-2">ID: ${internList[i].id}</h6>
            //             <h6 class="card-title values pb-2">Email: ${internList[i].email}</h6>
            //             <h6 class="card-title values">School: ${internList[i].school}</h6>
            //     </div>
            // </div>`;

            `<div class="card me-3" style="width: 18rem; margin-top: 15px">
                    <div class="card-body" style="background-color: #488cff;">
                        <h5 class="card-title">${internList[i].name}</h5>
                        <p class="card-text">Intern</p>
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
    // return `<html lang="en">
    // <head>
    // <meta charset="utf-8">
    // <meta name="viewport" content="width=device-width, initial-scale=1">
    // <title>Weather Dashboard</title>
    // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    // <link rel="stylesheet" href="./dist/style.css">
    // </head>
    // <body>
    // <!-- Header containing application title -->
    // <header class="custom-header text-light p-5">
    //     <div class="text-center">
    //         <h3>My Team</h3>
    //     </div>
    // </header>
    // <!-- Team Cards -->
    // <div class = "d-flex flex-column align-items-center justify-content-center" style = 'margin-top: 10vh'>
    // //         <!-- style="display: flex; flex-direction: column; height: auto; align-items: center; justify-content: center; margin-top: 10vh;"> -->
    // <div class="forecast-cards d-flex flex-row">
    //     ${generateManager()}
    //     ${generateEngineer()}
    //     ${generateIntern()}
    // </div>
    // </div>
    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    // </body>
    // </html>`;

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
        <script src="assets/js/script.js"></script>
    </body>
    </html>`;

    //return `
    //     <body>
    //     <!-- Header containing application title -->
    //     <header class="custom-header text-light p-5">
    //         <div class="text-center">
    //             <h3>My Team</h3>
    //         </div>
    //     </header>
    //     <div class = "d-flex flex-column align-items-center justify-content-center" style = 'margin-top: 10vh'>
    //         <!-- style="display: flex; flex-direction: column; height: auto; align-items: center; justify-content: center; margin-top: 10vh;"> -->
    //         <div class="team-cards d-flex flex-row flex-wrap justify-content-center" style="width: 50%;">
    //             <div class="card me-3" style="width: 18rem; margin-top: 15px ">
    //                 <div class="card-body" style="background-color: #488cff;">
    //                     <h5 class="card-title">Name</h5>
    //                     <p class="card-text">Role</p>
    //                 </div>
    //                 <div class="card-body">
    //                     <ul class="list-group list-group-flush" style="padding: 15px;border: 1px solid lightgrey;">
    //                         <li class="list-group-item">ID: </li>
    //                         <li class="list-group-item">Email: </li>
    //                         <li class="list-group-item">School: </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //             <div class="card me-3" style="width: 18rem; margin-top: 15px">
    //                 <div class="card-body" style="background-color: #488cff;">
    //                     <h5 class="card-title">Name</h5>
    //                     <p class="card-text">Role</p>
    //                 </div>
    //                 <div class="card-body">
    //                     <ul class="list-group list-group-flush" style="padding: 15px;border: 1px solid lightgrey;">
    //                         <li class="list-group-item">ID: </li>
    //                         <li class="list-group-item">Email: </li>
    //                         <li class="list-group-item">School: </li>
    //                     </ul>
    //                 </div>
    //             </div>
    // <div class="card me-3" style="width: 18rem; margin-top: 15px">
    //     <div class="card-body" style="background-color: #488cff;">
    //         <h5 class="card-title">Name</h5>
    //         <p class="card-text">Role</p>
    //     </div>
    //     <div class="card-body">
    //         <ul class="list-group list-group-flush" style="padding: 15px;border: 1px solid lightgrey;">
    //             <li class="list-group-item">ID: </li>
    //             <li class="list-group-item">Email: </li>
    //             <li class="list-group-item">School: </li>
    //         </ul>
    //     </div>
    // </div>
    //             <div class="card me-3" style="width: 18rem; margin-top: 15px">
    //                 <div class="card-body" style="background-color: #488cff;">
    //                     <h5 class="card-title">Name</h5>
    //                     <p class="card-text">Role</p>
    //                 </div>
    //                 <div class="card-body">
    //                     <ul class="list-group list-group-flush" style="padding: 15px;border: 1px solid lightgrey;">
    //                         <li class="list-group-item">ID: </li>
    //                         <li class="list-group-item">Email: </li>
    //                         <li class="list-group-item">School: </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //             <div class="card me-3" style="width: 18rem; margin-top: 15px">
    //                 <div class="card-body" style="background-color: #488cff;">
    //                     <h5 class="card-title">Name</h5>
    //                     <p class="card-text">Role</p>
    //                 </div>
    //                 <div class="card-body">
    //                     <ul class="list-group list-group-flush" style="padding: 15px;border: 1px solid lightgrey;">
    //                         <li class="list-group-item">ID: </li>
    //                         <li class="list-group-item">Email: </li>
    //                         <li class="list-group-item">School: </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    //         integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
    //         crossorigin="anonymous"></script>
    //     <script src="assets/js/script.js"></script>
    // </body>
    // </html>`

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
