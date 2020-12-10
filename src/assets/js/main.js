import { addSpan } from "./modules/renders/console_render.js";
import { dataStrc } from "./modules/controllers/data.js";
import { cd } from "./modules/commands/cd.js";
import { cat } from "./modules/commands/cat.js";

let div = document.querySelector(".writed__input");

window.addEventListener("load", function () {
    div.focus();
});

document.addEventListener("keydown", addSpan, false);




let main = dataStrc.createFolder("main");
dataStrc.createDocument("text_file", "hello world");
dataStrc.createFolder("inside_main")

console.log(main);
