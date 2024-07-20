const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ pTitle, pMotive, pReason, pProblem, pLearn, pInstall, pUsage, pCollabs, pCredits, pLicense, pBadges, pFeatures, pEmail, pGithub, pWeb, pGithubName, pTest }) =>

    `
# Project Title ${pTitle}

## Description
- Motivation: ${pMotive}
- Reason: ${pReason}
- Problem: ${pProblem}
- Learning: ${pLearn}

# Table of contents:
[Installation](#Installation)
[Usage](#Usage)
[Credits](#Credits)
[License](#License)

## Installation
- The steps to follow for Installation are: ${pInstall}

## Usage
- The steps for using this application are: ${pUsage}

## Credits
- Collaborators: ${pCollabs}
- Third party Assets: ${pCredits}

## License
- The license used is: ${pLicense}

## Badges
- Badges earned: ${pBadges}

## Features
- the features of this application are: ${pFeatures}

# Contact and Contribution Resources
- Email: ${pEmail}
- GitHub: ${pGithub}
- Web Address: ${pWeb}

# Questions
- For any questions or issues, use Github: ${pGithubName}
- You can also use the Email ${pEmail} to reach me personally.

# Testing
- To test the application: ${pTest}
    `;



inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'pTitle',
            extra: " ",
        },
        {
            type: 'input',
            message: 'What is your motivation for building this project?',
            name: 'pMotive',
            extra: " ",
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'pReason',
            extra: " ",
        },
        {
            type: 'input',
            message: 'What problems did it solve?',
            name: 'pProblems',
            extra: " ",
        },
        {
            type: 'input',
            message: 'What did you learn while building this project?',
            name: 'pLearn',
            extra: " ",
        },
        {
            type: 'input',
            message: 'What are the steps for installing your project?',
            name: 'pInstall',
            extra: " ",
        },
        {
            type: 'input',
            message: 'What are the steps of using this application?',
            name: 'pUsage',
            extra: " ",
        },
        {
            type: 'input',
            message: 'who helped with building this application?',
            name: 'pCollabs',
            extra: " ",
        },
        {
            type: 'input',
            message: 'What other credits are there?',
            name: 'pCredits',
            extra: " ",
        },
        {
            type: 'list',
            message: 'What License would you like to use for your application?',
            name: 'pLicense',
            choices: ["MIT", "Apache 2.0", "BSD 2", "IBM V1", "GNU GPL v2"],
        },
        {
            type: 'input',
            message: 'Enter any badges you want or enter or none?',
            name: 'pBadges',
            extra: " ",
        },
        {
            type: 'input',
            message: 'Explain any features you have added or enter none?',
            name: 'pFeatures',
            extra: " ",
        },
        {
            type: 'input',
            message: 'What is your E-mail?',
            name: 'pEmail',
            extra: " ",
        },
        {
            type: 'input',
            message: 'What the web address?',
            name: 'pWeb',
            extra: " ",
        },
        {
            type: 'input',
            message: 'What is the gitHub address?',
            name: 'pGithub',
            extra: " ",
        },
        {
            type: 'text',
            message: 'What is the gitHub UserName?',
            name: 'pGithubName',
            extra: " ",
        },
        {
            type: 'text',
            message: 'What would you like to include about testing?',
            name: 'pTest',
            extra: " ",
        },
    ])
    .then((response) =>

        fs.appendFile(`${response.pTitle}.md`, generateReadme(response), (err) =>
            err ? console.error(err) : console.log('Commit logged!'))

    );




if(pLicense = "MIT"){
   let badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

} else if(pLicense = "IBM V1"){
   let badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"

} else if(pLicense = "GNU GPL v2"){
    let badge ="[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"

} else if(pLicense = "BSD 2"){
    let badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"

} else {
    let badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

}