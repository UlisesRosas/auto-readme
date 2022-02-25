// // TODO: Create a function that returns a license badge based on which license is passed in
 // If there is no license, return an empty string
 function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// passes in the object to create template literal for readme
function generateMarkdown({title, description, license, installation, usage, contributing, tests, github, email}) {
  return `# ${title}

  ## Tble of Contents
  - [Description](#Description)
  - [License](#License)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [About](#About)

  

  ## Description
  ${description}

  ## License
  ${license}

  ## Installation
  ${installation}

  ## usage
  ${usage}

  ## Contributing
  ${contributing}

  ## Tests 
  ${tests}

  ## Aboout
  - ${github}
  - ${email}


`;
}

module.exports = generateMarkdown;
