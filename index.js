const inquirer = require('inquirer')
const fs = require ("fs")

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const { default: Choice } = require('inquirer/lib/objects/choice')

const teamArray = [];

function addManager () {
    inquirer
    .prompt([
        {
            type: "input",
            name:"managerName",
            message: "Enter your Manager's name here",
        },

        {
            type: "input",
            name:"managerID",
            message: "Enter your Manager's ID here",
        },

        {
            type: "input",
            name:"managerEmail",
            message: "Enter your Manager's Email here",
        },

        {
            type: "input",
            name:"managerPhone",
            message: "Enter your Manager's phone here",
        },

    ])

    .then ((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerPhone,
        );
    }
    )
}

function addEngineer () {
    inquirer
    .prompt([
        {
            type: "input",
            name:"engineerName",
            message: "Enter your Engineer's name here",
        },

        {
            type: "input",
            name:"engineerID",
            message: "Enter your Engineer's ID here",
        },

        {
            type: "input",
            name:"engineerEmail",
            message: "Enter your Engineer's Email here",
        },

        {
            type: "input",
            name:"engineerGithub",
            message: "Enter your Engineer's Github here",
        },

    ])

    .then ((answers) => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerID,
            answers.engineerEmail,
            answers.engineerGithub,
        );
    }
    )
}

function addIntern () {
    inquirer
    .prompt([
        {
            type: "input",
            name:"internName",
            message: "Enter your Intern's name here",
        },

        {
            type: "input",
            name:"internID",
            message: "Enter your Intern's ID here",
        },

        {
            type: "input",
            name:"internEmail",
            message: "Enter your Intern's Email here",
        },

        {
            type: "input",
            name:"internSchool",
            message: "Enter your Intern's school here",
        },

    ])

    .then ((answers) => {
        const intern = new Intern(
            answers.internrName,
            answers.internID,
            answers.internEmail,
            answers.internSchool,
        );
    }
    )
}

function init () 
    inquirer
    .prompt ([
        {
         type:'list',
         names:"roles",
         message: "Please choose a role",
         choices:["Manager, Engineer, Intern"]
        }   

    ])

    .then ((answers) => {
        switch (role) {
            case "Manager":
                return inquirer.prompt(this.managerPrompt).then(function (data) {
                    return data;
                });
                break;
            case "Engineer":
                return inquirer.prompt(this.engineerPrompt).then(function (data) {
                    return data;
                });
                break;
            case "Intern":
                return inquirer.prompt(this.internPrompt).then(function (data) {
                    return data;
                });
                break;
        }

    }   
    )




