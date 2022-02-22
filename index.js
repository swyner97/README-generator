// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter project description.'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Provide a Table of Contents.',
        default: "Usage, License, Author"
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installations instructions:',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions:',
        default: 'npm test'
    },
    {
        type: 'checkbox',
        name: 'lisence',
        message: 'License',
        choices: ["MIT", "Apache", "ISC", "GNU", "None"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
