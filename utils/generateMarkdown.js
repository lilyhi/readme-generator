// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  console.log(license)
  let badge;
  switch (license) {
    case "Apache 2.0":
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)\n';
      break;
    case "MIT":
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)\n';
      break;
    case "GNU GPL v3": 
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)\n';
      break;
    case "Mozilla Public License 2.0":
      badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)\n';
      break;
    case "None":
      badge = '\n';
      break;
  }   
    return badge;
}
//   if (license === "Apache 2.0")
//     return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // console.log(license)
  let link;
  switch (license) {
    case "Apache 2.0":
      link = '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case "MIT":
      link = '(https://opensource.org/licenses/MIT)';
      break;
    case "GNU GPL v3": 
      link = '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case "Mozilla Public License 2.0":
      link = '(https://opensource.org/licenses/MPL-2.0)';
      break;
      default: 
      link =''; 
      break; 
  }   
    return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection;
  switch (license) {
    case "Apache 2.0":
      licenseSection = `Copyright [yyyy] [name of copyright owner]

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.\n\n`;
      break;
    case "MIT":
      licenseSection = '';
      break;
    case "GNU GPL v3": 
    licenseSection = '';
      break;
    case "Mozilla Public License 2.0":
      licenseSection = '';
      break;
      default: 
      licenseSection ='\n'; 
      break; 
  }   
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("inside markdown", data)
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [License](#license)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## License

  Link to License : ${renderLicenseLink(data.license)}
  \n
  ${renderLicenseSection(data.license)}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions

  ${"Github profile:  https://github.com/" + data.username}\n
  ${"Email me here to contact me: " + data.email}\n
`;
}

module.exports = generateMarkdown;
