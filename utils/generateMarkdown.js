// function that returns a license badge based on which license is passed in
// no license, returns null
function renderLicenseBadge(license) {
  const licenseBadges = {
    'No license': null,
    'Apache 2.0 License': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'BSD 3-Clause License': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'BSD 2-Clause License': 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
    'CC0': 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
    'Attribution 4.0 International': 'https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg',
    'Attribution-ShareAlike 4.0 International': 'https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg',
    'Attribution-NonCommercial 4.0 International': 'https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg',
    'Attribution-NoDerivates 4.0 International': 'https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg',
    'Attribution-NonCommmercial-ShareAlike 4.0 International': 'https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg',
    'Attribution-NonCommercial-NoDerivatives 4.0 International': 'https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg',
    'Eclipse Public License 1.0': 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    'GNU GPL v3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'GNU GPL v2': 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    'GNU AGPL v3': 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    'GNU LGPL v3': 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
    'GNU FDL v1.3': 'https://img.shields.io/badge/License-FDL_v1.3-blue.svg',
    'The Hippocratic License 2.1': 'https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg',
    'The Hippocratic License 3.0': 'https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg',
    'IBM Public License Version 1.0': 'https://img.shields.io/badge/License-IPL_1.0-blue.svg',
    'ISC License (ISC)': 'https://img.shields.io/badge/License-ISC-blue.svg',
    'The MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    'Attribution License (BY)': 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg',
    'Open Database License (ODbL)': 'https://img.shields.io/badge/License-ODbL-brightgreen.svg',
    'Public Domain Dedication and License (PDDL)': 'https://img.shields.io/badge/License-PDDL-brightgreen.svg',
    'The Perl License': 'https://img.shields.io/badge/License-Perl-0298c3.svg',
    'The Artistic License 2.0': 'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg',
    'SIL Open Font License 1.1': 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg',
    'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    'The Do What the Fuck You Want to Public License': 'https://img.shields.io/badge/License-WTFPL-brightgreen.svg',
    'The zlib/libpng License': 'https://img.shields.io/badge/License-Zlib-lightgrey.svg',
  }

  return licenseBadges[license] 
    ? `\n![License badge.](${licenseBadges[license]})` 
    : '';
}

// function that returns the license link, formatted for the README
// no license, returns null
function renderLicenseLink(license) {
  const licenseLinks = {
    'No license': null,
    'Apache 2.0 License': 'https://opensource.org/licenses/Apache-2.0/',
    'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt/',
    'BSD 3-Clause License': 'https://opensource.org/licenses/BSD-3-Clause/',
    'BSD 2-Clause License': 'https://opensource.org/licenses/BSD-2-Clause/',
    'CC0': 'http://creativecommons.org/publicdomain/zero/1.0/',
    'Attribution 4.0 International': 'https://creativecommons.org/licenses/by/4.0/',
    'Attribution-ShareAlike 4.0 International': 'https://creativecommons.org/licenses/by-sa/4.0/',
    'Attribution-NonCommercial 4.0 International': 'https://creativecommons.org/licenses/by-nc/4.0/',
    'Attribution-NoDerivates 4.0 International': 'https://creativecommons.org/licenses/by-nd/4.0/',
    'Attribution-NonCommmercial-ShareAlike 4.0 International': 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    'Attribution-NonCommercial-NoDerivatives 4.0 International': 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    'Eclipse Public License 1.0': 'https://opensource.org/licenses/EPL-1.0/',
    'GNU GPL v3': 'https://www.gnu.org/licenses/gpl-3.0/',
    'GNU GPL v2': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html/',
    'GNU AGPL v3': 'https://www.gnu.org/licenses/agpl-3.0/',
    'GNU LGPL v3': 'https://www.gnu.org/licenses/lgpl-3.0/',
    'GNU FDL v1.3': 'https://www.gnu.org/licenses/fdl-1.3/',
    'The Hippocratic License 2.1': 'https://firstdonoharm.dev/',
    'The Hippocratic License 3.0': 'https://firstdonoharm.dev/',
    'IBM Public License Version 1.0': 'https://opensource.org/licenses/IPL-1.0/',
    'ISC License (ISC)': 'https://opensource.org/licenses/ISC/',
    'The MIT License': 'https://opensource.org/licenses/MIT/',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0/',
    'Attribution License (BY)': 'https://opendatacommons.org/licenses/by/',
    'Open Database License (ODbL)': 'https://opendatacommons.org/licenses/odbl/',
    'Public Domain Dedication and License (PDDL)': 'https://opendatacommons.org/licenses/pddl/',
    'The Perl License': 'https://opensource.org/licenses/Artistic-2.0/',
    'The Artistic License 2.0': 'https://opensource.org/licenses/Artistic-2.0/',
    'SIL Open Font License 1.1': 'https://opensource.org/licenses/OFL-1.1/',
    'The Unlicense': 'http://unlicense.org/',
    'The Do What the Fuck You Want to Public License': 'http://www.wtfpl.net/about/',
    'The zlib/libpng License': 'https://opensource.org/licenses/Zlib/',
  }
  return licenseLinks[license]
    ? `\n\n## License\n[${license}](${licenseLinks[license]})` 
    : '';

}

// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseLink(data.license);

  // include license section in table of contents if there is a license
  const tableOfContentsLicense = data.license !== 'No license' 
    ? `\n- [License](#license)` :
    '';

  return `# ${data.title}${licenseBadge} 

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)${tableOfContentsLicense}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
- Github: [${data.githubUsername}](https://github.com/${data.githubUsername})
- email: ${data.email}
  `;
}

module.exports = generateMarkdown;
