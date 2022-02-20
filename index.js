const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generate-markdown');

inquirer
    .prompt([
        {
            type:'input',
            message: 'Whats the title of your readme?',
            name: 'title',
        },
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
            type:'list',
            message: 'Which license is being used?',
            name: 'license',
            choices: ['Apache2.0', 'MIT', 'BSD3', 'none']
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

    .then((response) => {
        fs.writeFile('README.md', generateMarkdown(response),
        (err) => err ? console.error(err) : console.log('info stored!'))
    });