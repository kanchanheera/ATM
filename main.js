#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000; // Dollar
let pinCode = 7890;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === pinCode) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > balance) {
            console.log("Insufficient Balance");
        }
        else if (balance -= amountAns.amount) {
            console.log(`Your remaining balance is: ${balance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is: ${balance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "cash",
                message: "Select the amount you'd like to cash fast: ",
                type: "list",
                choices: ["1000", "2000", "3000", "4000", "5000", "1000"]
            }
        ]);
        balance -= fastCashAns.cash;
        console.log(`Your remaining balance is: ${balance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
