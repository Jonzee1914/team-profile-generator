# Team-Profile-Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## Demo

<img src="/DemoImgs/TeamGeneratorGif.gif?raw=true">
<img src="/DemoImgs/S1.png?raw=true">

## Table of Contents

* [Usage](#usage)
* [Installation](#installation)
* [Preview](#preview)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Usage

To use, open the repo's root folder in your terminal and run the command 
```shell
node index.js
```
The application begins with a welcome message and some info on the program. Follow the command line prompts, until you have entered your whole team. When finished your team roster's HTML page will be generated, and save to a new folder labeled "dist".

## Installation

To install, clone the repo to your local machine. Then, install the node dependencies by running the npm install command 
```shell
npm i
```
in your terminal/bash shell. Once this has been completed, you are ready to use the
application!

## Preview
Click the gif to see a full demo of functionality  return
[![](https://github.com/Jonzee1914/team-profile-generator/blob/main/team-profile-generator.gif?raw=true)](https://youtu.be/tUDppmBG6FU)

## License

    								MIT License

    		"Team-Profile-Generator"   Copyright (C) 2021 Erik Jones

    		Permission is hereby granted, free of charge, to any person obtaining a copy
    		of this software and associated documentation files (the "Software"), to deal
    		in the Software without restriction, including without limitation the rights
    		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    		copies of the Software, and to permit persons to whom the Software is
    		furnished to do so, subject to the following conditions:

    		The above copyright notice and this permission notice shall be included in all
    		copies or substantial portions of the Software.

    		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    		SOFTWARE.

## Contributing

If you would like to contribute to this application, email me via the email found in the questions section.

## Tests

This repo includes test files designed to test the functionality and information validation of the employee class and the extended inheritance classes for Manager, Engineer, and Intern. To run these tests use the Jest node package dependency (installs when npm i is ran), they will that the structure of the class constructor and its extensions pass all validation tests.

## Questions

Any questions? Checkout my [Github profile](https://github.com/Jonzee1914) or email me @ [jonzee1914@gmail.com](mailto:jonzee1914@gmail.com)