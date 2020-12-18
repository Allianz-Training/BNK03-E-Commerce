"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const Manager_1 = require("../product/Manager");
var Option;
(function (Option) {
<<<<<<< HEAD
    Option[Option["ADD"] = 0] = "ADD";
    Option[Option["REMOVE"] = 1] = "REMOVE";
    Option[Option["VIEW"] = 2] = "VIEW";
    Option[Option["BACK"] = 3] = "BACK";
    Option[Option["QUIT"] = 4] = "QUIT";
})(Option || (Option = {}));
class Admin {
    constructor() {
        this.manager = new Manager_1.Manager();
        this.modeSelector = (splitInput, userInput) => {
            if (splitInput[0] === Option.ADD.toString()) {
=======
    Option["ADD"] = "add";
    Option["REMOVE"] = "remove";
    Option["VIEW"] = "view";
    Option["BACK"] = "back";
    Option["QUIT"] = "quit";
})(Option || (Option = {}));
class Admin {
    constructor() {
        this._manager = new Manager_1.Manager();
        this.modeSelector = (splitInput, readline) => {
            splitInput[0] = splitInput[0].toLowerCase();
            if (splitInput[0] === Option.ADD || splitInput[0] === Option.REMOVE) {
                if (splitInput[1] === undefined || splitInput[2] === undefined) {
                    console.log("Invalid input: please type in format as the instruction.");
                    return;
                }
                if (isNaN(parseInt(splitInput[2]))) {
                    console.log("Invalid input: please enter number as the instruction.");
                    return;
                }
            }
            if (splitInput[0] === Option.ADD) {
>>>>>>> 7055eaa23659faf45501e96f5f0d090835d140d8
                try {
                    console.log(this.add(splitInput[1], parseInt(splitInput[2])));
                }
                catch (_a) {
                    console.log("Invalid input: please type in format as the instruction.");
                }
            }
<<<<<<< HEAD
            else if (splitInput[0] === Option.REMOVE.toString()) {
                try {
                    console.log(this.remove(splitInput[1], parseInt(splitInput[2])));
=======
            else if (splitInput[0] === Option.REMOVE) {
                try {
                    console.log(this._remove(splitInput[1], parseInt(splitInput[2])));
>>>>>>> 7055eaa23659faf45501e96f5f0d090835d140d8
                }
                catch (_b) {
                    console.log("Invalid input: please type in format as the instruction.");
                }
            }
<<<<<<< HEAD
            else if (splitInput[0] === Option.VIEW.toString()) {
                console.log(this.view());
            }
            else if (splitInput[0] === Option.BACK.toString()) {
                console.log("Back to home.");
                this.isExitMode = true;
            }
            else if (splitInput[0] === Option.QUIT.toString()) {
                console.log("Quit program!");
=======
            else if (splitInput[0] === Option.VIEW) {
                console.log(this._view());
            }
            else if (splitInput[0] === Option.BACK) {
                console.log("Back to home.");
                this._isExitMode = true;
            }
            else if (splitInput[0] === Option.QUIT) {
                console.log("Quit program!");
                readline.close();
>>>>>>> 7055eaa23659faf45501e96f5f0d090835d140d8
                process.exit(0);
            }
            else {
                console.log("Error");
            }
        };
    }
    run() {
        console.log("\nWelcome admin.\n");
<<<<<<< HEAD
        console.log(this.manager.getStockItems() + "\n");
=======
        console.log(this._manager.getStockItems() + "\n");
>>>>>>> 7055eaa23659faf45501e96f5f0d090835d140d8
        console.log("What do you want to do?\n");
        console.log("Enter 'ADD' <name> <amount> to add item to cart.");
        console.log("      example: ADD milk 4");
        console.log("Enter 'REMOVE' <name> <amount> to remove item from cart.");
        console.log("      example: REMOVE milk 5");
        console.log("Enter 'VIEW' to see all items in cart.");
        console.log("Enter 'BACK' to go to login page");
        console.log("Enter 'QUIT' to exit program\n");
<<<<<<< HEAD
        this.isExitMode = false;
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        // ask user for the input
        rl.question(``, (userInput) => {
            while (!this.isExitMode) {
                let input = userInput.nextLine().trim().toUpperCase();
                let splitInput = input.split(" ");
                let isValidInput = false;
                for (let o in Option) {
                    if (o.toLowerCase() == splitInput[0].toLowerCase()) {
=======
        this._isExitMode = false;
        const readline = require("readline");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        // ask user for the input
        let recursiveAsyncReadLine = () => {
            rl.question("Type command here >> ", (input) => {
                let splitInput = input.toUpperCase().split(" ");
                let isValidInput = false;
                for (let o in Option) {
                    if (Option[o] === splitInput[0].toLowerCase()) {
>>>>>>> 7055eaa23659faf45501e96f5f0d090835d140d8
                        isValidInput = true;
                    }
                }
                if (!isValidInput) {
                    console.log("Error: Please enter 'ADD', 'REMOVE', 'VIEW', 'BACK' or 'QUIT' only.(can enter both lower case and upper case)");
                }
                else {
<<<<<<< HEAD
                    this.modeSelector(splitInput, userInput);
                }
            }
            rl.close();
        });
    }
    add(name, amount) {
        return this.manager.addItemToStock(name, amount);
    }
    remove(name, amount) {
        return this.manager.removeItemFromStock(name, amount);
    }
    view() {
        return this.manager.getStockItems();
=======
                    this.modeSelector(splitInput, rl);
                }
                if (!this._isExitMode) {
                    recursiveAsyncReadLine();
                }
            });
        };
        recursiveAsyncReadLine();
    }
    add(name, amount) {
        return this._manager.addItemToStock(name, amount);
    }
    _remove(name, amount) {
        return this._manager.removeItemFromStock(name, amount);
    }
    _view() {
        return this._manager.getStockItems();
>>>>>>> 7055eaa23659faf45501e96f5f0d090835d140d8
    }
}
exports.Admin = Admin;
//# sourceMappingURL=Admin.js.map