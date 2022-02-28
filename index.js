// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
const fs = require("fs");
const path = require('path');


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
            validation: emailInput => {
                if (emailInput) {
                    return true;
                } else{
                    {return 'Please enter your email to continue'}
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
                    {return 'Please enter your project title to continue'}
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
    const template = `# ${title}
    * [Description](#description)
    * [Usage](#usage)
    * [Installation](#installation)
    * [License](#license)
    * [Tests](#tests)
    * [Contribution](#contribution)
    * [Contact](#contact)
    
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

    ## Contact
    ${username}
    ${email}
    `

    // Function to create readme using fs 
    createNewFile(title,template);
}
);

// create createNewFile function 
function createNewFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}



