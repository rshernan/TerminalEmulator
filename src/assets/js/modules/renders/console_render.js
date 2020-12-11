import { autoComplete } from "../commands/tab.js";
import { CommandController } from "../controllers/commandController.js";
import { dataStrc } from "../controllers/data.js";

let writedLine = "";
let historyCommands = [];
let commandController = new CommandController();

function addSpan(key) {
    switch (key.keyCode) {
        case 13:
            writedLine = document.querySelector(".actual .writed__input").value;
            historyCommands.push(
                document.querySelector(".actual .writed__input").value
            );
            //todo check writedLine and actualPath before send it to selectCommand check(writedLine) check(actualPath);
            commandController.selectCommand(
                writedLine,
                dataStrc.pathToString(dataStrc.path)
            );

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
    }
}

export { addSpan, writedLine };
