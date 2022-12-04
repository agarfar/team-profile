// bring in inquirer
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
// const engineerList = [];
// const internList = [];
const employeeList = [];

const managerQuestions = [
    {
        type: "input",
        message: "Enter team manager's name:",
        name: "name",
    },

    {
        type: "input",
        message: "Enter team manager's employee ID:",
        name: "id",
    },

    {
        type: "input",
        message: "Enter team manager's email address:",
        name: "email",
    },

    {
        type: "input",
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
        type: "input",
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
        type: "input",
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

// employees = [{Manager}, {Engineer}, {Intern}]

// create function that runs inquirer prompt questions .then( ()=> inquirer.prompt()then) // chain promises

// const teamQuestions = () => {
//     // inquirer
//     //     .prompt(managerQuestions)
//     //     .then((answers) => {
//     //         employeeList.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
//     //     })
//     managerPrompt()
//         .then(() => {
//             // inquirer
//             //     .prompt(employeeQuestion)
//             //     .then((employeeAnswer) => {
//             //         return employeeAnswer;
//             //     })
//             employeePrompt()
//                 .then((response) => {
//                     if (response === 'Engineer') {
//                         // inquirer
//                         //     .prompt(engineerQuestions)
//                         //     .then((answers) => {
//                         //         employeeList.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
//                         //     })
//                         engineerPrompt()
//                         employeePrompt()
//                     }
//                     if (response === 'Intern') {
//                         // inquirer
//                         //     .prompt(internQuestions)
//                         //     .then((answers) => {
//                         //         employeeList.push(new Intern(answers.name, answers.id, answers.email, answers.school))
//                         //     })
//                         internPrompt();
//                     }
//                     else {
//                         console.log(employeeList);
//                         return employeeList;
//                     }
//                 })

//         })
// }

const teamQuestions = () => {
    managerPrompt()
        .then(() => {
            employeePrompt();
        })
}

// import inquirer from "inquirer";

// const questions = [
//   {
//     type: "number",
//     name: "children_count",
//     message: "How many children do you have?",
//   },
//   {
//     type: "input",
//     name: "first_child_name",
//     message: "What is the eldest child's name?",
//   },
//   {
//     type: "confirm",
//     name: "is_finished",
//     message: "Are you done?",
//   },
// ];

// function getAnswers() {
//   return inquirer.prompt(questions).then((answers) => {
//     if (answers.is_finished) {
//       return answers;
//     } else {
//       return getAnswers();
//     }
//   });
// }

// getAnswers()
//   .then(console.log)
//   .catch((error) => {});

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
                engineerPrompt()
                    .then(() => {
                        return employeePrompt();
                    })
            }
            if (answer.employee === 'Intern') {
                internPrompt()
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

teamQuestions();

// end point = loop employee array = convert into HTML

// const generateHTML = () =>{
//     `<html lang="en"><head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <title>Weather Dashboard</title>
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
//   <link rel="stylesheet" href="./assets/css/style.css">
// </head>

// <body>
//   <!-- Header containing application title -->
//   <header class="custom-header text-light p-3">
//       <div class="text-center">
//           <h3>My Team</h3>
//       </div>
//   </header>
//   <div class="d-flex col-12 flex-row">
//       <div class="d-flex col-9 flex-column" style="width: 80vw">
//           <!-- 5-Day Forecast -->
//           <div class="col-9 d-flex flex-column" style="width: 100%;">
//               <div class="forecast-cards d-flex flex-row">
//               <div class="custom-card card me-3" style="width: 18rem;">
//                       <div class="card-body">
//                           <h4 class="values">Erica</h4>
//                           <h5 class="values">Manager</h5>
//                           <h6 class="card-title values forecast-temp pb-2">ID: 23</h6>
//                           <h6 class="card-title values forecast-wind pb-2">Email: erica@gmail.com</h6>
//                           <h6 class="card-title values forecast-humidity">Office Number: 69%</h6>
//                       </div>
//                   </div>

//               <div class="custom-card card me-3" style="width: 18rem;">
//                       <div class="card-body">
//                           <h4 class="values">Tom</h4>
//                           <h5 class="values">Engineer</h5>
//                           <h6 class="card-title values pb-2">ID: 56</h6>
//                           <h6 class="card-title values pb-2">Email: tom@gmail.com</h6>
//                           <h6 class="card-title values forecast-humidity">GitHub: githubUser</h6>
//                       </div>
//                   </div>

//               <div class="custom-card card me-3" style="width: 18rem;">
//                       <div class="card-body">
//                           <h4 class="values">Eric</h4>
//                           <h5 class="values">Engineer</h5>
//                           <h6 class="card-title values forecast-temp pb-2">ID: 42</h6>
//                           <h6 class="card-title values forecast-wind pb-2">Email: eric@gmail.com</h6>
//                           <h6 class="card-title values forecast-humidity">GitHub: githubUser</h6>
//                       </div>
//                   </div>

//               <div class="custom-card card me-3" style="width: 18rem;">
//                       <div class="card-body">
//                           <h4 class="values">Rachel</h4>
//                           <h5 class="values">Engineer</h5>
//                           <h6 class="card-title values forecast-temp pb-2">ID: 58</h6>
//                           <h6 class="card-title values forecast-wind pb-2">Email: rachel@gmail.com</h6>
//                           <h6 class="card-title values forecast-humidity">GitHub: githubUser</h6>
//                       </div>
//                   </div>

//               <div class="custom-card card me-3" style="width: 18rem;">
//                       <div class="card-body">
//                           <h4 class="values">12/09/2022</h4>
//                           <h5 class="values">Intern</h5>
//                           <h6 class="card-title values forecast-temp pb-2">ID: 44</h6>
//                           <h6 class="card-title values forecast-wind pb-2">Email: test@gmail.com</h6>
//                           <h6 class="card-title values forecast-humidity">School: UCSB</h6>
//                       </div>
//                   </div>
//               </div>
//           </div>

//       </div>

//   </div>
//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
//   <script src="assets/js/script.js"></script>

// </body></html>`;
// }

// write tests