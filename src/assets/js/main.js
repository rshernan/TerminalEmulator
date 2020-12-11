import { addSpan } from "./modules/renders/console_render.js";
<<<<<<< HEAD
=======
import { dataStrc } from "./modules/controllers/data.js";
>>>>>>> 02c32a99f9d3690d3427a02ec3efe655770eb893
import "../css/style.css";

let div = document.querySelector(".writed__input");

window.addEventListener("load", function () {
    div.focus();
});

document.querySelector(".actual__path").innerHTML = dataStrc.pathToString(
    dataStrc.path
);

document.addEventListener("keydown", addSpan, false);
