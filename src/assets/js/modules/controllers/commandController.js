import { ls } from "../commands/ls.js";
import { Mkdir } from "../commands/mkdir.js";
import { Pwd } from "../commands/pwd.js";
import { cd } from "../commands/cd.js";

class CommandController {
    constructor() {}

    selectCommand(writedLine, actualPath) {
        switch (this.getCommand(writedLine)) {
            case "ls":
                let lscommand = new ls();
                lscommand.executeCommand(writedLine);
                break;
            case "echo":
                break;
            case "pwd":
                let pwd = new Pwd();
                pwd.showCurrentPath();
                break;
            case "cd":
                let cdcommand = new cd();
                break;
            case "mkdir":
                let mkdir = new Mkdir();
                mkdir.executeCommand(actualPath, writedLine);
                break;
            case "cat":
                break;
            case "rm":
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
