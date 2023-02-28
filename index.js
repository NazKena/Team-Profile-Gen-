const inquirer = require('inquirer')
const fs = require ("fs")

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

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
