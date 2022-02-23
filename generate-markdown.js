// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "none") {
        return "";
    }else{
       return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === "none") {
        return "";
    }else{
        return `* [License](#license)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "none"){
        return "";
    }else{
        return "## License"
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
    
${renderLicenseBadge(data.license)}

## Description
${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#Contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, type the following command into the terminal:
  
  > ${data.installation}

  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  This project is licensed under the ${data.license} license.  

## Contributing

${data.contributing}

## Tests

In terminal, type:
> ${data.tests}

## Questions

If you have any questions, please visit https://github.com/${data.questions} or email me at ${data.email}.


`;

}

module.exports = generateMarkdown;
