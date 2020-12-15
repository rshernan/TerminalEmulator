import { addSpan, removeCtrlPressed } from "./modules/renders/console_render.js";
import { dataStrc } from "./modules/controllers/data.js";
import "../css/style.css";

let div = document.querySelector(".writed__input");

window.addEventListener("load", function () {
    div.focus();
});

document.querySelector(".actual__path").innerHTML = dataStrc.pathToString(
    dataStrc.path
);

document.addEventListener("keydown", addSpan, false);

document.addEventListener('keyup', removeCtrlPressed, false);
