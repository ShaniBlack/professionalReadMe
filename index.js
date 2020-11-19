const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    message: 'What is your Github user name?',
    name: 'username'
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
},
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
},
{
    type: 'input',
    message: 'Describe what your application does, what were some of the challenges you faced, and what are some features you hope to implement in the future.',
    name: 'installation'
},
{
    type: 'checkbox',
    message: 'What technologies were used?',
    choices: [],
    name: 'technologies'
},
{
    type: 'input',
    message: 'Describe the installation process.',
    name: 'installation'
},
{
    type: 'input',
    message: 'What is this project usage for?',
    name: 'usage'
},
{
    type: 'list',
    message: 'Choose the appropriate license for this project',
    choices: [],
    name: 'license'
},
{
    type: 'input',
    message: 'Is there a test included?',
    name: 'tests'
}
];

// function to write README file
function writeToFile(template, responses) {
    // path.join joins together the cwd and filename we pass in
    return fs.writeFileSync(path.join(process.cwd(), template), responses)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(response){
        writeToFile("README.md", generateMarkdown(response))
    })

}

// function call to initialize program
init();
