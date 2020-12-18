import { Admin } from "./user/Admin";
import { Customer } from "./user/Customer";
import { User } from "./user/IUser";
// import { util } from "./java.util.Scanner"; 

enum Mode {
    BUY, MANAGE, QUIT
}

class Main {
    private _admin: User = new Admin();
    private _customer: User = new Customer();

    public async main() {
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log("printed");

        let a = 10;
        // ask user for the input
        while (a > 0) {
            await rl.question(`hi?`, (userInput) => {

                console.log(userInput);

            })
            console.log(a);
            a--;
        };


        rl.close();

    }
}
console.log("here");

let m = new Main();
m.main();