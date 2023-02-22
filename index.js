const inquirer = require("inquirer");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const managerQuestions = [
    {
      type: "input",
      message: "Please, enter the manager's name?",
      name: "name"
    },
    {
      type: "input",
      message: "Please, enter the manager's email?",
      name: "email"
    },
    {
      type: "input",
      message: "Please, enter the manager's office number?",
      name: "officeNumber"
    }
  ];
  
  const engineerQuestions = [
    {
      type: "input",
      message: "Please, enterthe engineer's name?",
      name: "name"
    },
    {
      type: "input",
      message: "Please, enter the engineer's email?",
      name: "email"
    },
    {
      type: "input",
      message: "Please, enter the engineer's Github username?",
      name: "github"
    }
  ];
  
  const internQuestions = [
    {
      type: "input",
      message: "Please, enterthe intern's name?",
      name: "name"
    },
    {
      type: "input",
      message: "Please, enter the intern's email?",
      name: "email"
    },
    {
      type: "input",
      message: "Please, enter the intern's school?",
      name: "school"
    }
  ];

  const contiuneQuestion = [
    {
        type: "list",
        message: "Which type of employee would you like to add?",
        name: "employeeType",
        choices: ["Engineer", "Intern", "Finish building team"]
    }
  ] ;