// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license
      ? `![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(license)}-brightgreen)`
        : "";
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license
      ? `[Learn more about this license](https://choosealicense.com/licenses/${license.toLowerCase()}/)`
      : "";
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license
      ? `${renderLicenseBadge(license)}\n\nThis project is licensed under the ${license} license.\n\n${renderLicenseLink(license)}`
      : "";
}

// Function to generate markdown for README
export default function generateMarkdown(answers) {
  return `# ${answers.title}

## Description
${answers.description}

${answers.contents ? "## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n" : ""}

## Installation
${answers.install}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${renderLicenseSection(answers.license)}

## Tests
${answers.tests || "No tests provided."}

## Questions
${answers.questions || "No additional instructions for questions provided."}
`;
}
