// Packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your project. Consider why, how, successes, challenges, and the problem it solves.',
        name: 'description',
    },
    {
        type: 'confirm',
        message: 'Would you like to include a table of contents?',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Describe how to use your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide any collaborators, third-party assests, tutorials, etc.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'What license would you like attached? Please go to https://choosealicense.com/ if you need help choosing.',
        choices: [
          'GNU AGPLv3',
          'GNU GPLv3',
          'GNU LGPLv3',
          'Mozilla Public License 2.0',
          'Apache License 2.0',
          'MIT',
          'Boost Software License 1.0',
          'The Unlicense'
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Did you create tests for your project? If so please provide the information here.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'How should they submit questions or suggestions?',
        name: 'questions',
    },
];

//Function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
    err ? console.error("Error writing file:", err) : console.log(`${fileName} created successfully!`)
});
}

//Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const readMeContent = generateMarkdown(answers);
        writeToFile("README.md", readMeContent);
    });

}

// Function call to initialize app
init();
