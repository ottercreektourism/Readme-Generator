const inquirer = require ('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type:'input',
            message: 'What should the user do to install necessary dependencies?',
            name: 'installation',
        },
        {
            type:'input',
            message: 'What is the usage of the project?',
            name: 'usage',
        },
        {
            type:'input',
            message: 'Which license is being used?',
            name: 'license',
        },
        {
            type:'input',
            message: 'Write any contributing details.',
            name: 'contributing',
        },
        {
            type:'input',
            message: 'What does the user need to do to test the program?',
            name: 'tests',
        },
        {
            type:'input',
            message: 'Write what the user should do if they have any questions:',
            name: 'questions',
        },

    ])

    .then(({installation, usage, license, contributing, tests, questions}) => {
        fs.appendFile('README.md', '##installation ${installation}, ${usage}, ${license}, ${contributing}, ${tests}, ${questions}',
        (err) => err ? console.error(err) : console.log('info stored!'))
    });