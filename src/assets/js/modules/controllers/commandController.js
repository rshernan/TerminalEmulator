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
import { JS } from '../commands/JS.js';
import { Touch } from "../commands/touch.js";
import { Man } from "../commands/man.js";
import { ChangeColor } from "../commands/changeColor.js";
import { ChangeTheme } from "../commands/changeTheme.js";

class CommandController {
    constructor() {}

    selectCommand(writedLine) {
        let output = false;
        switch (this.getCommand(writedLine)) {
            case "ls":
                let lscommand = new ls();
                document.querySelector(
                    ".actual>.console__output"
                ).innerHTML += lscommand.executeCommand(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "echo":
                let echo = new Echo();
                output=echo.executeComand(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "pwd":
                let pwd = new Pwd();
                output=pwd.showCurrentPath();
                historic.getCommandsHistory(writedLine);
                break;
            case "cd":
                let cdcommand = new cd();
                output=cdcommand.chooseCDAction(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "mkdir":
                let mkdir = new Mkdir();
                output=mkdir.executeCommand(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "cat":
                let catcommand = new cat();
                output = catcommand.showContent(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "rm":
                let rm = new Rm();
                output=rm.executeComand(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "mv":
                let mv = new Mv();
                output=mv.executeComand(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "clear":
                let clearcommand = new clear();
                clearcommand.clearConsole(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "help":
                let helpCommand = new Help();
                document.querySelector(
                    ".actual>.console__output"
                ).style.whiteSpace = "pre";
                document.querySelector(
                    ".actual>.console__output"
                ).textContent += helpCommand.print();
                historic.getCommandsHistory(writedLine);
                break;
            case "man":
                let manCommand = new Man();
                console.log(manCommand.executeCommand(writedLine));
                document.querySelector(
                    ".actual>.console__output"
                ).style.whiteSpace = "pre";
                document.querySelector(
                    ".actual>.console__output"
                ).textContent += manCommand.executeCommand(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "JS":
                let jsCommand= new JS();
                output =jsCommand.executeCommand(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "touch":
                let touch = new Touch();
                output = touch.executeComand(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "color":
                let changeColor = new ChangeColor();
                changeColor.execute(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            case "theme":
                let changeTheme = new ChangeTheme();
                changeTheme.execute(writedLine);
                historic.getCommandsHistory(writedLine);
                break;
            default:
                console.log("command not found");
        }
        if (output) {
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
