import { addSpan } from "./modules/renders/console_render.js";
import "../css/style.css";
import { Rm } from './modules/commands/rm.js';


let div = document.querySelector(".writed__input");

window.addEventListener("load", function () {
    div.focus();
});

document.addEventListener("keydown", addSpan, false);


let rm = new Rm();


console.log(rm.executeComand('file'));