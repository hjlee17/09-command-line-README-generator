# 09-Command-Line-Readme-Generator
![License badge.](https://img.shields.io/badge/License-MIT-yellow.svg) 

## Description
A command-line application dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
To generate a README file, the user needs to clone this [repository](https://github.com/hjlee17/09-command-line-README-generator/). Install [Node.js](https://nodejs.org/) and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4), (listed as a dependency in package.json) using the ```npm i``` command.

## Usage
Invoke the application by by using the following command:
```bash
node index.js
``` 
and answer the prompts accordingly. A file titled [README.md](./output/README.md) will be generated in the [output](./output) folder.

The user will be required to input their Github username, an email address, a title for the README, and a description. Installation, usage, contributing, and tests sections are optional. "n/a" is the default input for these sections if a user leaves these inputs blank. For the license section, a user may select "no license" and no license section will added to the README. There is a [sampleREADME.md](./output/sampleREADME.md) in the [output](./output) folder that matches the video demonstration below.

[Video Demonstration](https://drive.google.com/file/d/1yPh4bWqoHhy9Bm8UxdgViddwZzs9PWAW/view?usp=sharing/)
Below is a screenshot of the command terminal after prompts have been answered and the README.md has been generated per the user inputs. The README and README preview are both visible.
![Screenshot](./assets/sc-01.png)

## License
[The MIT License](https://opensource.org/licenses/MIT/)

## Contributing
- [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
- [GitHub Docs: Basic formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [License badges for the most common open source and open data licenses by @lukas-h](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#gnu-agpl-v3)
- BootCampSpot

## Questions
- Github: [hjlee17](https://github.com/hjlee17)