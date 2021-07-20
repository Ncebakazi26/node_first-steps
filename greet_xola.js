const chalk = require('chalk');
const figlet = require('figlet');
//import the greet module that is in the current folder
const greet = require('./greet');

console.log(
    chalk.red(
        figlet.textSync(greet('Xola'))  

    )
) 

