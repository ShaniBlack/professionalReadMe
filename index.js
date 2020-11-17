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
    type:
    message:
    name:
},
{
    type:
    message:
    name:
},
{
    type:
    message:
    name:
},
{
    type:
    message:
    name:
},
{
    type:
    message:
    name:
},
{
    type:
    message:
    name:
}
];

// function to write README file
function writeToFile(fileName, data) {
    // path.join joins together the cwd and filename we pass in
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
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
