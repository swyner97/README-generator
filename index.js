// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');


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
            choices: ["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "Mozilla Public License 2.0", "IBM", "GPL", "None"]
        }

    ]

    function generateReadme(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }

    function init() {
        inquirer.prompt(questions).then(data => {
            console.log ("README file created")
            generateReadme("./dist/README.md", generateMarkdown(data))    
        })   
       
       }
       
       init();

