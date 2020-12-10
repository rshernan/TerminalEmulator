import { ls } from "../commands/ls.js";
import { Mkdir } from "../commands/mkdir.js";
import { Pwd } from "../commands/pwd.js";
import { cd } from "../commands/cd.js";
import { Echo } from "../commands/echo.js";
import { Rm } from "../commands/rm.js";
import { Help } from "../commands/help.js";

class CommandController {
    constructor() {}

    selectCommand(writedLine) {
        switch (this.getCommand(writedLine)) {
            case "ls":
                let lscommand = new ls();
                document.querySelector(
                    ".actual>.console__output"
                ).innerHTML += lscommand.executeCommand(writedLine);
                break;
            case "echo":
                let echo = new Echo();
                echo.executeComand(writedLine);
                break;
            case "pwd":
                let pwd = new Pwd();
                pwd.showCurrentPath();
                break;
            case "cd":
                let cdcommand = new cd();
                cdcommand.chooseCDAction();
                break;
            case "mkdir":
                let mkdir = new Mkdir();
                mkdir.executeCommand(writedLine);
                break;
            case "cat":
                break;
            case "rm":
                let rm = new Rm();
                rm.executeComand(writedLine);
                break;
            case "mv":
                break;
            case "clear":
                break;
            case "help":
                let helpCommand = new Help();
                document.querySelector(
                    ".actual>.console__output"
                ).style.whiteSpace = "pre";
                document.querySelector(
                    ".actual>.console__output"
                ).textContent += helpCommand.print();
                break;
            case "man":
                break;
            case "JS":
                break;
            default:
                console.log("command not found");
        }
    }

    getCommand(writedLine) {
        return writedLine.split(" ")[0];
    }
}

export { CommandController };
