// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
 
  
    {
        type:'input',
        name:'title',
        message: 'What is the projects title?'
    },
    {
        type:'input',
        name:'description',
        message: 'What does your project do?'
    },
    {
        type:'list',
        name:'license',
        message: 'What is your project license?',
        choices: ['Apache', 'BSD 3', 'Bsd 2', 'GNU', 'MIT', 'Mozila']
    },
    {
        type:'input',
        name:'installation',
        message: 'What do you need to install your application'  
    },
    {
        type:'input',
        name:'usage',
        message: 'Do you need to know anything before using this app?'  
    },
    {
        type:'input',
        name:'contributing',
        message: 'Who contributed to this application?'  
    },
    {
        type:'input',
        name:'tests',
        message: 'What comand should be used to run test?'  
    },
    {
        type:'input',
        name:'github',
        message: 'What is your github username?'  
    },
    {
        type:'input',
        name:'email',
        message: 'What is your email?'  
    }
];
   
// TODO: Create a function to write README file
function writeToFile(filename, data) {
    return fs.writeFileSync(filename, data);
}
// function fileHandle.writeFile

// TODO: Create a function to initialize app
async function init() {
    // uses the inquirer to be able to use inquirer.prompt which grabs our questions
    const answers = await inquirer.prompt(questions);
    // console.log(answers);
    // 
    writeToFile('readme2.md', generateMarkdown(answers));
    // renderLicenseBadge(license);
};

// Function call to initialize app
init();
