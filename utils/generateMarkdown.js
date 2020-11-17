// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Tests](#tests)
  * [License](#license)
  * [Questions]
  
  ## Installation
  ${data.installation}


`;
}

module.exports = generateMarkdown;
