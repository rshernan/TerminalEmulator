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
            document.querySelector("span").insertAdjacentHTML(
                "afterend",
                `
                <div class="actual__path">../Desktop/MSE/Projects</div>
                <div class="console__input"><img src="assets/svg/angulo-de-flecha-derecha.svg">
                  <div class="writed__input"></div>
                </div>
                <div class="console__output"></div>`
            );
            key.preventDefault();
            break;
    }
}
