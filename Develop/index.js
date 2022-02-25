// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('../utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is thee name of your project?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log("Please enter your project name!");
                    return false;
                }
            }
        },
    
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter your project name!");
                    return false;
                }
            }
        },

    // table of contents??????????????????????????????????????

    

    // insallation
    {
        type: 'input',
        name: 'installation',
        message: 'Give a description on how to install',
        default: true
    },

    // usage 
    {
        type: 'input',
        name: 'usage',
        message: 'Give a description on how to use your application',
        default: true
    },
    
    //liscense  
    {
        type: 'checkbox',
        name: 'usage',
        message: 'Give a description on how to use your application',
        choices: ['Apache', 'BSD 3', 'Bsd 2', 'GNU', 'MIT', 'Mozila'],
        validate:chackboxInput => {
            if (chackboxInput) {
                return true;
            } else {
                console.log("Please select a license");
                return false;
            }
        }
    },


    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
