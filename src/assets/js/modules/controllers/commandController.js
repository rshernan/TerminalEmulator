import { ls } from "../commands/ls.js";
import { Mkdir } from "../commands/mkdir.js";
import { Pwd } from "../commands/pwd.js";
import { cd } from "../commands/cd.js";
import { Echo } from "../commands/echo.js";
import { cat } from "../commands/cat.js";
import { Rm } from "../commands/rm.js";
import { clear } from "../commands/clear.js";
import { Help } from "../commands/help.js";
import { Mv } from "../commands/mv.js";
import { Touch } from '../commands/touch.js';

class CommandController {
    constructor() {}

    selectCommand(writedLine) {
        let output=false;
        switch (this.getCommand(writedLine)) {
            case "ls":
                let lscommand = new ls();
                document.querySelector(
                    ".actual>.console__output"
                ).innerHTML += lscommand.executeCommand(writedLine);
                break;
            case "echo":
                let echo = new Echo();
                output=echo.executeComand(writedLine);
                break;
            case "pwd":
                let pwd = new Pwd();
                output=pwd.showCurrentPath();
                break;
            case "cd":
                let cdcommand = new cd();
                output=cdcommand.chooseCDAction(writedLine);
                break;
            case "mkdir":
                let mkdir = new Mkdir();
                output=mkdir.executeCommand(writedLine);
                break;
            case "cat":
                let catcommand = new cat();
                catcommand.showContent(writedLine);
                break;
            case "rm":
                let rm = new Rm();
                output=rm.executeComand(writedLine);
                break;
            case "mv":
                let mv = new Mv();
                output=mv.executeComand(writedLine);
                break;
            case "clear":
                let clearcommand = new clear();
                clearcommand.clearConsole(writedLine);
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
            case "touch":
                let touch = new Touch();
                output=touch.executeComand(writedLine);
            default:
                console.log("command not found");
        }
        if(output){
            document.querySelector(
                ".actual>.console__output"
            ).textContent = output;
        }
    }

    getCommand(writedLine) {
        return writedLine.split(" ")[0];
    }
}

export { CommandController };
