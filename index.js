const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const generateHTML = ({ title, description, install, usage, guidelines, test, license, username, email }) =>
    // create basic HTML structure meta data, css, and if i do the html structure this way i can set up the href for the links   

// const generateHTML = ({name,location, etc}) => and then create a basic HTML structure with bootstrap css and the inputs etc. dont forget to enclose the HTML in backtics to make it template literal 
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
            choices: ['MIT License', 'Apache License', 'Unlicense', 'BSD License', 'Mozilla Public License (MPL)']
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
// .then((answers))=> {
    // const generateHTML =
//     .then((response)) => {
//     const HTML = `<p>What is your name? ${name}</p>`
// }
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('README.md', htmlPageContent, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
})

