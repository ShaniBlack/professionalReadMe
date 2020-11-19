// function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}

  ## Description
  ${responses.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  ${responses.installation}

  ## Usage
  ${responses.usage}

  ## Contributing
  ${responses.contributing}

  ## Tests
  ${responses.tests}

  ## Questions
  Please feel free to find me on GitHub: [${responses.username}](https://github.com/${answers.username})
  Or email me with any questions: ${responses.email}

  ## License
  This application is covered by the ${responses.license} license.


`;
}

module.exports = generateMarkdown;
