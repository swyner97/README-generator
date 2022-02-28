function renderLicenseBadge(license) {
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
};

function renderLicenseSection(license) {
    if (license === "") {
    } else {
        return (
            `
        Copyright © ${license}. All rights reserved. 
        
        Licensed under the ${license} license.`)
    };
};


function generateMarkdown(data) {
    return ` ## ${data.title} 👋

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#contributing)
- [Tests](#tests)
- [Contact Me](#Contact)

## Description

🔍 ${data.description}

## Installation

💾 ${data.installation}

## Usage

💻 ${data.usage}

## License
${renderLicenseSection(data.license)}
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by the ${renderLicenseBadge(data.license)} license. 

## Credits

👪 ${data.contribution}

## Tests

✏️ ${data.tests}

## Contact Me

✋ Find me on GitHub: https://github.com/${data.username}

✉️ Email me with any questions: ${data.email}`;

};

module.exports = generateMarkdown;