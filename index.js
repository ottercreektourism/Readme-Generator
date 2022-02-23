const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generate-markdown');

inquirer
    .prompt([
        {
            type:'input',
            message: 'What is the title of your readme?',
            name: 'title',
        },
        {
            type:'input',
            message: 'Description of the project:',
            name: 'description',
        },
        {
            type:'input',
            message: 'Terminal commands to make this project work:',
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
            choices: ['none', 'Apache2.0', 'GNUGeneralPublicLicensev3.0', 'MIT', 'BSD2Clause"Simplified"License', 'BSD3Clause"New"or"Revised"License', 'BoostSoftwareLicense1.0', 'CreativeCommonsZerov1.0Universal', 'EclipsePublicLicense2.0', 'GNUAfferoGeneralPublicLicensev3.0', 'GNUGeneralPublicLicensev2.0', 'GNULesserGeneralPublicLicensev2.1', 'MozillaPublicLicense2.0', 'TheUnlicense']
        },
        {
            type:'input',
            message: 'Write any contributing guidelines here:',
            name: 'contributing',
        },
        {
            type:'input',
            message: 'What does the user need to do to test the program?',
            name: 'tests',
        },
        {
            type:'input',
            message: 'Enter your GitHub username:',
            name: 'questions',
        },
        {
            type:'input',
            message: 'Enter your contact email address:',
            name: 'email',
        },

    ])

    .then((response) => {
        fs.writeFile('README.md', generateMarkdown(response),
        (err) => err ? console.error(err) : console.log('info stored!'))
    });