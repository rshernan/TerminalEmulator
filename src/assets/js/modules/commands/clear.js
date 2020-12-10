import { dataStrc } from "../controllers/data.js";

class clear {

    constructor(){

    }

    clearConsole(){
        //location.reload();
        document.querySelector("body").innerHTML = 
            `<div class="actual">
                <div class="actual__path">../Desktop/MSE/Projects</div>
                    <div class="console__input"> <span class="simbol__input">&#62;</span>
                        <input type="text" class="writed__input"></input>
                    </div>
                <div class="console__output"></div>
            </div>`
    }
}
export {clear}