import { CommandController } from "../controllers/commandController.js";
let writedLine = "";
let historyCommands = [];
let commandController = new CommandController();
function addSpan(key) {
    switch (key.keyCode) {
        case 13:
            writedLine = document.querySelector(".writed__input").value;
            document.querySelector(
                ".console__output"
            ).innerHTML = document.querySelector(".writed__input").value;
            historyCommands.push(
                document.querySelector(".writed__input").value
            );
            //todo check writedLine before send it to selectCommand check(writedLine);
            commandController.selectCommand(writedLine);

            document.querySelector(".actual").insertAdjacentHTML(
                "afterend",
                `
                <div class="actual">
                    <div class="actual__path">../Desktop/MSE/Projects</div>
                    <div class="console__input"> <span class="simbol__input">&#62;</span>
                        <input type="text" class="writed__input"></textarea>
                    </div>
                    <div class="console__output"></div>
                </div>`
            );

            key.preventDefault();
            break;
    }
}

export { addSpan, writedLine };
