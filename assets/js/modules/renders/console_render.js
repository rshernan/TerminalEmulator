function addSpan(key){
    if(key.keyCode === 13){
        document.querySelector("span").insertAdjacentHTML("afterend", `
            <div class="path">../Desktop/MSE/Projects</div>
            <div class="console_input"><img src="assets/svg/angulo-de-flecha-derecha.svg">cd TerminalEmulator</div>
            <div class="console_output">../Desktop/MSE/Projects/TerminalEmulator</div>`);
    }
}

document.addEventListener("keydown", addSpan, false);