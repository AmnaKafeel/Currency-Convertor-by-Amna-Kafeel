#! /usr/bin/env node


import inquirer from "inquirer"; 
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome to 'Amna Kafeel' - Currency Convertor\n"))

//Define the list of currencies and their exchange rates.
let exchange_rates: any = {
    "USD": 1, //Base Currency
    "EUR": 0.9, //European Currency
    "JYP": 113, //Japenese Currency
    "CAD": 1.3, //Canadian Dollar
    "AUD": 1.65, //Australian Dollar
    "PKR": 277.70, //Pakistan Rupies
    //Add more currencies and their exchange rates here

}
//prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([{
    name: "from_currency",
    type: "list",
    message: "Select the currency you want to convert from",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
},
{
    name: "to_currency",
    type: "list",
    message: "Select the currency you want to convert in to",
    choices : ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
},
{
    name: "amount",
    type: "input",
    message: "Enter the amount you want to Convert:"
}
]);

//Perform Currency Conversion by useing formula
let from_amount = exchange_rates[user_answer.from_currency];
let to_amount = exchange_rates[user_answer.to_currency];
let amount = user_answer.amount;

//Formla of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log(`Converted Amount = ${chalk.red(converted_amount.toFixed(2))}`);