// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }   else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }   else {
                console.log('Please enter a description of the project!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project',
        choices: ['Apache 2.0', 'MIT', 'GNU GPL v3', 'Mozilla Public License 2.0','None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation step for your project. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            }   else {
                console.log('Please provide installation step for your project!');
                return false;
            }
        },
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of usage. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }   else {
                console.log('Please provide instructions and examples of your project!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like other developers to contribute to your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Add guidelines for other developers to contribute:',
        when: ({ confirmContribution }) => {
            if (confirmContribution) {
                return true;
            }   else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to include test instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add test instructions here:',
        when: ({ confirmTests }) => {
            if (confirmTests) {
                return true;
            }   else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username. (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            }   else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address for contact purposes. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }   else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){
    if( error) {console.log(error); }
    
    console.log("readme generated success");
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to ReadMe.md generator!");
    inquirer.prompt(questions)
    .then(answers => {
        console.log("user answers;", answers);
        // writeToFile("ReadMe.md", answers)
        writeToFile("ReadMe.md", generateMarkdown({...answers}))
    });
}

// Function call to initialize app
init();


