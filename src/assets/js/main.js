import { addSpan } from "./modules/renders/console_render.js";
import "../css/style.css";
var div = document.querySelector(".writed__input");

window.addEventListener("load", function () {
    div.focus();
});

document.querySelector("actual .writed__input");

document.querySelector(".writed__input").setAttribute("contentEditable", true);
document.addEventListener("keydown", addSpan, false);
