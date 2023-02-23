const inquirer = require("inquirer");

const questions = require('./src/questions');
const generateHTML = require('./src/template')

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const employees = [];

const init = async () => { //create inital condition so that addManage is only done once
  await addManager();
  await addEmployee();
};

const addManager = async () => { // promotes questions and pushes new object in to employees (same for the next 2 functions)
  const { name, email, officeNumber } = await inquirer.prompt(questions.managerQuestions);
  employees.push(new Manager(name, (employees.length + 10), email, officeNumber));
  console.log("Added a Manager");
};

const addEngineer = async () => {
  const { name, email, github } = await inquirer.prompt(questions.engineerQuestions);
  employees.push(new Engineer(name, (employees.length + 10), email, github));
  console.log("Added an engineer");
  addEmployee();
};

const addIntern = async () => {
  const { name, email, school } = await inquirer.prompt(questions.internQuestions);
  employees.push(new Intern(name, (employees.length + 10), email, school));
  console.log("Added an intern");
  addEmployee();
};

const addEmployee = async () => { // prompts list for enigneer inter or finish
  const { employeeType } = await inquirer.prompt(questions.contiuneChoice);

  switch (employeeType) { //get choice and check what choice to detemin case
    case "Engineer":
      return addEngineer();
    case "Intern":
      return addIntern();
    default:
      console.log("Well done! Team building finished!");
      generateHTML(employees)
        .then(res => console.log(res))
        .catch(err => console.log(err));
  }
};

init()