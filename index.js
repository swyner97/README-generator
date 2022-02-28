// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
const fs = require("fs");
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input

const questions = [
    {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',
    validate: usernameInput => {
        if (usernameInput) {
            return true;
        } else {
          {return 'Please enter your Github username'}
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Email:',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            {return 'Please enter your email to continue'}
        }
    }
},
{
    type: 'input',
    name: 'title',
    message: 'Project title:',
    validate: projectTitle => {
        if (projectTitle) {
            return true;
        } else {
            {return 'Please enter your project title to continue'}
        }
    }

},
{
    type: 'input',
    name: 'description',
    message: 'Project description:',
    validate: projectDescription => {
        if (projectDescription) {
            return true;
        } else {
            {return 'Please enter the project description to continue'}
        }
    }
},
{
    type: 'input',
    name: 'contents',
    message: 'Provide a Table of Contents.',
    default: "Description, Usage, License, Contribution, Author"
},
{
    type: 'input',
    name: 'installation',
    message: 'Installation instructions:',
    default: 'npm install'
},
{
    type: 'input',
    name: 'usage',
    message: 'Usage information:'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Contribution:'
},
{
    type: 'input',
    name: 'tests',
    message: 'Test instructions:',
    default: 'npm test'
},
{
    type: 'checkbox',
    name: 'license',
    message: 'License',
    choices: ["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "Mozilla Public License 2.0", "IBM", "GPL", "None"]
}];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing the app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Your README file has been successfully generated");
            writeToFile("./dist/README.md", generateMarkdown({ ...inquirerAnswers }));
        })
}

init();