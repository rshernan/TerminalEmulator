import { addSpan } from "../renders/console_render";

class clear {

    constructor(){

    }

    clearConsole(str){
        let error=false;
        if(str === "clear"){
            document.querySelector("body").innerHTML = 
            `<div class="actual">
                <div class="actual__path">../Desktop/MSE/Projects</div>
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
}
export {clear}