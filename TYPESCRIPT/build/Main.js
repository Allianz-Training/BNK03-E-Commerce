"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = require("./user/Admin");
const Customer_1 = require("./user/Customer");
// import { util } from "./java.util.Scanner"; 
var Mode;
(function (Mode) {
    Mode[Mode["BUY"] = 0] = "BUY";
    Mode[Mode["MANAGE"] = 1] = "MANAGE";
    Mode[Mode["QUIT"] = 2] = "QUIT";
})(Mode || (Mode = {}));
class Main {
    constructor() {
        this._admin = new Admin_1.Admin();
        this._customer = new Customer_1.Customer();
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            const readline = require('readline');
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            console.log("printed");
            let a = 10;
            // ask user for the input
            while (a > 0) {
                yield rl.question(`hi?`, (userInput) => {
                    console.log(userInput);
                });
                console.log(a);
                a--;
            }
            ;
            rl.close();
        });
    }
}
console.log("here");
let m = new Main();
m.main();
//# sourceMappingURL=Main.js.map