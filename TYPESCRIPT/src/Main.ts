import { Admin } from "./user/Admin";
import { Customer } from "./user/Customer";
import { User } from "./user/IUser";
// import { util } from "./java.util.Scanner";

enum Mode {
  BUY = "buy",
  MANAGE = "manage",
  QUIT = "quit",
}

class Main {
  private static _admin: User = new Admin();
  private static _customer: User = new Customer();

  public static main() {
    const readline = require("readline");

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let recursiveAsyncReadLine = async (): Promise<void> => {
      console.log("What do you want to do? [BUY, MANAGE, QUIT]\n");
      console.log("Enter 'BUY' to enter customer mode");
      console.log("Enter 'MANAGE' to enter admin mode");
      console.log("Enter 'QUIT' to exit program");

      await rl.question("\nEnter mode: ", (input: string) => {
        input = input.trim().toLowerCase();
        let isValidInput: boolean = false;

        for (let m in Mode) {
          if (Mode[m] === input) {
            isValidInput = true;
          }
        }
        if (!isValidInput) {
          console.log(
            "Error: Please enter 'BUY', 'MANAGE', or 'QUIT' only.(can enter both lower case and upper case)"
          );
        } else {
          this.modeSelector(input, rl);
        }
        console.log(111);

        recursiveAsyncReadLine();
        console.log(111222);
      });
    };
    recursiveAsyncReadLine();
  }

  public static modeSelector(input: string, rl: any): void {
    if (input === Mode.BUY) {
      this._customer.run(rl);
    } else if (input === Mode.MANAGE) {
      rl.question("Enter password: ", (password: string) => {
        if (password === "1234") {
          this._admin.run(rl);
        } else {
          rl.close();
          console.log("Password incorrect! Hint: 456+778=?");
        }
      });
    } else if (input === Mode.QUIT) {
      console.log("Quit program!");
      rl.close();
      process.exit(0);
    } else {
      console.log("Error");
    }
  }
}
console.log("here");

Main.main();
