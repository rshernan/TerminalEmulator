import { autoComplete } from "../commands/tab.js";
import { CommandController } from "../controllers/commandController.js";
import { dataStrc } from "../controllers/data.js";
import { historic } from "../controllers/history.js";

let writedLine = "";
let historyCommands = [];
let commandController = new CommandController();
let ctrlPressed = false;

function addSpan(key) {
    switch (key.keyCode) {
        case 13:
            writedLine = document.querySelector(".actual .writed__input").value;
            historyCommands.push(
                document.querySelector(".actual .writed__input").value
            );
            //todo check writedLine and actualPath before send it to selectCommand check(writedLine) check(actualPath);
            commandController.selectCommand(writedLine);

            document
                .querySelector(".actual .console__input")
                .removeChild(
                    document.querySelector(".actual .console__input")
                        .lastElementChild
                );
            document
                .querySelector(".actual .simbol__input")
                .insertAdjacentHTML(
                    "afterend",
                    `<div class="writed__input">${writedLine}</div>`
                );
            document.querySelector(".actual").insertAdjacentHTML(
                "afterend",
                `
                <div class="actual">
                    <div class="actual__path">../Desktop/MSE/Projects</div>
                    <div class="console__input"> <span class="simbol__input">&#62;</span>
                        <input type="text" class="writed__input"></input>
                    </div>
                    <div class="console__output"></div>
                </div>`
            );
            document.querySelector(".actual").classList.toggle("actual");

            document
                .querySelector(".actual .writed__input")
                .focus({ preventScroll: false });

            document.querySelector(
                ".actual .actual__path"
            ).innerHTML = dataStrc.pathToString(dataStrc.path);

            key.preventDefault();
            break;
        case 9:
            autoComplete();
            key.preventDefault();
            break;
        case 38:
            historic.getPreviousCommand();
            break;

        //arrow-down
        case 40:
            historic.getNextCommand();
            break;
        case 17:
            ctrlPressed = true;
            key.preventDefault();
            break;

        case 37:
            if (ctrlPressed) {
                writedLine = "cd ..";
                commandController.selectCommand(writedLine);
                document.querySelector(
                    ".actual .actual__path"
                ).innerHTML = dataStrc.pathToString(dataStrc.path);
            }
            break;
        case 39:
            if (ctrlPressed) {
                let input = "cd ";
                let dataInFolder = dataStrc.getDataFromThisPath();
                let cont = dataInFolder.content;
                let names = Object.keys(cont);

                let folders = names.filter((name) => cont[name].type == "dir");

                if (folders) {
                    input += folders[0];
                    commandController.selectCommand(input);
                    document.querySelector(
                        ".actual .actual__path"
                    ).innerHTML = dataStrc.pathToString(dataStrc.path);
                }
            }
            break;
    }
}

function removeCtrlPressed(key) {
    if (key.keyCode == 17) {
        ctrlPressed = false;
    }
}

export { addSpan, writedLine, removeCtrlPressed };
