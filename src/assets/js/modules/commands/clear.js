import { dataStrc } from "../controllers/data.js";

class clear {
    constructor(){

    }

    clearConsole(str){
        let error=false;
        if(str === "clear"){
            document.querySelector("body").innerHTML = 
            `<div class="actual">
                <div class="actual__path">${dataStrc.pathToString(dataStrc.path)}</div>

                    <div class="console__input"> <span class="simbol__input">&#62;</span>
                        <input type="text" class="writed__input"></input>
                    </div>
            </div>`;
        } else {
            error = "There is no such command.";
            console.log(error);
            return error;
        }
    }

    man() {
        return `
NAME
       clear - clear the terminal screen

SYNOPSIS
       clear

DESCRIPTION
       clear  clears  your  screen if this is possible, including its scrollback buffer (if the extended “E3” capability is defined).  clear looks in the environment for the terminal type given by the environment variable TERM, and
       then in the terminfo database to determine how to clear the screen.

       clear writes to the standard output.  You can redirect the standard output to a file (which prevents clear from actually clearing the screen), and later cat the file to the screen, clearing it at that point.
        `;
    }
}
export { clear };
