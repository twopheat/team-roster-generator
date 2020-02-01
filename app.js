const inquirer = require("inquirer");
const builder = require("./index.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let myteam = [];

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
    var mypick;

    if (role === "Manager") {
        role = "officenumber";
        mypick = Manager;
    }
    else if (role === "Engineer") {
        role = "github";
        mypick = Engineer;
    }
    else {
        role = "school";        
        mypick = Intern;
    }
    inquirer
        .prompt([{
            message: "Enter your " + role,
            name: "info"
        }])
        .then(function (res2) {
            var data = res1;
            data["info"] = res2.info;
            myteam.push(new mypick(data.name, data.id, data.email, data.info))
            thirdQ();
            console.log(res2.info);
        });

}
//yes or no  - array of constructed objects from Q's - build in Q2, finally empty array (global) to drop info in
function thirdQ() {
    inquirer
        .prompt([{
            message: "Do you want to add another team member?",
            name: "add",
            type: "list",
            choices: ["yes", "no"]
        }])
        .then(function ({add}) {
            
            if (add === "yes") {
                initQ();
                
              }
            else if (add === "no") {
                builder(myteam);
                
            }

            
        

        
    });

}
//module.exports = res1;




