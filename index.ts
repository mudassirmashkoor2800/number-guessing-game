#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
    name : "userGuessNumber",
    type : "number",
    message : "Please Guess a Number 1 To 6"
}]);
if(answers.userGuessNumber === randomNumber ){
    console.log("Congratulations You Won The Game");
    } else{console.log("You Guess Wrong Number")
    };