// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
const fs = require("fs");
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer.prompt(
    [
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
).then(({
    title,
    description,
    usage,
    installation, 
    license, 
    tests,
    contribution, 
    username,
    email 
}) =>{
    const template = `
    ## ${title}

    ## Table of Contents 
        - [Description](#description)
        - [Usage](#usage)
        - [Installation](#installation)
        - [Contribution](#contribution)
        - [Tests](#tests)
        - [License](#license)
        - [Contact Me](#contact)

    
    ## Description
    ${description}
    
    ## Usage
    ${usage}
  
    ## Installation
    ${installation}
    
    ## Contribution
    ${contribution}
    
    ## Tests
    ${tests}

     ## License
    ${license}
    ${renderBadge(license)}

    ## Contact
    * Username: ${username}
    * You can email at: ${email}
    `

    // Function to create readme using fs 
    createNewFile(title,template);
}
);

// create createNewFile function 
function createNewFile(fileName, data) {
    console.log('README file created!')
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
}

function renderBadge(license) {
    switch (license) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        case "Apache-2.0":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        case "GPL-3.0":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        case "BSD-2-Clause":
            return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
        case "BSD-3-Clause":
            return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        case "Mozilla Public License 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        default:
            return "";
    }
}