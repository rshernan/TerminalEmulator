import { ls } from "../commands/ls.js";

class CommandController {
    constructor() {}

    selectCommand(writedLine) {
        switch (this.getCommand(writedLine)) {
            case "ls":
                let lscommand = new ls();
                lscommand.executeCommand(writedLine);
                break;
            case "echo":
                break;
            case "pwd":
                break;
            case "cd":
                break;
            case "mkdir":
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