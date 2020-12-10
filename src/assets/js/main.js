import { addSpan } from "./modules/renders/console_render.js";
import {dataStrc} from "./modules/controllers/data"
import "../css/style.css";

let div = document.querySelector(".writed__input");

window.addEventListener("load", function () {
    div.focus();
});

document.addEventListener("keydown", addSpan, false);

dataStrc.moveDocumentOrFolder('./holamundo.txt', 'hm.txt');