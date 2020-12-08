export { addSpan, writedLine };

let writedLine = "";
let historyCommands = [];
function addSpan(key) {
    switch (key.keyCode) {
        case 13:
            document.querySelector(
                ".console__output"
            ).innerHTML = document.querySelector(".writed__input").innerHTML;
            historyCommands.push(
                document.querySelector(".writed__input").innerHTML
            );
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
