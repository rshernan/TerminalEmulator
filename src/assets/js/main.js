import { addSpan } from "./modules/renders/console_render.js";
import "../css/style.css";
import {dataStrc} from "./modules/controllers/data"

let div = document.querySelector(".writed__input");

window.addEventListener("load", function () {
    div.focus();
});

document.addEventListener("keydown", addSpan, false);

