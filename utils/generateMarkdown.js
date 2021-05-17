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
      licenseSection = `Copyright <YEAR> <COPYRIGHT HOLDER>

      Permission is hereby granted, free of charge, to any person obtaining a 
      copy of this software and associated documentation files (the "Software"), 
      to deal in the Software without restriction, including without limitation 
      the rights to use, copy, modify, merge, publish, distribute, sublicense, 
      and/or sell copies of the Software, and to permit persons to whom the Software 
      is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all 
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
      INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
      PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
      HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
      CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
      OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n`;
      break;
    case "GNU GPL v3": 
    licenseSection = ` Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.\n\n`;
      break;
    case "Mozilla Public License 2.0":
      licenseSection = `Covered Software is provided under this License on 
      an “as is” basis, without warranty of any kind, either expressed, 
      implied, or statutory, including, without limitation, warranties that 
      the Covered Software is free of defects, merchantable, fit for a 
      particular purpose or non-infringing. The entire risk as to the quality 
      and performance of the Covered Software is with You. Should any Covered 
      Software prove defective in any respect, You (not any Contributor) 
      assume the cost of any necessary servicing, repair, or correction. 
      This disclaimer of warranty constitutes an essential part of this License. 
      No use of any Covered Software is authorized under this License except 
      under this disclaimer.\n\n`;
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

  Link to License (if applicable) : ${renderLicenseLink(data.license)}
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
