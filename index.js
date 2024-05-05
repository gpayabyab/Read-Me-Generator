// TODO: Include packages needed for this application
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


//includes inquirer package 
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title of Project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Installation Instructions',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Usage Information',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'License',
        name: 'License',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'Test Instructions',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'Questions',
        name: 'Questions',
    },
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((answers) => {
            writeToFile('README.md', generateMarkdown(answers))

        })
}

// Function call to initialize app
init();