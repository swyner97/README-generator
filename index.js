// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const writeFile = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('You need to enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Project title?',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log('Please input your project title!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter project description.',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Come on now, you need a project description, silly!');
                    return false;
                }
            }
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
            name: 'license',
            message: 'License',
            choices: ["MIT", "Apache", "ISC", "GNU", "None"]
        }

    ]

function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        writeFile('./readme.md', generateMarkdown(answers))
    })
}

init();
