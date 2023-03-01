# Team Profile Generator

## Table of contents 

 - [Description](#description)
 - [Technology](#technology)
 - [Installation and Usage](#installation-and-usage)
 - [Tests](#tests)

## Description 

I have created a Team profile generator which works by generating a webpage and displays the teams basic info. When using the command line, it will ask for team members and their information and when that is submitted, it will generate an HTML page based on the user input.

## Technology

- HTML
- CSS
- JavaScript
- Node.js
- Inquirer
- Jest 

## Installation and Usage 

To use this application, the code must be cloned into a new repository and npm must be installed. It is done typing the command `npm init` into the command line. Inquirer must also be installed by using command `npm install inquirer`. Now the application is ready to be used.

Use `node index.js` and you will be prompted with a list of roles `Engineer, Manager, Intern`. When a choice is made, a list of questions will appear and once they are done, you may add as many roles for as many people as you like or when you are done, in the list of roles simply choose `finish` and your HTML page will have been generated.


## Tests 

`Npm run test` was used here to test `Employee, Engineer, Intern and Manager` and they all passed as is demonsrated in the video below.

## Screenshot

![Image](./dist/Image/Screenshot%202023-03-01%20at%2013.32.34.png)

## Video Link

[Screenrecording ](https://drive.google.com/file/d/16waHi0NG7JUKrpLbPSce3FPOUFFuZPeS/view?usp=sharing)