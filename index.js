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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){
      if( error) {console.log(error); }
      
      console.log("read me generated sucess");
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log("welcome to readme generator");
    inquirer.prompt(questions)
    .then(answers => {
        console.log("user answers;", answers);
        // writeToFile("ReadMe.md", answers)
        writeToFile("ReadMe.md", generateMarkdown({...answers}))
    });
}

// Function call to initialize app
init();


