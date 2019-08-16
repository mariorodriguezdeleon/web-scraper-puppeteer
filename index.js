const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const log = console.log;

console.log('hello world!');

inquirer
.prompt([
    {
        type: "input",
        name: "action",
        message: "What would you like to do? "
    }
]).then( answers => {
    log(chalk.blue(answers.action));
});
