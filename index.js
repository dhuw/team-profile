 const inquirer = require('inquirer');
 const fs = require('fs');
 const employees = [];

 function initIndex() {

 }

 function addMember() {
        inquirer.prompt([{
            message: "What is the team members name?",
            name: "name"
        },
        {
            type: "list",
            message: "Select members position:",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ],
            name: "role"
        },
        {
            message: "Enter members ID:",
            name: "id"
        },
        {
            message: "Enter members email address",
            name: "email"
        }
        ])
    }

