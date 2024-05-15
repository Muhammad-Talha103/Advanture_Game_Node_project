#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
    constructor(name) {
        this.name = name;
    }
}
class Opponent {
    name;
    fuel = 100;
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    constructor(name) {
        this.name = name;
    }
}
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name ?",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter your name";
        }
    }
]);
let opponent = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Select Opponent :",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let player1 = new Player(player.name);
let opponent1 = new Opponent(opponent.name);
console.log(`${chalk.bold.green(player1.name)} ${chalk.yellow.bold("VS")} ${chalk.bold.red(opponent1.name)}`);
let condition = true;
while (condition) {
    let ask = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What do you want to do?",
            choices: ["Attack", "Drink", "Run For Your Life"]
        }
    ]);
    if (ask.action === "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num === 1) {
            player1.fuelDecrease();
            console.log(chalk.red.bold(`${player1.name} Fuel is ${player1.fuel}`));
            console.log(chalk.green.bold(`${opponent1.name} Fuel is ${opponent1.fuel}`));
            if (player1.fuel <= 0) {
                console.log(chalk.red.bold("\nYou Loose.Better Luck Next Time"));
                process.exit();
            }
        }
        if (num === 0) {
            opponent1.fuelDecrease();
            console.log(chalk.green.bold(`${player1.name} Fuel is ${player1.fuel}`));
            console.log(chalk.red.bold(`${opponent1.name} Fuel is ${opponent1.fuel}`));
            if (opponent1.fuel <= 0) {
                console.log(chalk.green.bold("\nYou Win!"));
                process.exit();
            }
        }
    }
    else if (ask.action === "Drink") {
        player1.fuelIncrease();
        console.log(chalk.green.bold.italic(`You Drink Health Portion . Your Fuel is ${player1.fuel}`));
    }
    else if (ask.action === "Run For Your Life") {
        console.log(chalk.red.bold.italic("You Loose . Better Luck Next Time"));
        process.exit();
    }
    else if (opponent.name === "Assassin") {
        if (ask.action === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num === 1) {
                player1.fuelDecrease();
                console.log(chalk.red.bold(`${player1.name} Fuel is ${player1.fuel}`));
                console.log(chalk.green.bold(`${opponent1.name} Fuel is ${opponent1.fuel}`));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold("\nYou Loose.Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num === 0) {
                opponent1.fuelDecrease();
                console.log(chalk.green.bold(`${player1.name} Fuel is ${player1.fuel}`));
                console.log(chalk.red.bold(`${opponent1.name} Fuel is ${opponent1.fuel}`));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.green.bold("\nYou Win!"));
                    process.exit();
                }
            }
        }
        else if (ask.action === "Drink") {
            player1.fuelIncrease();
            console.log(chalk.green.bold.italic(`You Drink Health Portion . Your Fuel is ${player1.fuel}`));
        }
        else if (ask.action === "Run For Your Life") {
            console.log(chalk.red.bold.italic("You Loose . Better Luck Next Time"));
            process.exit();
        }
    }
    else if (opponent.name === "Zombie") {
        if (ask.action === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num === 1) {
                player1.fuelDecrease();
                console.log(chalk.green.bold(`${player1.name} Fuel is ${player1.fuel}`));
                console.log(chalk.red.bold(`${opponent1.name} Fuel is ${opponent1.fuel}`));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold("\nYou Loose.Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num === 0) {
                opponent1.fuelDecrease();
                console.log(chalk.green.bold(`${player1.name} Fuel is ${player1.fuel}`));
                console.log(chalk.red.bold(`${opponent1.name} Fuel is ${opponent1.fuel}`));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.green.bold("\nYou Win!"));
                    process.exit();
                }
            }
        }
        else if (ask.action === "Drink") {
            player1.fuelIncrease();
            console.log(chalk.green.bold.italic(`You Drink Health Portion . Your Fuel is ${player1.fuel}`));
        }
        else if (ask.action === "Run For Your Life") {
            console.log(chalk.red.bold.italic("You Loose . Better Luck Next Time"));
            process.exit();
        }
    }
}
