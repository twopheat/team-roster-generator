const inquirer = require("inquirer");
const jest = require("jest");

inquirer
    .prompt([{
        message: "Pick a manager for your Team:",
        name: "Manager:name"
    },
    {
        message: "Choose at least 1 Engineer:"
        name: "Engineer:name"
    },
    {
        message: "Choose 1 optional Intern:"
        name: "Intern:name"
    }
    ])
    .then(function);



    // getters n methods
get Name() {
    return this.name;
}

get Id() {
    return this.id;
}

get Email() {
    return this.email;
}

get Role() {
    return this.title;
}

get char() {
    return this.char;
}