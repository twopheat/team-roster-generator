const inquirer = require("inquirer");
const jest = require("jest");

inquirer
    .prompt([{
        message: "Pick a manager for your Team:"
    }])
