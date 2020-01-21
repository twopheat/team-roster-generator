const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function initQ() {
    inquirer
        .prompt([{
            message: "Enter a Name:",
            name: "name"
        },
        {
            message: "Enter an Email:",
            name: "email"
        },
        {
            message: "Enter an Id:",
            name: "id"
        },
        {
            message: "Enter their Role:",
            name: "role",
            type: "list",
            choices: ["Manager", "Engineer", "Intern"]
        }
        ])
        .then(function (res1) {
            secondQ(res1);
            //   console.log(res1);
        });
}
initQ();

function secondQ(res1) {
    var role = res1.role;
    if (role === "Manager") {
        role = "officenumber"
    }
    else if (role === "Engineer") {
        role = "github"
    }
    else {
        role = "school"
    }
    inquirer
        .prompt([{
            message: "Enter your " + role,
            name: "title"
        }])
        .then(function (res2) {
            var data = res1;
            data["title"] = res2.title;
            thirdQ(data);
            console.log(data);
        });

}
//yes or no  - array of constructed objects from Q's - build in Q2, finally empty array (global) to drop info in
function thirdQ(data) {

    inquirer
        .prompt([{
            message: "Do you want to add another team member?",
            name: "another",
            type: "list",
            choices: ["yes", "no"]
        }])
        .then(function (another) {
            var res2 = data;
            if (another === "yes") {
                initQ();
              }
            else if (another === "no") {
                buildTemp(res2);
            }
            console.log(res2);
        

        
    });

}





