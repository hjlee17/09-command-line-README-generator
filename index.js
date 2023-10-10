// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // github
    {
        type: 'input',
        message: 'Please provide your GitHub username.',
        name: 'githubUsername',
    },
    
    // email
    {
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email',
    },

    // title
    {
        type: 'input',
        message: 'Enter the title of the project.',
        // can i pass this through a function later to change it to title case?
        name: 'title',
    },

    // description
    {
        type: 'input',
        message: `Provide a short description explaining the what, why, and how of your project. 
What was your motivation? Why did you build this project? What problem does it solve? What did you learn?`,
        name: 'description',
    },

    // installation
    {
        type: 'input',
        message: `What are the steps required to install your project? Provide a description of how to get the development environment running.`,
        name: 'installation',
    },

    // usage
    {
        type: 'input',
        message: `Provide instructions for use.`,
        name: 'usage',
    },

    // contributing
    {
        type: 'input',
        message: `List contributors, if any. If you used any third-party assets, list the creators. If you followed tutorials, include those as well.`,
        name: 'contributing',
    },

    // tests
    {
        type: 'input',
        message: `Write tests for your application. Provide examples on how to run them.`,
        name: 'test',
    },
    

];

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = `README.md`;
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(`Error: ${err}`) : console.log(`${fileName} has been saved.`)
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log(response);
        writeToFile(markdown(response))
    
    });
}

// Function call to initialize app
init();
