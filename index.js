const inquirer = require('inquirer');
const fs = require('fs');
// let licenseBadgeUrl;
// let licenseTermsUrl;
// let githubProfileUrl = `https://github.com/${username}`;

// This const variable is my solution for plugging in the answers the user entered in the application, made this in a separate HTML for design purposes and then made copied it here but making it a template literal.
const generateReadme = ({ title, description, install, usage, guidelines, test, license, email, licenseBadgeUrl, licenseTermsUrl, username }) => {
    return `## ${title}

## Table of Contents

    - <a href='#description'><h4>Description</h4>
    - [Installation](#installation)
    - [Usage Info](#usage-info)
    - [Contribution Guidelines](#contribution-guidelines)
    - [Test Instructions](#test-instructions)
    - [License](#license)
    - [Questions](#questions)

## Description
${description}

## Installation
${install}

## Usage Info
${usage}

## Contribution Guidelines
${guidelines}

## Test Instructions
${test}

## License
This project is licensed under: ${license}
${licenseBadgeUrl}
${licenseTermsUrl}
## Questions
Link to my Github: github.com/${username}

For questions, Please contact me: ${email}`
};


// inquirer prompts that provide the questions the user is supposed to answer.

inquirer
    .prompt([
        {
            type: 'input',
            message: ('What is your project title?'),
            name: 'title',
        },
        {
            type: 'input',
            message: ('Enter project description'),
            name: 'description',
        },
        {
            type: 'input',
            message: ('Enter installation instructions?'),
            name: 'install',
        },
        {
            type: 'input',
            message: ('Whats the usage Info?'),
            name: 'usage',
        },
        {
            type: 'input',
            message: ('Enter contribution guidelines?'),
            name: 'guidelines',
        },
        {
            type: 'input',
            message: ('Enter test instructions?'),
            name: 'test',
        },
        {
            type: 'list',
            message: ('choose License'),
            name: 'license',
            choices: ['MIT License', 'Apache License', 'Perl license', 'BSD License', 'Mozilla Public License (MPL)']
        },
        {
            type: 'input',
            message: ('Enter github username?'),
            name: 'username',
        },
        {
            type: 'input',
            message: ('Enter email address?'),
            name: 'email',
        },
    ])

    // the then statement is meant to take the answers the user provides and generates them into an HTML file which is what the fs.writefile is for.

    .then((answers) => {
        const license = answers.license;
        let licenseBadgeUrl;
        let licenseTermsUrl;

        switch (license) {
            case 'MIT License':
                licenseBadgeUrl = 'https://img.shields.io/badge/License-MIT-yellow.svg';
                licenseTermsUrl = 'https://opensource.org/licenses/MIT';
                break;
            case 'Apache License':
                licenseBadgeUrl = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
                licenseTermsUrl = 'https://opensource.org/licenses/Apache-2.0';
                break;
            case 'Perl license':
                licenseBadgeUrl = 'https://img.shields.io/badge/License-Perl-0298c3.svg';
                licenseTermsUrl = 'https://opensource.org/licenses/Artistic-2.0';
                break;
            case 'BSD License':
                licenseBadgeUrl = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
                licenseTermsUrl = 'https://opensource.org/licenses/BSD-2-Clause';
                break;
            case 'Mozilla Public License (MPL)':
                licenseBadgeUrl = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
                licenseTermsUrl = 'https://opensource.org/licenses/MPL-2.0';
                break;
            default:
                console.log('Select License')
        }
        console.log(answers);

        const readmeContent = generateReadme(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })

