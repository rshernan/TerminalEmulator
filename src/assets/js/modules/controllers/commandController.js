import { ls } from "../commands/ls.js";
import { Mkdir } from "../commands/mkdir.js";
import { Pwd } from "../commands/pwd.js";
import { cd } from "../commands/cd.js";
import { Echo } from '../commands/echo.js';
import { cat } from "../commands/cat.js";
import { Rm } from '../commands/rm.js';


class CommandController {
    constructor() {}

    selectCommand(writedLine) {
        switch (this.getCommand(writedLine)) {
            case "ls":
                let lscommand = new ls();
                lscommand.executeCommand(writedLine);
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
                cdcommand.chooseCDAction(writedLine);
                break;
            case "mkdir":
                let mkdir = new Mkdir();
                mkdir.executeCommand(writedLine);
                break;
            case "cat":
                let catcommand = new cat();
                catcommand.showContent(writedLine);
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
