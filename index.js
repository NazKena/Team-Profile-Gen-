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
        teamArray.push(manager)
        init ()
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
        teamArray.push(engineer)
        init ()
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
        teamArray.push(intern)
        init ()

    }
    )
}

function init () {
    inquirer
    .prompt ([
        {
         type:'list',
         name:"roles",
         message: "Please choose a role",
         choices:["Manager", "Engineer", "Intern","Finish"]
        }   

    ])

    .then ((answer) => {
        switch (answer.roles) {
            case "Manager":
                addManager()
                break
            case "Engineer":
                addEngineer ()
                break;
            case "Intern":
                addIntern ()
                break;
            case "Finish":
                addFinish ()
                break;    
        }

    }   
    )
}


init ()

function addFinish () {
    const htmlstring=`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">

    <title>Document</title>
</head>
<body>
    <h1> My Team </h1>
    ${generateCards()}
    
</body>
</html>
    
    
    `
}

function generateCards(array) {
    let string = ''
    array.forEach(element => {

        if (element instanceof Manager){
        const cardHtml = `
            <div class="card">
                <div class="container">
                    <h3><b>Name: ${element.getName()}</b></h3> 
                    <h4>Role: ${element.getRole()}</h4>   
                    <p>ID:${element.getID ()} </p>
                    <p>Email: ${element.getEmail()}</p>
                    <p>Office Number ${element.getOfficeNumber()}</p>
                </div>
            </div>
        `
        string += cardHtml
    }

    if (element instanceof Intern) {
        const cardHtml = `
        <div class="card">
            <div class="container">
                <h3><b>Name: ${element.getName()}</b></h3> 
                <h4>Role: ${element.getRole()}</h4> 
                <p>ID:${element.getID ()} </p>
                <p>Email: ${element.getEmail()}</p>
                <p>Office Number: ${element.getSchool()} </p>
            </div>
        </div>
    `

    }

    if (element instanceof Engineer) {
        const cardHtml = `
        <div class="card">
            <div class="container">
                <h3><b>Name: ${element.getName()}</b></h3> 
                <h4>Role: ${element.getRole()}</h4> 
                <p>ID:${element.getID ()} </p>
                <p>Email: ${element.getEmail()}</p>
                <p>Office Number: ${element.getGitHub()} </p>
            </div>
        </div>
    `

    }
    

    });

    return string;
}




