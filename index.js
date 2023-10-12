// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');


// array of questions for user input
const questions = [
    // github
    {
        type: 'input',
        message: 'Please provide your GitHub username.',
        name: 'githubUsername',
        validate: function (input) {
            return input.length > 0 ? true : 'Please provide your GitHub username.';
        },
    },
    
    // email
    {
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email',
        validate: function (input) {
            return input.length > 0 ? true : 'Please provide your email address.';
        },
    },

    // title
    {
        type: 'input',
        message: 'Enter the title of the project.',
        name: 'title',
        validate: function (input) {
            return input.length > 0 ? true : 'Enter the title of the project.';
        },
        filter: function (input) {
            return input.toLowerCase().replace(/\b\w/g, function (char) {
                return char.toUpperCase();
            });
        },
    },

    // description
    {
        type: 'input',
        message: `Provide a short description explaining the what, why, and how of your project. 
What was your motivation? Why did you build this project? What problem does it solve? What did you learn?`,
        name: 'description',
        validate: function (input) {
            return input.length > 0 ? true : 'Provide a description.';
        },
    },

    // installation
    {
        type: 'input',
        message: `What are the steps required to install your project? Provide a description of how to get the development environment running.`,
        name: 'installation',
        default: 'n/a' 
    },

    // usage
    {
        type: 'input',
        message: `Provide instructions for use.`,
        name: 'usage',
        default: 'n/a' 
    },

    // contributing
    {
        type: 'input',
        message: `List contributors, if any. If you used any third-party assets, list the creators. If you followed tutorials, include those as well. `,
        name: 'contributing',
        default: 'n/a' 
    },

    // tests
    {
        type: 'input',
        message: `If any, include tests for your application. Provide examples on how to run them.`,
        name: 'tests',
        default: 'n/a' 
    },

    // license
    {
        type: 'list',
        message: `Select a license for your project.`,
        choices: ['No license','Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'The Do What the Fuck You Want to Public License', 'The zlib/libpng License'],
        name: 'license',
    }
    

];

// function to write README file
function writeToFile(data) {
    const fileName = `output/README.md`;
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(`Error: ${err}`) : console.log(`${fileName} has been saved.`)
      });
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log(response);
        writeToFile(markdown(response))
    });
}

init();
