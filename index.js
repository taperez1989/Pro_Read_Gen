const inquirer = require('inquirer');
const fs = require('fs');

// This const variable is my solution for plugging in the answers the user entered in the application, made this in a separate HTML for design purposes and then made copied it here but making it a template literal.
const generateHTML = ({ title, description, install, usage, guidelines, test, license, username, email }) =>
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Professional README</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>

<body>
    <header>
        <div class="container">
            <h1 class="display-1">${title}</h1>

        </div>
    </header>
    <section>
        <div class="container">
            <h5>Table of Contents</h5>
            <div class="list-group">
                <a href="#description" class="list-group-item list-group-item-action">Description</a>
                <a href="#installation" class="list-group-item list-group-item-action">Installation Instructions</a>
                <a href="#usage" class="list-group-item list-group-item-action">Usage Info</a>
                <a href="#guidelines" class="list-group-item list-group-item-action">Contribution guidelines</a>
                <a href="#test" class="list-group-item list-group-item-action">Test Instructions</a>
                <a href="#license" class="list-group-item list-group-item-action">License</a>
                <a href="#questions" class="list-group-item list-group-item-action">Questions</a>
            </div>
            <h5 id="description">Description</h5>
            <p class="container">${description}</p>
            <h5 id="installation">Installation Instructions</h5>
            <p class="container">${install}</p>
            <h5 id="usage">Usage Info</h5>
            <p class="container">${usage}</p>
            <h5 id="guidelines">Contribution guidelines</h5>
            <p class="container">${guidelines}</p>
            <h5 id="test">Test Instructions</h5>
            <p class="container">${test}</p>
            <h5 id="license">Choose License</h5>
            <p class="container">This application is licensed under the: ${license}</p>

            <div>
                <h6 id="questions">Questions</h6>
                <li>Email: ${email}</li>
                <li>Github Username: ${username}</li>
            </div>
        </div>
    </section>


</body>

</html>`;

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

        let license = answers.license;
        let licenseBadgeUrl;

        switch (license) {
            case 'MIT License':
                liscenseBaqgeUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                break;
            case 'Apache License':
                liscenseBaqgeUrl = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                break;
            case 'Perl license':
                liscenseBaqgeUrl = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
                break;
            case 'BSD License':
                liscenseBaqgeUrl = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
                break;
            case 'Mozilla Public License (MPL)':
                liscenseBaqgeUrl = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
                break;
            default:
                console.log('Select License')
        }

        const htmlPageContent = generateHTML(answers, license, licenseBadgeUrl);

        fs.writeFile('index.HTML', htmlPageContent, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })

